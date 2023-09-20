import React from "react";
import Typed from "react-typed";

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-creamOrange to-softBlue grid grid-flow-row auto-rows-auto items-center justify-items-center">
            <div className="text-center mt-10">
                <h1 className="text-8xl font-extrabold tracking-wider text-light">
                    Hi, <br />
                    I'm Dobson
                </h1>
            </div>

            <div className="bg-black text-3xl text-light p-2 rounded mb-auto">
                <Typed
                    strings={[
                        "A software engineer",
                        "A problem solver",
                        "A data enthusiast",
                        "A solutions orchestrator",
                        "A music lover",
                        "A hungry mind",
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
        </div>
    );
}

export default Home;
