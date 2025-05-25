import React from 'react';
import { motion } from 'framer-motion';
import experiences from './ExperienceData';
import { useTheme } from 'next-themes';

const ExperienceTree = () => {
    const { theme } = useTheme();
    const isDark = theme === 'vector' ? false : true;

    return (
        <div className="container mx-auto px-4 py-20">
            {/* Experience items with timeline */}
            <div className="relative">
                {/* Timeline center line - now contained within the experiences container */}
                <div className="hidden lg:block absolute left-1/2 top-6 bottom-32 w-1 bg-light transform -translate-x-1/2 z-0"></div>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className={`mb-16 lg:mb-24 relative ${index === experiences.length - 1 ? 'lg:pb-0' : ''}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Timeline dot - visible on all screens */}
                        <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 flex justify-center mb-4 lg:mb-0">
                            <div className="w-6 h-6 bg-gray-900 border border-light rounded-full z-10"></div>
                        </div>

                        {/* Content box */}
                        <div className={`
                            lg:w-5/12 
                            ${index % 2 === 0 ? 'lg:ml-auto lg:mr-10' : 'lg:mr-auto lg:ml-10'} 
                            text-box-style p-6 shadow-lg bg-gray-900 border border-light rounded
                        `}>
                            <div className="flex justify-between items-center flex-wrap">
                                <h3 className="font-bold text-xl text-light">{exp.title}</h3>
                                <span className="text-sm text-gray-400">{exp.date}</span>
                            </div>

                            <div className="flex justify-between items-center flex-wrap pb-2">
                                <p className="text-custom-orange text-sm font-semibold">{exp.company}</p>
                                <p className="text-custom-orange text-sm font-semibold">{exp.location}</p>
                            </div>

                            <ul className="list-disc text-gray-300 pl-6 mt-3">
                                {exp.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="text-light mb-3">{detail}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap justify-end mt-4">
                                {exp.technologies.map((tech, techIndex) => (
                                    <motion.div
                                        key={techIndex}
                                        className="relative ml-4 mb-2 group"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                    >
                                        <img
                                            src={`/icons/${tech.toLowerCase()}.svg`}
                                            alt={tech}
                                            className="w-10 h-10"
                                            width={40}
                                            height={40}
                                        />
                                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-light text-xs px-2 py-1 rounded opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100">
                                            {tech}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceTree;
