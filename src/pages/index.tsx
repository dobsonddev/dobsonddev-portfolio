import React from 'react';
import Intro from '@/components/Intro/Intro';
import Resume from '../components/Resume/Resume';
import Projects from '../components/Projects/Projects';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
const IndexPage = () => {
    return (
        <div className="bg-cream text-black">
            <div className="flex flex-col items-center">
                <section id="about-me" className="w-full">
                    <Intro />
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
