import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                </Head>
                <body>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                (function() {
                  const theme = localStorage.getItem('theme') || 'forest';
                  document.documentElement.classList.add(theme);
                })();
              `,
                    }}
                />
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
