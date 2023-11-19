import React, { useEffect, useState } from 'react';
import Typed from 'react-typed';
import { FaArrowDown } from 'react-icons/fa'; // Ensure react-icons is installed
import Head from 'next/head';

function Home() {
    const [showScrollPrompt, setShowScrollPrompt] = useState(false);

    useEffect(() => {
        // Show the scroll prompt after a few seconds
        const timer = setTimeout(() => {
            setShowScrollPrompt(true);
        }, 3000); // Adjust the time as needed

        // Listen for scroll events
        const handleScroll = () => {
            setShowScrollPrompt(false);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener and timeout when the component unmounts
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-creamOrange to-softBlue grid grid-flow-row auto-rows-auto items-center justify-items-center px-4">
            <Head>
                <title>Dobson Dunavant - Full-Stack Software Engineer, Personal Portfolio Website</title>
                <meta name="description" content="Dobson Dunavant's full-stack software engineer personal portfolio showcasing skills in web development, data engineering, and more." />
                <meta name="keywords" content="Dobson Dunavant, portfolio, skills, web development, data engineering" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#your_color_code" />
                <html lang="en" />
                <meta name="geo.region" content="US" />

                <meta property="og:title" content="Dobson Dunavant - The SkillSlinger" />
                <meta property="og:description" content="Dobson Dunavant's portfolio showcasing skills and experiences." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://dobsond.dev/" />
                <meta property="og:image" content="https://your-website-url.com/og-image.jpg" />
                <link rel="canonical" href="https://dobsond.dev/" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Dobson Dunavant - The SkillSlinger" />
                <meta name="twitter:description" content="Dobson Dunavant's portfolio showcasing skills and experiences." />
                <meta name="twitter:image" content="https://your-website-url.com/twitter-image.jpg" />
            </Head>


            <div className="text-center mt-12 mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-wider text-light leading-loose" style={{ lineHeight: '1.3' }}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    &nbsp;Hi, <br /> I'm Dobson
                </h1>
            </div>

            <div className="bg-black text-xl md:text-2xl lg:text-3xl text-light p-2 rounded mb-10 mx-auto">
                <Typed
                    strings={[
                        "A full-stack developer",
                        "A data engineer",
                        "A persistent problem solver",
                        "A collaborative teammate",
                        "Agile minded",
                        "A continuous learner",
                        "A drummer",
                        "A lover of the outdoors",
                        "A tater tot connoisseur",
                    ]}
                    typeSpeed={95}
                    backSpeed={50}
                    loop
                />
            </div>

            {showScrollPrompt && (
                <div className="fixed inset-x-0 bottom-10 flex justify-start pl-12 items-center z-50">
                    <div className="animate-bounce flex flex-col items-center">
                        <span className="text-light text-lg mb-2">Scroll Down</span>
                        <FaArrowDown className="text-light" size={24} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
