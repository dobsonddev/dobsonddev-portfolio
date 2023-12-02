import React, { useState } from 'react';
import Home from '@/components/Home/Home';
import Resume from '../components/Resume/Resume';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Experiences from "@/components/Experience/Experiences";
import ChatbotButton from "@/components/Chatbot/ChatbotButton";
import ChatbotModal from "@/components/Chatbot/ChatbotModal";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";


const IndexPage = () => {
    const [isChatModalOpen, setIsChatModalOpen] = useState(false);

    const toggleChatModal = () => {
        setIsChatModalOpen(!isChatModalOpen);
    };

    return (
        <div className="text-light">
            <Head>

                <title>Dobson Dunavant - Full-Stack Software Engineer, Personal Portfolio Website</title>

                <meta name="description" content="My personal website, showcasing my experiences and skillsets thus far as an aspiring software engineer." />

                <meta name="keywords" content="Software Engineer, Frontend, backend, cloud, devops, developer, application, react, angular, aws, django, python, opencv, machine learning, ai, api, graphql, postgresql, docker, firebase, apache, data engineering, full-stack, CI/CD, tech, big tech, hiring, candidates" />

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta name="robots" content="index, follow" />

                <meta name="theme-color" content="#52796f" />

                <meta name="author" content="Dobson Dunavant" />

                <meta name="image" content="https://dobsond.dev/DDlogo.png" />

                <meta name="geo.region" content="US" />


                <meta property="og:title" content="Dobson Dunavant - Personal Portfolio Website" />

                <meta property="og:description" content="My personal website, showcasing my experiences and skillsets thus far." />

                <meta property="og:type" content="website" />

                <meta property="og:url" content="https://dobsond.dev/" />

                <meta property="og:image" content="https://dobsond.dev/DDlogo.png" />

                <link rel="canonical" href="https://dobsond.dev/" />


                <meta name="twitter:card" content="summary_large_image" />

                <meta name="twitter:title" content="Dobson Dunavant - Personal Portfolio Website" />

                <meta name="twitter:description" content="My personal website, showcasing my experiences and skillsets thus far." />

                <meta name="twitter:image" content="https://dobsond.dev/DDlogo.png" />

            </Head>

            <Navbar toggleChatModal={toggleChatModal} />
            <div className="flex flex-col items-center">
                <ChatbotButton isOpen={isChatModalOpen} setIsOpen={setIsChatModalOpen} />
                <ChatbotModal isOpen={isChatModalOpen} setIsOpen={setIsChatModalOpen} />

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

                <section id="contact" className="w-full bg-middark">
                    <Contact />
                </section>
            </div>
        </div>
    );
};

export default IndexPage;
