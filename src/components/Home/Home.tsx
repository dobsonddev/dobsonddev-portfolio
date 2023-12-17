import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { FaArrowDown } from 'react-icons/fa'; // Ensure react-icons is installed
import homeData from "@/components/Home/HomeData";
import {motion} from "framer-motion";


function Home() {
    const [showScrollPrompt, setShowScrollPrompt] = useState(false);
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const missionElement = document.getElementById('mission');
            if (!missionElement) return;

            const position = missionElement.getBoundingClientRect();
            const elementCenter = position.top + (position.height / 2);

            // Check if the center of the element is within the viewport
            if (elementCenter < window.innerHeight && elementCenter >= 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };


        window.addEventListener('scroll', handleScroll);

        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <div>
            <div className="relative min-h-screen grid grid-flow-row auto-rows-auto items-center justify-items-center px-4">
            <div className="text-center mx-auto">
                <h1 className=" bg-light rounded text-dark p-4 text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-wider leading-loose" style={{ lineHeight: '1.4' }}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    &nbsp;Hi, <br /> I'm {homeData.name}
                </h1>
            </div>
            <div className="bg-light text-dark text-xl md:text-2xl lg:text-4xl p-2 rounded mx-auto">
                <Typewriter
                    options={{
                        // @ts-ignore
                        strings: homeData.attributes,
                        autoStart: true,
                        loop: true,
                        delay: 75,
                        deleteSpeed: 50,
                        pauseFor: 2200,
                    } as any}
                />
            </div>

            {showScrollPrompt && (
                <div className="fixed inset-x-0 bottom-10 flex justify-start pl-12 items-center z-50">
                    <div className="animate-bounce flex flex-col items-center">
                        <span className="text-light text-xl mb-2">Scroll Down</span>
                        <FaArrowDown className="text-light" size={24} />
                    </div>
                </div>
            )}
                </div>
            <div className="relative h-1/4 py-2 grid grid-flow-row auto-rows-auto items-center justify-items-center px-4">
                <motion.div
                    id="mission"
                    className="bg-light bg-opacity-70 backdrop-blur-md p-8 text-dark text-xl md:text-2xl lg:text-4xl text-center mx-auto w-full md:w-11/12 lg:w-9/12 mb-24 border-2 rounded"
                    initial={{ opacity: 0, y: -35 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ duration: 1 }}
                >
                    <div>
                        <div className="pb-8">
                            {homeData.missionStatementTop}
                        </div>
                        <div>
                            {homeData.missionStatementBottom}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Home;
