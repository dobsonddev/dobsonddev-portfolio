import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Home from '@/components/Home/Home';
import Resume from '../components/Resume/Resume';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Experiences from "../components/AboutMe/Experiences";
// import Chatbot from '../components/Chatbot/Chatbot';

const IndexPage = () => {
    const [isChatModalOpen, setIsChatModalOpen] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true); // Set initial value to true

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const st = window.scrollY;

            if (st > lastScrollTop) {
                setIsScrollingUp(false); // Scrolling down
            } else if (st < lastScrollTop) {
                setIsScrollingUp(true); // Scrolling up, immediate response
            }

            lastScrollTop = st <= 0 ? 0 : st;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-mid text-light">
            <nav style={{top: isScrollingUp ? '0' : '-100%'}} className="z-20 text-light w-full flex justify-between items-center bg-dark transition-all duration-1000 fixed py-2 px-4 md:px-8">
                <div className="flex items-center space-x-2">
                    <a href="https://www.linkedin.com/in/dobson-dunavant/" target="_blank" rel="noopener noreferrer" className="inline-flex items-cznter px-1 transition-all duration-3000 hover:animate-wiggle"><FaLinkedin size="1.5em" /></a>
                    <a href="https://github.com/dobsonddev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-2 transition-all duration-500 hover:animate-wiggle"><FaGithub size="1.5em" /></a>
                    <a href="#contact" className="hidden md:inline-flex hover:text-dark hover:bg-custom-orange px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Get in touch</a>
                </div>
                <div className="flex items-center space-x-2">
                    <a href="#chat" className="hover:text-dark bg-custom-orange hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Learn about me</a>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                    <a href="#home" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Home</a>
                    <a href="#experiences" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Experiences</a>
                    <a href="#resume" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Resume</a>
                    {/*<a href="#projects" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Projects</a>*/}
                    <a href="#blog" className="hover:text-dark bg-gray-400 hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Blog</a>
                </div>
                {/* Mobile menu button here for smaller screens */}
            </nav>

            <div className="flex flex-col items-center">
                {/*<Chatbot isOpen={isChatModalOpen} setIsOpen={setIsChatModalOpen} />*/}
                <section id="home" className="w-full">
                    <Home />
                </section>

                <section  id="experiences" className="w-full">
                    <Experiences />
                </section>

                <section id="resume" className="w-full">
                    <Resume />
                </section>

                {/*<section id="projects" className="w-full">*/}
                {/*    <Projects />*/}
                {/*</section>*/}

                <section id="blog" className="w-full">
                    <Blog />
                </section>

                <section id="contact" className="w-full">
                    <Contact />
                </section>
            </div>
        </div>
    );
};

export default IndexPage;
