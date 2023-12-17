// pages/index.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import Home from '@/components/Home/Home';
import Resume from '../components/Resume/Resume';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Experiences from "@/components/Experience/Experiences";
import ChatbotButton from "@/components/Chatbot/ChatbotButton";
import ChatbotModal from "@/components/Chatbot/ChatbotModal";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import structuredData from '../../content/structuredData.json';


const IndexPage = () => {
    const [isChatModalOpen, setIsChatModalOpen] = useState(false);
    const { theme = 'light' } = useTheme();
    const vantaRef = useRef(null);
    let vantaEffect = useRef<{ destroy: () => void } | null>(null);

    useEffect(() => {
        // console.log('Theme changed:', theme);
        if (typeof window !== 'undefined') {
            const THREE = require('three');
            window.THREE = THREE; // Ensure THREE is available for Vanta.js
            const WAVES = require('vanta/dist/vanta.waves.min.js').default;
            const NET = require('vanta/dist/vanta.net.min.js').default;

            if (vantaEffect.current) vantaEffect.current.destroy();

            switch(theme) {
                case 'fractal':
                    vantaEffect.current = WAVES({
                        el: document.body,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                        color: 0x11c2f,
                        zoom: 0.81
                    });
                    break;
                case 'vector':
                    vantaEffect.current = NET({
                        el: document.body,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                        color: 0xD9185A,  // Corrected color value
                        backgroundColor: 0x21143C,
                        maxDistance: 20.00,
                        spacing: 20.00,
                        mouseControls: false,
                        vertexColors: true,
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

    const themeClassNames = {
        light: 'bg-light text-dark',
        forest: 'bg-forest-bg text-forest-text',
        fractal: 'text-fractal-text',
        vector: 'text-vector-text',
    };

    // Background for resume section
    const floralBackground = theme === 'forest' ? 'bg-floral-bg' : '';
    const woodsBackground = theme === 'forest' ? 'bg-woods-bg' : '';

    return (
        // @ts-ignore
        <div className={themeClassNames[theme]}>
            <div ref={vantaRef} className="fixed w-full h-full"></div>
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
            <div className="flex flex-col items-center">
                <ChatbotButton isOpen={isChatModalOpen} setIsOpen={setIsChatModalOpen} />
                <ChatbotModal isOpen={isChatModalOpen} setIsOpen={setIsChatModalOpen} />

                <section id="home" className={`w-full ${woodsBackground}`}>
                    <Home />
                </section>

                <section id="experiences" className={`w-full ${woodsBackground}`}>
                    <Experiences />
                </section>

                <section id="resume" className={`w-full min-h-screen ${woodsBackground}`}>
                    <Resume />
                </section>

                <section id="blog" className={`w-full ${floralBackground}`}>
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