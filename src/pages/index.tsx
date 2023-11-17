import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Home from '@/components/Home/Home';
import Resume from '../components/Resume/Resume';
import Projects from '../components/Projects/Projects';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import AboutMe from '../components/AboutMe/AboutMe';

const IndexPage = () => {
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
            <nav style={{top: isScrollingUp ? '0' : '-100%'}} className="z-20 text-light w-full flex justify-between bg-dark transition-all duration-1000 fixed py-2">
                <div className="flex space-x-2 pl-5">
                    <a href="https://www.linkedin.com/in/dobson-dunavant/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-1 transition-all duration-3000 hover:animate-wiggle"><FaLinkedin size="1.5em" /></a>
                    <a href="https://github.com/dobsonddev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-2 transition-all duration-500 hover:animate-wiggle"><FaGithub size="1.5em" /></a>
                    <a href="#contact" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Contact Me</a>
                </div>
                <div className="flex space-x-2 pr-5">
                    <a href="#home" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Home</a>
                    <a href="#aboutme" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">About Me</a>
                    <a href="#resume" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Resume</a>
                    <a href="#projects" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Projects</a>
                    <a href="#blog" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Blog</a>
                </div>
            </nav>

            <div className="flex flex-col items-center">
                <section id="home" className="w-full">
                    <Home />
                </section>

                <section  id="aboutme" className="w-full">
                    <AboutMe />
                </section>

                <section id="resume" className="w-full">
                    <Resume />
                </section>

                <section id="projects" className="w-full">
                    <Projects />
                </section>

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
