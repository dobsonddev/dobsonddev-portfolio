import React from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import Resume from '../components/Resume/Resume';
import Projects from '../components/Projects/Projects';
import Blog from '../components/Blog/Blog';

const IndexPage = () => {
    return (
        <div className="bg-cream text-black">
            <div className="text-center py-20">
                <h1>Hi, I am Dobson</h1>
            </div>

            <div className="flex flex-col items-center">
                <nav className="flex space-x-10 mb-10">
                    <a href="#about-me">About Me</a>
                    <a href="#resume">Resume</a>
                    <a href="#projects">Projects</a>
                    <a href="#blog">Blog</a>
                </nav>

                <section id="about-me" className="w-full">
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
            </div>
        </div>
    );
};

export default IndexPage;
