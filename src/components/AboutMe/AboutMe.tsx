import React from "react";
import AboutMeTree from "@/components/AboutMe/AboutMeTree";

function AboutMe() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold text-light mb-10 pt-4 underline">About Me</h2>
            <AboutMeTree />
        </div>
    );
}

export default AboutMe;
