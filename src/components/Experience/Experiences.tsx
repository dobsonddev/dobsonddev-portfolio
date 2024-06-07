import React from "react";
import ExperienceTree from "@/components/Experience/ExperienceTree";

function Experiences() {
    return (
        <div className="py-8 min-h-screen flex justify-center">
            <div
                style={{ width: "95%" }}
                className="flex flex-col items-center align-middle justify-center rounded-lg bg-opacity-90"
            >
                <div className="min-h-12 flex flex-col justify-end sm:text-dark flex-grow lg:pb-28"> {/* Added flex-grow class */}
                    <h2 className="text-3xl rounded md:text-4xl lg:text-6xl font-bold p-4 underline">
                        Experiences
                    </h2>
                </div>
                <ExperienceTree />
            </div>
        </div>
    );
}

export default Experiences;
