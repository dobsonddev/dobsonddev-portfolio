import React from "react";
import Typed from "react-typed";

function Intro() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-creamOrange to-softBlue flex flex-col justify-center items-center">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold tracking-wider text-black">
                    Hi, <br />
                    I'm Dobson
                </h1>
            </div>

            <div className="bg-black text-5l text-orange-900 p-2 rounded mt-8">
                <Typed
                    strings={[
                        "A software engineer",
                        "A solutions orchestrator",
                        "A music lover",
                        "A data enthusiast",
                        "A hungry mind",
                        "A steadfast problem solver",
                        "A tinkerer",
                        "An outdoors enjoyer",
                        "An athlete",
                        "A gamer"
                    ]}
                    typeSpeed={115}
                    backSpeed={70}
                    loop
                />
            </div>

            <nav className="text-black absolute bottom-0 w-full flex space-x-12 text-xl py-4 justify-center">
                <a href="#resume" className="hover:text-white hover:bg-black px-4 py-2 transition-all duration-500 transform hover:-translate-y-1">Resume</a>
                <a href="#projects" className="hover:text-white hover:bg-black px-4 py-2 transition-all duration-500 transform hover:-translate-y-1">Projects</a>
                <a href="#blog" className="hover:text-white hover:bg-black px-4 py-2 transition-all duration-500 transform hover:-translate-y-1">Blog</a>
                <a href="#contact" className="hover:text-white hover:bg-black px-4 py-2 transition-all duration-500 transform hover:-translate-y-1">Contact</a>
            </nav>
        </div>
    );
}

export default Intro;
