import React from 'react';
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";

function Footer() {
    return (

        <div className="h-auto md:h-44 p-2 flex flex-col items-center justify-center space-y-4 relative py-6">
            {/* Zigzag Border */}
            <div className="hidden md:inline custom-shape-divider-bottom-1719604383">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"></path>
                </svg>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold pt-1">Contact Me!</h2>

            <div className="flex gap-5 md:gap-7 items-center justify-start">
                <a
                    href="https://www.linkedin.com/in/dobson-dunavant/"
                    aria-label="Dobson's LinkedIn Profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1 md:py-2 transition-all duration-500 transform hover:-translate-y-1"
                >
                    <FaLinkedin size="2.2em"/>
                </a>
                <a
                    href="https://github.com/dobsonddev"
                    aria-label="Dobson's GitHub Profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1 md:py-2 transition-all duration-500 transform hover:-translate-y-1"
                >
                    <FaGithub size="2.2em"/>
                </a>
                <a
                    href="#"
                    aria-label="Send an email to Dobson"
                    className="py-1 md:py-2 transition-all duration-500 transform hover:-translate-y-1"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open('mailto:jdobsond3@gmail.com', '_blank');
                    }}
                >
                    <FaEnvelope size="2.2em"/>
                </a>
            </div>

            {/*<div className="flex gap-7 md:gap-8 items-center justify-start">*/}
            {/*    /!* Example animated elements *!/*/}
            {/*    <div className="w-4 h-4 md:w-6 md:h-6 bg-light rounded-full animate-bounce"></div>*/}
            {/*    <div className="w-4 h-4 md:w-6 md:h-6 bg-light rounded-full animate-ping"></div>*/}
            {/*    <div className="w-2 h-4 md:w-3 md:h-6 bg-light rounded-full animate-spin"></div>*/}
            {/*</div>*/}
        </div>
    );
}

export default Footer;
