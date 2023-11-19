import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Home from '@/components/Home/Home';
import Resume from '../components/Resume/Resume';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Experiences from "@/components/Experience/Experiences";
import ChatbotButton from "@/components/Chatbot/ChatbotButton";
import Chatbot from "@/components/Chatbot/Chatbot";
import Head from "next/head";
import DDlogo from "../public/images/DDlogo.png";

const IndexPage = () => {
    const [isChatModalOpen, setIsChatModalOpen] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true); // Set initial value to true
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleChatModal = () => {
        setIsChatModalOpen(!isChatModalOpen);
    };

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
            <Head>
                <title>Dobson Dunavant - Full-Stack Software Engineer, Personal Portfolio Website</title>
                <meta name="description" content="Dobson Dunavant's full-stack software engineer personal portfolio showcasing skills in web development, data engineering, and more." />
                <meta name="keywords" content="My personal website, portfolio showcasing my skills and experiences as a Fullstack Developer." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#your_color_code" />
                <meta name="author" content="Dobson Dunavant" />
                <meta name="image" content="https://dobsond.dev/DDlogo.png" />
                <html lang="en" />
                <meta name="geo.region" content="US" />

                <meta property="og:title" content="Dobson Dunavant - Personal Portfolio Website" />
                <meta property="og:description" content="My personal website, showcasing my skills and experiences as a Fullstack Developer." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://dobsond.dev/" />
                <meta property="og:image" content="https://dobsond.dev/DDlogo.png" />
                <link rel="canonical" href="https://dobsond.dev/" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Dobson Dunavant - Personal Portfolio Website" />
                <meta name="twitter:description" content="My personal website, showcasing my skills and experiences as a Fullstack Developer." />
                <meta name="twitter:image" content="https://dobsond.dev/DDlogo.png" />
            </Head>
            <nav style={{ top: isScrollingUp ? '0' : '-100%' }} className="z-20 text-light w-full flex items-center bg-dark transition-all duration-1000 fixed py-2 px-4 md:px-8">
                <div className="flex-1 flex items-center justify-start">
                    <a href="https://www.linkedin.com/in/dobson-dunavant/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-1 transition-all duration-500 hover:animate-wiggle"><FaLinkedin size="1.6em" /></a>
                    <a href="https://github.com/dobsonddev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 transition-all duration-500 hover:animate-wiggle"><FaGithub size="1.6em" /></a>
                    <a href="#contact" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Contact Me</a>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <button onClick={toggleChatModal} className="hover:text-dark bg-custom-orange hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">
                        Learn about me
                    </button>
                </div>

                {/* Hamburger Menu Icon */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full right-0 bg-dark w-full md:hidden">
                        <a href="#home" className="block hover:text-dark hover:bg-light p-4">Home</a>
                        <a href="#experiences" className="block hover:text-dark hover:bg-light p-4">Experiences</a>
                        <a href="#resume" className="block hover:text-dark hover:bg-light p-4">Resume</a>
                        <a href="#blog" className="block hover:text-dark hover:bg-light p-4">Blog</a>
                        <a href="#contact" className="block hover:text-dark hover:bg-light p-4">Contact</a>
                    </div>
                )}
                {/* Desktop Menu */}
                <div className="hidden md:flex flex-1 items-center justify-end">
                    <a href="#home" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Home</a>
                    <a href="#experiences" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Experiences</a>
                    <a href="#resume" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Resume</a>
                    <a href="#blog" className="hover:text-dark text-dark bg-gray-400 hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Blog</a>
                </div>
            </nav>


            <div className="flex flex-col items-center">

                <ChatbotButton isOpen={isChatModalOpen} setIsOpen={setIsChatModalOpen} />
                <Chatbot isOpen={isChatModalOpen} setIsOpen={setIsChatModalOpen} />

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
