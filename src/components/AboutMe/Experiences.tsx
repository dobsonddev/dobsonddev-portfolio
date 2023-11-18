import React from "react";
import AboutMeTree from "@/components/AboutMe/AboutMeTree";

function Experiences() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center border-t-8 border-light">
            <h2 className="text-5xl font-bold text-light mb-10 pt-8 underline">Experiences</h2>
            <AboutMeTree />
        </div>
    );
}

export default Experiences;
