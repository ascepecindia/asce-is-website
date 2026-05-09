'use client';
import dynamic from 'next/dynamic';
import PageTransition from '@/components/PageTransition';

// Dynamically import WebGLBackground with no SSR (Three.js requires window)
const WebGLBackground = dynamic(() => import('@/components/WebGLBackground'), {
  ssr: false,
});

export default function ClientLayout({ children }) {
  return (
    <>
      <WebGLBackground />
      <PageTransition>
        {children}
      </PageTransition>
    </>
  );
}
