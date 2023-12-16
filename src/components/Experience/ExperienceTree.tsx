import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import experiences from './ExperienceData';

const ExperienceTree = () => {

    const [nodeVisibility, setNodeVisibility] = useState(Array(experiences.length).fill(false));
    const containerRef = useRef<HTMLDivElement>(null); // Explicitly defining the type of the ref
    const [verticalSpacing, setVerticalSpacing] = useState(200); // default value
    const lastScrollY = useRef(0); // store the last scrollY position

    // Function to calculate and update node visibility
    const updateVisibility = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;
        const containerBounds = container.getBoundingClientRect();
        const containerTop = containerBounds.top + window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const relativeScrollY = scrollY - containerTop + windowHeight / 2;

        const visibilityOffset = 50; // Adjust this value to control when the animation starts

        // Only update state if relativeScrollY has changed significantly (for example, more than 10 pixels)
        if (Math.abs(relativeScrollY - lastScrollY.current) > 10) {
            lastScrollY.current = relativeScrollY; // update the last scrollY position
            const newVisibility = nodeVisibility.map((isVisible, index) => {
                const nodeTop = index * verticalSpacing;
                return isVisible || relativeScrollY + visibilityOffset >= nodeTop;
            });
            setNodeVisibility(newVisibility);
        }

    }, [nodeVisibility, verticalSpacing]);

    useEffect(() => {
        updateVisibility(); // Initial visibility calculation
        window.addEventListener('scroll', updateVisibility);
        return () => window.removeEventListener('scroll', updateVisibility);
    }, [updateVisibility]);

    const nodeAnimation = {
        initial: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    useEffect(() => {
        const updateVerticalSpacing = () => {
            if (window.innerWidth < 640) {
                setVerticalSpacing(150); // Smaller screens
            } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
                setVerticalSpacing(250); // Medium-small screens
            } else {
                setVerticalSpacing(300); // Larger screens
            }
        };

        updateVerticalSpacing(); // Update vertical spacing on mount
        window.addEventListener('resize', updateVerticalSpacing);
        return () => window.removeEventListener('resize', updateVerticalSpacing);
    }, []);

    return (
        <div ref={containerRef} className="container mx-auto h-auto pt-6 px-4 md:px-8 sm:pb-56 md:pb-96 lg:pb-40">
            {/* Desktop and Tablet Version */}
            <div className="hidden sm:block relative pt-36 md:pt-52 md:mb-60 lg:mb-20" style={{ height: `${experiences.length * verticalSpacing}px` }}>
                <div className="absolute left-1/2 h-full border-r-4 border-light text-light bg-light rounded transform -translate-x-1/2 ">
                </div>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="flex justify-center items-center sm:mb-20 md:mb-72 lg:mb-72 "
                        variants={nodeAnimation}
                        initial="initial"
                        animate={nodeVisibility[index] ? 'visible' : 'exit'}
                        style={{ top: `${index * verticalSpacing}px` }}
                        transition={{duration: 1 }}
                    >
                        <div className="w-6 h-6 border-light text-light bg-light rounded-full"></div>

                        <div className={`absolute w-1/2 p-8 text-box-style shadow-lg bg-gray-800 bg-opacity-95 rounded ${index % 2 === 0 ? 'right-1/2 md:mr-4 lg:mr-6 xl:mr-8 2xl:mr-14' : 'left-1/2 md:ml-4 lg:ml-6 xl:ml-8 2xl:ml-14'}`}>                            <div className="flex justify-between items-center">
                                <h3 className="font-bold text-xl text-white pb-1">
                                    {exp.title}
                                </h3>
                                <span className="text-sm text-gray-400 pl-2">{exp.date}</span>
                                {/*<Image src={exp.logo} alt={exp.location} className="h-2 w-auto right-0" width={32} height={48}/>*/}
                            </div>
                            <div className="flex justify-between items-center pb-1">
                                <p className="text-custom-orange text-md font-semibold space-x-1 pb-2 pl-4">{exp.company}</p>
                                <p className="text-custom-orange text-sm font-semibold space-x-1 pb-2 pl-4">{exp.location}</p>
                            </div>
                            <ul className="list-disc text-gray-300 rounded pl-6">
                                {exp.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="text-white mb-4 p-0.5">{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Mobile Version */}
            <div className="md:hidden">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center mb-12"
                        variants={nodeAnimation}
                        initial="initial"
                        animate={nodeVisibility[index] ? 'visible' : 'exit'}
                        transition={{ delay: index * 0.4, duration: 3.5 }}
                    >
                        <div className="w-6 h-6 bg-gray-200 rounded-full mb-4"></div>
                        <div className="text-box-style p-2 shadow-lg rounded max-w-xs">
                            <h3 className="font-bold text-md text-white whitespace-nowrap sm:whitespace-normal truncate">{exp.title} <span className="text-xs text-gray-400">({exp.date})</span></h3>                            <p className="text-orange-500 text-sm pb-2">{exp.location}</p>
                            <ul className="list-disc text-light rounded pl-4">
                                {exp.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="text-white mb-4">{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceTree;