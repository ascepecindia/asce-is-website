'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';

/**
 * PageTransition — Chromatic Refraction Warp on route changes.
 * Creates a full-screen canvas overlay that plays a warp + chromatic
 * aberration animation when the route changes, then fades out.
 */
export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const prevPathRef = useRef(pathname);

  const playTransition = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const startTime = performance.now();
    const duration = 600; // ms

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Phase 1 (0-0.5): Warp in with chromatic split
      // Phase 2 (0.5-1.0): Settle and fade out
      if (progress < 0.5) {
        const phase = progress / 0.5;
        const aberration = (1 - phase) * 30;
        const alpha = Math.sin(phase * Math.PI) * 0.4;

        // Chromatic aberration bands
        ctx.globalAlpha = alpha;

        // Red channel
        ctx.fillStyle = `rgba(255, 80, 80, 0.15)`;
        ctx.fillRect(-aberration, 0, canvas.width + aberration * 2, canvas.height);

        // Green channel
        ctx.fillStyle = `rgba(80, 255, 80, 0.08)`;
        ctx.fillRect(0, -aberration * 0.5, canvas.width, canvas.height + aberration);

        // Blue channel
        ctx.fillStyle = `rgba(80, 80, 255, 0.15)`;
        ctx.fillRect(aberration, 0, canvas.width - aberration * 2, canvas.height);

        // Lens distortion glow
        const gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, canvas.width * 0.6
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${0.15 * (1 - phase)})`);
        gradient.addColorStop(0.5, `rgba(100, 150, 255, ${0.08 * (1 - phase)})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.globalAlpha = 1;
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Scan lines
        ctx.globalAlpha = 0.03 * (1 - phase);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        for (let y = 0; y < canvas.height; y += 3) {
          ctx.beginPath();
          ctx.moveTo(0, y + Math.sin(y * 0.05 + elapsed * 0.01) * aberration * 0.3);
          ctx.lineTo(canvas.width, y + Math.cos(y * 0.05 + elapsed * 0.01) * aberration * 0.3);
          ctx.stroke();
        }
      } else {
        const phase = (progress - 0.5) / 0.5;
        const alpha = (1 - phase) * 0.15;

        // Settling glow
        const gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, canvas.width * 0.4
        );
        gradient.addColorStop(0, `rgba(0, 61, 165, ${alpha})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.globalAlpha = 1;
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setIsTransitioning(false);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      setIsTransitioning(true);
      // Scroll to top on page change
      window.scrollTo(0, 0);
      playTransition();
    }
    setDisplayChildren(children);
  }, [pathname, children, playTransition]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {displayChildren}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          pointerEvents: 'none',
          opacity: isTransitioning ? 1 : 0,
          transition: 'opacity 0.1s ease',
        }}
      />
    </>
  );
}
