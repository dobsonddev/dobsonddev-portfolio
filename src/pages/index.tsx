import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import Home from '@/components/Home/Home';
import Resume from '../components/Resume/Resume';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Experiences from "@/components/Experience/Experiences";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import structuredData from '../../content/structuredData.json';

const IndexPage = () => {
    const [isChatModalOpen, setIsChatModalOpen] = useState(false);
    const { theme = 'light' } = useTheme();
    const vantaRef = useRef(null);
    let vantaEffect = useRef<{ destroy: () => void } | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const THREE = require('three');
            window.THREE = THREE; // Ensure THREE is available for Vanta.js
            const NET = require('vanta/dist/vanta.net.min.js').default;
            const DOTS = require('vanta/dist/vanta.dots.min.js').default;

            if (vantaEffect.current) vantaEffect.current.destroy();

            switch(theme) {
                case 'vector':
                    vantaEffect.current = NET({
                        el: vantaRef.current,
                        mouseControls: false,
                        touchControls: false,
                        gyroControls: false,
                        minHeight: 20.00,
                        minWidth: 20.00,
                        scale: 0.50,
                        scaleMobile: 1.50,
                        points: 6.00,
                        maxDistance: 29.00,
                        spacing: 25.00,
                        color: '#D9185A',
                        backgroundColor: '#21143C',
                        vertexColor: '#21143C',
                        size: 5.00
                    });
                    break;
                case 'dots':
                    vantaEffect.current = DOTS({
                        el: vantaRef.current,
                        backgroundColor: '#ebe2e2',
                        mouseControls: false,
                        touchControls: false,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                        showLines: false
                    });
                    break;
                default:
                    if (vantaEffect.current) vantaEffect.current.destroy();
                    break;
            }
        }

        return () => {
            if (vantaEffect.current) vantaEffect.current.destroy();
        };
    }, [theme]);

    const toggleChatModal = () => {
        setIsChatModalOpen(!isChatModalOpen);
    };

    const themeClassNames: Record<string, string> = {
        light: 'bg-light text-dark',
        forest: 'bg-forest-bg text-forest-text',
        vector: 'text-vector-text',
        dots: 'text-dark',
    };

    return (
        <div className={themeClassNames[theme] || themeClassNames['light']}>
            {theme === 'forest' && (
                <div className="fixed top-0 left-0 w-full h-full bg-forest-bg bg-cover bg-center"></div>
            )}
            <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full -z-10"></div>
            {theme === 'forest' && (
                <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
                <div className="bird-container bird-container--one">
                        <div className="bird bird--one"></div>
                    </div>
                    <div className="bird-container bird-container--two">
                        <div className="bird bird--two"></div>
                    </div>
                    <div className="bird-container bird-container--three">
                        <div className="bird bird--three"></div>
                    </div>
                    <div className="bird-container bird-container--four">
                        <div className="bird bird--four"></div>
                    </div>
                </div>
            )}
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />

                <title>Dobson Dunavant - Full-Stack Software Engineer, Portfolio Website</title>

                <meta name="description" content="My personal website, showcasing my experiences and skillsets thus far as an aspiring software engineer." />

                <meta name="keywords" content="Software Engineer, Frontend, backend, cloud, devops, developer, application, react, angular, aws, django, python, opencv, machine learning, ai, api, graphql, postgresql, docker, firebase, apache, data engineering, full-stack, CI/CD, tech, big tech, hiring, candidates" />

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta name="robots" content="index, follow" />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <meta name="author" content="Dobson Dunavant" />

                <meta name="image" content="https://dobsond.dev/DDlogo.png" />

                <meta name="geo.region" content="US" />

                <meta property="og:title" content="Dobson Dunavant - Personal Portfolio Website" />

                <meta property="og:description" content="My personal website, showcasing my experiences and skillsets thus far." />

                <meta property="og:type" content="website" />

                <meta property="og:url" content="https://dobsond.dev/" />

                <meta property="og:image" content="https://dobsond.dev/DDlogo.png" />

                <link rel="canonical" href="https://dobsond.dev/" />

                <meta name="twitter:card" content="summary_large_image" />

                <meta name="twitter:title" content="Dobson Dunavant - Personal Portfolio Website" />

                <meta name="twitter:description" content="My personal website, showcasing my experiences and skillsets thus far." />

                <meta name="twitter:image" content="https://dobsond.dev/DDlogo.png" />
            </Head>

            <Navbar toggleChatModal={toggleChatModal} />

            <div className="relative z-10 bg-none">
                <section id="home" className={`w-full min-h-screen`}>
                    <Home />
                </section>

                <section id="experiences" className={`w-full min-h-screen`}>
                    <Experiences />
                </section>

                <section id="resume" className={`w-full min-h-screen`}>
                    <Resume />
                </section>

                <section id="blog" className={`w-full min-h-screen`}>
                    <Blog />
                </section>

                <section id="contact" className="w-full">
                    <Contact />
                </section>
            </div>
        </div>
    );
};

export default IndexPage;
