'use client';
import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';

// ─────────── Vertex Shader ───────────
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// ─────────── Fragment Shader ───────────
// Custom shader: scroll-driven day/night blend + chromatic aberration + warp
const fragmentShader = `
  uniform sampler2D uDayTexture;
  uniform sampler2D uNightTexture;
  uniform float uBlend;         // 0.0 = day, 1.0 = night (scroll progress)
  uniform float uVelocity;      // scroll velocity (0.0 - 1.0)
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // Barrel distortion function
  vec2 barrelDistort(vec2 uv, float amount) {
    vec2 centered = uv - 0.5;
    float r2 = dot(centered, centered);
    float distortion = 1.0 + amount * r2;
    return centered * distortion + 0.5;
  }

  void main() {
    vec2 uv = vUv;

    // ── Scroll-velocity warp (barrel distortion) ──
    float warpStrength = uVelocity * 0.15;
    vec2 warpedUv = barrelDistort(uv, warpStrength);

    // Subtle wave distortion based on velocity
    float wave = sin(uv.y * 12.0 + uTime * 2.0) * uVelocity * 0.003;
    warpedUv.x += wave;

    // ── Chromatic Aberration ──
    float aberration = uVelocity * 0.012;
    vec2 uvR = warpedUv + vec2(aberration, 0.0);
    vec2 uvG = warpedUv;
    vec2 uvB = warpedUv - vec2(aberration, 0.0);

    // Sample both textures with chromatic split
    vec4 dayR  = texture2D(uDayTexture,   uvR);
    vec4 dayG  = texture2D(uDayTexture,   uvG);
    vec4 dayB  = texture2D(uDayTexture,   uvB);
    vec4 nightR = texture2D(uNightTexture, uvR);
    vec4 nightG = texture2D(uNightTexture, uvG);
    vec4 nightB = texture2D(uNightTexture, uvB);

    // Blend day/night per channel
    float r = mix(dayR.r, nightR.r, uBlend);
    float g = mix(dayG.g, nightG.g, uBlend);
    float b = mix(dayB.b, nightB.b, uBlend);

    // ── Slight blur simulation when stationary ──
    // We approximate a subtle soft-focus by averaging nearby samples
    float blurAmount = (1.0 - uVelocity) * 0.002;
    vec4 blurSample = vec4(0.0);
    if (blurAmount > 0.0001) {
      for (float x = -1.0; x <= 1.0; x += 1.0) {
        for (float y = -1.0; y <= 1.0; y += 1.0) {
          vec2 offset = vec2(x, y) * blurAmount;
          vec4 dayS = texture2D(uDayTexture, warpedUv + offset);
          vec4 nightS = texture2D(uNightTexture, warpedUv + offset);
          blurSample += mix(dayS, nightS, uBlend);
        }
      }
      blurSample /= 9.0;
      // Blend between sharp (velocity) and blurred (stationary)
      vec4 sharpColor = vec4(r, g, b, 1.0);
      gl_FragColor = mix(blurSample, sharpColor, uVelocity * 2.0);
    } else {
      gl_FragColor = vec4(r, g, b, 1.0);
    }

    // ── Subtle vignette ──
    vec2 vigUv = vUv * (1.0 - vUv);
    float vig = vigUv.x * vigUv.y * 15.0;
    vig = pow(vig, 0.25);
    gl_FragColor.rgb *= mix(0.6, 1.0, vig);

    // ── Frosted glass overlay tint ──
    // Slight blue tint that shifts warmer at night
    vec3 dayTint = vec3(0.92, 0.95, 1.0);
    vec3 nightTint = vec3(0.85, 0.88, 1.0);
    vec3 tint = mix(dayTint, nightTint, uBlend);
    gl_FragColor.rgb *= tint;

    gl_FragColor.a = 1.0;
  }
`;

export default function WebGLBackground() {
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const materialRef = useRef(null);
  const rafRef = useRef(null);
  const scrollRef = useRef({ y: 0, velocity: 0, targetVelocity: 0 });
  const mountedRef = useRef(true);

  const updateCSSTheme = useCallback((_blend) => {
    // Disabled color changes during scroll to prevent visibility issues with cards.
    // The background WebGL effect still runs, but CSS theme colors remain static.
    const blend = 0; // Force light mode colors

    const root = document.documentElement;
    const bgR = Math.round(255 - blend * (255 - 18));
    const bgG = Math.round(255 - blend * (255 - 18));
    const bgB = Math.round(255 - blend * (255 - 30));

    const tintR = Math.round(245 - blend * (245 - 28));
    const tintG = Math.round(248 - blend * (248 - 28));
    const tintB = Math.round(255 - blend * (255 - 45));

    const textR = Math.round(26 + blend * (255 - 26));
    const textG = Math.round(26 + blend * (255 - 26));
    const textB = Math.round(46 + blend * (255 - 46));

    const mutedR = Math.round(102 + blend * (180 - 102));
    const mutedG = Math.round(102 + blend * (180 - 102));
    const mutedB = Math.round(102 + blend * (200 - 102));

    root.style.setProperty('--bg-white', `rgb(${bgR},${bgG},${bgB})`);
    root.style.setProperty('--bg-tint', `rgb(${tintR},${tintG},${tintB})`);
    root.style.setProperty('--text', `rgb(${textR},${textG},${textB})`);
    root.style.setProperty('--text-muted', `rgb(${mutedR},${mutedG},${mutedB})`);

    root.style.setProperty('--bg-surface', `rgba(${bgR},${bgG},${bgB}, 0.75)`);
    root.style.setProperty('--bg-base', `rgba(${tintR},${tintG},${tintB}, 0.6)`);
    root.style.setProperty('--asce-blue', `var(--primary)`);
    
    const accentAlpha = 0.6 + blend * 0.4;
    root.style.setProperty('--accent-blue', `rgba(0, 100, 255, ${accentAlpha})`);

    const borderAlpha = 0.08 + blend * 0.12;
    root.style.setProperty('--border', `rgba(${blend > 0.5 ? '255,255,255' : '0,61,165'}, ${borderAlpha})`);

    const shadowAlpha = 0.1 + blend * 0.15;
    root.style.setProperty('--shadow-card', `0 4px 16px rgba(0,0,0,${shadowAlpha})`);
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Setup Three.js ──
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    cameraRef.current = camera;

    // ── Load textures ──
    const loader = new THREE.TextureLoader();
    const dayTexture = loader.load('/cityscape-day.png');
    const nightTexture = loader.load('/cityscape-night.png');

    [dayTexture, nightTexture].forEach(tex => {
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
    });

    // ── Create fullscreen quad ──
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uDayTexture: { value: dayTexture },
        uNightTexture: { value: nightTexture },
        uBlend: { value: 0.0 },
        uVelocity: { value: 0.0 },
        uTime: { value: 0.0 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      depthTest: false,
      depthWrite: false,
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // ── Scroll tracking ──
    let lastScrollY = window.scrollY;
    let lastScrollTime = performance.now();

    const handleScroll = () => {
      const now = performance.now();
      const dt = Math.max(now - lastScrollTime, 1);
      const dy = Math.abs(window.scrollY - lastScrollY);
      const rawVelocity = dy / dt; // pixels per ms

      // Normalize velocity (0-1 range, capped)
      scrollRef.current.targetVelocity = Math.min(rawVelocity / 3.0, 1.0);

      lastScrollY = window.scrollY;
      lastScrollTime = now;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Decay velocity when not scrolling
    const velocityDecayInterval = setInterval(() => {
      scrollRef.current.targetVelocity *= 0.85;
      if (scrollRef.current.targetVelocity < 0.001) {
        scrollRef.current.targetVelocity = 0;
      }
    }, 50);

    // ── Handle resize ──
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      material.uniforms.uResolution.value.set(w, h);
    };
    window.addEventListener('resize', handleResize);

    // ── Animation loop ──
    const animate = (time) => {
      if (!mountedRef.current) return;

      // Calculate scroll progress (0-1 over the full page)
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;

      // Smooth velocity interpolation
      scrollRef.current.velocity += (scrollRef.current.targetVelocity - scrollRef.current.velocity) * 0.12;

      // Update shader uniforms
      material.uniforms.uBlend.value = Math.min(Math.max(scrollProgress, 0), 1);
      material.uniforms.uVelocity.value = scrollRef.current.velocity;
      material.uniforms.uTime.value = time * 0.001;

      // Update CSS theme variables
      updateCSSTheme(scrollProgress);

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    // ── Cleanup ──
    return () => {
      mountedRef.current = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearInterval(velocityDecayInterval);
      geometry.dispose();
      material.dispose();
      dayTexture.dispose();
      nightTexture.dispose();
      renderer.dispose();
    };
  }, [updateCSSTheme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
