// pages/_app.tsx
import '../styles/globals.css';
import Script from 'next/script';
import { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let vantaEffect: { destroy: () => void } | null = null;

    const setVanta = () => {
      if (window.VANTA) {
        vantaEffect = window.VANTA.WAVES({
          el: document.querySelector('#vanta-bg')!,
          mouseControls: false,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          shininess: 13.00,
          scaleMobile: 1.00,
          color: 0x90c0f
        });
      }
    };

    if (typeof window !== 'undefined') {
      setVanta();
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
      <div id="vanta-bg" className="min-h-screen">
        <Component {...pageProps} />
        {/* Suppress ESLint warning if necessary or move to _document.js */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js" strategy="beforeInteractive" />
      </div>
  );
}

export default MyApp;
