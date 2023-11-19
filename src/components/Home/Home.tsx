import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { FaArrowDown } from 'react-icons/fa'; // Ensure react-icons is installed

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
            <div className="text-center mt-12 mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-wider text-light leading-loose" style={{ lineHeight: '1.3' }}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    &nbsp;Hi, <br /> I'm Dobson
                </h1>
            </div>
            <div className="bg-black text-xl md:text-2xl lg:text-3xl text-light p-2 rounded mb-10 mx-auto">
                <Typewriter
                    options={{
                        strings: [
                            "A full-stack developer",
                            "A data engineer",
                            "A persistent problem solver",
                            "A collaborative teammate",
                            "Agile minded",
                            "A continuous learner",
                            "A drummer",
                            "A lover of the outdoors",
                            "A tater tot connoisseur",],
                        autoStart: true,
                        loop: true,
                    }}
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
