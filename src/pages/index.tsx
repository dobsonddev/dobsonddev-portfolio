import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Home from '@/components/Home/Home';
import Resume from '../components/Resume/Resume';
import Projects from '../components/Projects/Projects';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';

const IndexPage = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isScrollingUp, setIsScrollingUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrollingUp(st < lastScrollTop);
            setLastScrollTop(st <= 0 ? 0 : st);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    return (
        <div className="bg-mid text-light">
            <nav style={{top: isScrollingUp ? '0' : '-100%'}} className=" text-light w-full flex space-x-5 text-l py-2 justify-end bg-dark transition-all duration-1000 fixed">
                <a href="#home" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1">Home</a>
                <a href="#resume" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1">Resume</a>
                <a href="#projects" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1">Projects</a>
                <a href="#blog" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1">Blog</a>
                <a href="#contact" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1">Contact</a>
                <a href="https://www.linkedin.com/in/dobson-dunavant/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-1 transition-all duration-3000"><FaLinkedin size="1.5em" /></a>
                <a href="https://github.com/jdobsond" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-2 transition-all duration-500"><FaGithub size="1.5em" /></a>
            </nav>

            <div className="flex flex-col items-center">
                <section id="home" className="w-full">
                    <Home />
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
