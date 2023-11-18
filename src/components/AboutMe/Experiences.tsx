import React from "react";
import ExperienceTree from "@/components/AboutMe/ExperienceTree";

function Experiences() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center border-t-8 border-light px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light mb-10 pt-16 underline">Experiences</h2>
            <ExperienceTree />
        </div>
    );
}

export default Experiences;