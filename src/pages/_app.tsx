import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@/styles/birds.css';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="forest">
            <div className="flex flex-col min-h-screen">
                <Component {...pageProps} />
                <Analytics />
            </div>
        </ThemeProvider>
    );
}

export default MyApp;
