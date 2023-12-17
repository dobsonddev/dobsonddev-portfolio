// Navbar.tsx
import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';

interface NavbarProps {
    toggleChatModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleChatModal }) => {
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState('');
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingDown = currentScrollPos > lastScrollTop;

            setIsScrollingUp(!isScrollingDown);

            if (!isScrollingDown && currentScrollPos > 100) {
                setNavbarBackground('bg-black text-light');
            } else if (currentScrollPos <= 100) {
                setNavbarBackground('');
            }

            lastScrollTop = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            style={{ top: isScrollingUp ? '0' : '-100%' }}
            className={`z-20 w-full flex items-center transition-all duration-1000 fixed py-2 px-2 md:px-6 ${navbarBackground}`}
        >
            {/* Left part of the navbar */}
            <div className="flex-1 flex items-center justify-start">
                <a href="https://www.linkedin.com/in/dobson-dunavant/" aria-label="Dobson's LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-1 transition-all duration-500 hover:animate-wiggle"><FaLinkedin size="1.6em" /></a>
                <a href="https://github.com/dobsonddev" aria-label="Dobson's GitHub Profile" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 transition-all duration-500 hover:animate-wiggle"><FaGithub size="1.6em" /></a>
                <a href="#contact" className="hover:text-dark hover:bg-light text-xs md:text-sm lg:text-base py-1 px-2 md:py-2 md:px-4 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Contact Me</a>
            </div>

            {/* Center part of the navbar */}
            <div className="flex-1 flex items-center justify-center gap-2">
                <button onClick={toggleChatModal} className="flex flex-row items-center justify-center hover:text-dark bg-custom-orange hover:bg-light rounded
                 text-xs md:text-sm lg:text-base py-1 px-2 md:py-2 md:px-4 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">
                    Chat with Momo
                    <img src="/lemur.svg" alt="Momo" className="ml-4" style={{ height: '25px' }} />
                </button>
            </div>


            {/* Hamburger Menu Icon */}
            <div className="md:hidden flex items-center">
                <div className="p-4">
                    <ThemeSwitch />
                </div>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full bg-light text-dark right-0 w-full md:hidden">
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
                <a href="#blog" className="hover:text-dark hover:bg-light px-4 py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle">Blog</a>
                <div>
                    <ThemeSwitch />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;