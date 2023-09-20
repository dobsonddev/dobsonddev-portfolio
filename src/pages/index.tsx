import React from 'react';
import Home from '@/components/Home/Home';
import Resume from '../components/Resume/Resume';
import Projects from '../components/Projects/Projects';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
const IndexPage = () => {
    return (
        <div className="bg-mid text-light">
            <nav className="text-light w-full flex space-x-2 text-l py-4 justify-end bg-dark">
                <a href="#home" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1">Home</a>
                <a href="#resume" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1">Resume</a>
                <a href="#projects" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1">Projects</a>
                <a href="#blog" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1">Blog</a>
                <a href="#contact" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1">Contact</a>
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
