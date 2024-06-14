import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import Home from '@/components/Home/Home';
import Resume from '../components/Resume/Resume';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Experiences from "@/components/Experience/Experiences";
import Navbar from "@/components/Navbar/Navbar";
import SiteHead from "@/components/SEO/Head/SiteHead";
import { siteConfig } from '@/components/SEO/SiteConfig';
import { themeClassNames } from '@/utils/themeClassNames';
import { applyVantaEffect } from '@/utils/vantaEffects';

const IndexPage = () => {
    const [isChatModalOpen, setIsChatModalOpen] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const vantaRef = useRef(null);
    let vantaEffect = useRef<{ destroy: () => void } | null>(null);

    useEffect(() => {
        if (resolvedTheme) {
            setTheme(resolvedTheme);
        } else {
            setTheme('forest');
        }
    }, [resolvedTheme, setTheme]);

    useEffect(() => {
        // @ts-ignore
        return applyVantaEffect(theme, vantaRef, vantaEffect);
    }, [theme]);

    const toggleChatModal = () => {
        setIsChatModalOpen(!isChatModalOpen);
    };

    const themeClass = theme ? themeClassNames[theme] : themeClassNames['light'];

    return (
        <div className={themeClass}>
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
            <SiteHead
                title={siteConfig.title}
                description={siteConfig.description}
                author={siteConfig.author}
                keywords={siteConfig.keywords}
                siteUrl={siteConfig.siteUrl}
                imageUrl={siteConfig.imageUrl}
                structuredData={siteConfig.structuredData}
            />
            <Navbar toggleChatModal={toggleChatModal} />

            <div className="relative z-10 bg-none">
                <section id="home" className={`w-full min-h-screen`}>
                    <Home />
                </section>

                <section id="experiences" className={`w-full min-h-screen`}>
                    <Experiences />
                </section>

                <section id="resume" className={`w-full`}>
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
