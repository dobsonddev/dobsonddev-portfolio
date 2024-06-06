// pages/_app.tsx
import { ThemeProvider, useTheme } from 'next-themes';
import { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@/styles/birds.css';
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }: AppProps) {
    const { theme } = useTheme();

    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            <div className="flex flex-col min-h-screen">
                <Component {...pageProps} />
                <Analytics />
            </div>
        </ThemeProvider>
    );
}

export default MyApp;
