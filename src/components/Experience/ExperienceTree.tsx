import React, {useState, useEffect, useRef} from 'react';
import { motion } from 'framer-motion';
import experiences from './ExperienceData';

const ExperienceTree = () => {
    const [nodeVisibility, setNodeVisibility] = useState(Array(experiences.length).fill(false));
    const [textBoxVisible, setTextBoxVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const textBoxRef = useRef<HTMLDivElement>(null);
    const [verticalSpacing, setVerticalSpacing] = useState(200); // default value

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            const textBox = textBoxRef.current;
            if (!container || !textBox) return;

            const containerBounds = container.getBoundingClientRect();
            const textBoxBounds = textBox.getBoundingClientRect();

            // For the experiences nodes
            const containerTop = containerBounds.top + window.scrollY;
            const containerHeight = containerBounds.height;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const relativeScrollY = scrollY - containerTop + windowHeight / 2;

            // For the text box
            const textBoxTop = textBoxBounds.top + window.scrollY;
            const textBoxInView = textBoxTop < (scrollY + windowHeight) && textBoxTop > scrollY;

            // Update node visibility
            const newVisibility = nodeVisibility.map((isVisible, index) => {
                const nodeTop = index * verticalSpacing;
                return isVisible || relativeScrollY >= nodeTop;
            });

            setNodeVisibility(newVisibility);
            setTextBoxVisible(textBoxInView); // Update text box visibility
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [nodeVisibility]);

    const nodeAnimation = {
        initial: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    useEffect(() => {
        // Function to update the vertical spacing based on window width
        const updateVerticalSpacing = () => {
            if (window.innerWidth < 640) {
                setVerticalSpacing(150); // Smaller screens
            } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
                setVerticalSpacing(250); // Medium-small screens
            } else {
                setVerticalSpacing(300); // Larger screens
            }
        };

        // Update vertical spacing on mount and window resize
        updateVerticalSpacing();
        window.addEventListener('resize', updateVerticalSpacing);

        // Cleanup listener
        return () => window.removeEventListener('resize', updateVerticalSpacing);
    }, []);

    return (
        <div ref={containerRef} className="container mx-auto h-auto pt-6 px-4 md:px-8 sm:pb-56 md:pb-96 lg:pb-40">
            {/* Desktop and Tablet Version */}
            <div className="hidden sm:block relative pt-36 md:pt-52 md:mb-60 lg:mb-20" style={{ height: `${experiences.length * verticalSpacing}px` }}>
                <div className="absolute left-1/2 h-full border-r-4 border-gray-200 rounded transform -translate-x-1/2"></div>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="flex justify-center items-center sm:mb-20 md:mb-72 lg:mb-72"
                        variants={nodeAnimation}
                        initial="initial"
                        animate={nodeVisibility[index] ? 'visible' : 'exit'}
                        style={{ top: `${index * verticalSpacing}px` }}
                        transition={{ delay: index * 0.2, duration: 2.9 }}
                    >
                        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>

                        <div
                            className={`absolute text-box-style p-2 shadow-lg rounded ${index % 2 === 0 ? 'right-1/2 md:mr-4 lg:mr-6 xl:mr-8 2xl:mr-14' : 'left-1/2 md:ml-4 lg:ml-6 xl:ml-8 2xl:ml-14'}`}
                        >
                            <h3 className="font-bold text-md text-white">{exp.title} <span className="text-xs text-gray-400">({exp.date})</span></h3>
                            <p className="text-orange-500 text-sm space-x-1 pb-2 pl-4">{exp.location}</p>
                            <ul className="list-disc text-light rounded pl-6">
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