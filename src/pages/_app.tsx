// pages/_app.tsx
import { ThemeProvider, useTheme } from 'next-themes';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    const { theme } = useTheme();

    useEffect(() => {
        if (theme === 'fractal' || theme === 'vector') {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.innerHTML = theme === 'fractal' ?
                `VANTA.WAVES({el: '#my-background', color: 0x90c0f, waveHeight: 10, shininess: 12, waveSpeed: 0.8, zoom: 1})` :
                `VANTA.NET({el: '#my-background',   mouseControls: true, touchControls: true, gyroControls: false, minHeight: 200.00, minWidth: 200.00, scale: 1.00, scaleMobile: 1.00, color: 0xe62b6b, backgroundColor: 0x21143c })`;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }
    }, [theme]);

    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            <div id="my-background" className="flex flex-col min-h-screen">
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}

export default MyApp;
