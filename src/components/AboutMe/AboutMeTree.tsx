import React, {useState, useEffect, useRef} from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        title: "Robotics/Machine Learning Co-Op",
        date: "Sep 2023 - Current",
        location: "Mercedes-Benz Vans/College of Charleston, Ladson, SC",
        details: [
            "Developed a large-scale, autonomous inventory system integrating machine learning, industrial sensors, and AWS cloud services.",
            "Focused on optimized, secure, real-time data streaming.",
            "Prototyped solutions to enhance inventory accuracy and reduce manual errors."
        ]
    },
    {
        title: "Software Engineering Intern",
        date: "May 2023 - Aug 2023",
        location: "Savvas Learning Company (EdTech), Phoenix, AZ",
        details: [
            "Engineered accessibility solutions for a K-12 edtech platform using Angular 16, GraphQL, and other technologies.",
            "Addressed 14 high-impact accessibility issues, aligning with WCAG 2.1 standards.",
            "Led hackathon projects, including API testing enhancements and a student analysis dashboard, winning the hackathon."
        ]
    },
    {
        title: "Data Engineering Intern",
        date: "Sep 2022 - Jan 2023",
        location: "Fiscal Spreading & Tracking (FinTech), Charleston, SC",
        details: [
            "Assisted in transition from a monolithic desktop app to a microserviced, serverless webapp, leveraging React, Django, and AWS.",
            "Performed API rework, assessing existing API call performance while implementing query and data handling optimizations.",
            "Containerized various data flows to separate concerns and minimize single point of failure situations."
        ]
    },
    {
        title: "Data Analyst / Scrum Master",
        date: "March 2018 - March 2021",
        location: "Ceterus (FinTech startup), Charleston, SC",
        details: [
            "Developed and analyzed financial data sets for a fintech app that enhances small-business' financial insights.",
            "Met with small-business owners on a weekly basis to discuss financial performance and provide recommendations for improvement.",
            "Led a Scrum team, achieving significant reductions in project lead time and increases in story point velocity."
        ]
    }
];

const AboutMeTree = () => {
    const [nodeVisibility, setNodeVisibility] = useState(Array(experiences.length).fill(false));
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const containerBounds = container.getBoundingClientRect();
            const containerTop = containerBounds.top + window.scrollY;
            const containerHeight = containerBounds.height;
            const windowHeight = window.innerHeight;

            const scrollY = window.scrollY;
            const relativeScrollY = scrollY - containerTop + windowHeight / 2;

            // Update logic to set node visibility
            const newVisibility = nodeVisibility.map((isVisible, index) => {
                const nodeTop = index * verticalSpacing;
                return isVisible || relativeScrollY >= nodeTop;
            });

            setNodeVisibility(newVisibility);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [nodeVisibility]);

    const nodeAnimation = {
        initial: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const verticalSpacing = 200;

    return (
        <div ref={containerRef} className="container mx-auto h-full pt-2 pb-44">
            <div>
                <motion.div
                    className="text-3xl text-center mb-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 2, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    {/* Mission Statement */}
                    Delivering seamless solutions through collaboration and innovation.
                </motion.div>
            </div>
            <div className="relative pt-24" style={{ height: `${experiences.length * verticalSpacing}px` }}>
                <div className="absolute left-1/2 h-full border-r-4 border-gray-200 transform -translate-x-1/2" style={{ height: '100%' }}></div>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="flex justify-center items-center mb-52"
                        variants={nodeAnimation}
                        initial="initial"
                        animate={nodeVisibility[index] ? 'visible' : 'exit'} // Updated to use the new visibility state
                        style={{ top: `${index * verticalSpacing}px` }}
                    >
                        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>

                        <div
                            className={`absolute text-box-style p-2 bg-white shadow-lg rounded max-w-4xl ${index % 2 === 0 ? 'right-1/2 mr-14' : 'left-1/2 ml-14'}`}
                        >
                            <h3 className="font-bold text-lg text-dark pb-1">{exp.title} <span className="text-sm text-gray-400">({exp.date})</span></h3>
                            <p className="text-amber-600 text-sm space-x-1 pb-2">{exp.location}</p>
                            <ul className="list-disc bg-gray-400 rounded pl-6">
                                {exp.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="text-gray-700 mb-4 p-0.5 ">{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AboutMeTree;