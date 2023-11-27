// pages/_app.tsx
import { useEffect } from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const script = document.createElement('script')
        script.innerHTML = `
      VANTA.WAVES({
        el: '#my-background',
        color: 0x000000,
        waveHeight: 20,
        shininess: 50,
        waveSpeed: 1.5,
        zoom: 0.75
      })
    `
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div id="my-background" className="h-screen">
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp