// pages/_document.tsx
/* eslint-disable @next/next/no-sync-scripts */

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" defer></script>
                    <script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js" defer></script>
                    <script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.net.min.js" defer></script>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;
