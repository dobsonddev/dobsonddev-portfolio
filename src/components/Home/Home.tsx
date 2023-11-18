import React, { useEffect, useState } from 'react';
import Typed from 'react-typed';
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
        <div className="relative min-h-screen bg-gradient-to-b from-creamOrange to-softBlue grid grid-flow-row auto-rows-auto items-center justify-items-center">
            <div className="text-center mt-12">
                <h1 className="text-8xl font-extrabold tracking-wider text-light">
                    Hi, <br />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    I'm Dobson
                </h1>
            </div>

            <div className="bg-black text-3xl text-light p-2 rounded mb-10">
                <Typed
                    strings={[
                        "A software engineer",
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
