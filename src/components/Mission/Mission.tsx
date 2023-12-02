import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import mission from './MissionData';

const Mission = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const missionElement = document.getElementById('mission');
            if (!missionElement) return;

            const position = missionElement.getBoundingClientRect();

            // Check if the element is within the viewport
            if (position.top < window.innerHeight && position.bottom >= 0) {
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

    return (
        <motion.div
            id="mission"
            className="text-xl md:text-2xl lg:text-3xl text-center mx-auto w-full md:w-11/12 lg:w-9/12 mb-24 border-2 p-2 rounded-lg"
            initial={{ opacity: 0, y: -45 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -45 }}
            transition={{ duration: 3.5 }}
        >
            {mission.content}
        </motion.div>
    );
};

export default Mission;
