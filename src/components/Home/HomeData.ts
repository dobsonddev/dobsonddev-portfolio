// HomeData.ts

export interface HomeData {
    name: string;
    attributes: string[];
    missionStatementTop: string;
    missionStatementBottom: string;
}

const homeData: HomeData = {
    name: "Dobson",
    attributes: [
        "An aspiring software engineer 🛠",
        "A hungry mind 🧠",
        "A persistent problem solver 🕵🏼‍",
        "A collaborative teammate 🤜🤛",
        "Agile minded 🔄",
        "A continuous learner 📚",
        "A drummer 🥁",
        "An outdoorsman 🏕️",
        "A tater tot connoisseur 🥔",
    ],
    missionStatementTop: "Welcome! I'm a tech enthusiast who loves to build seamless, optimized solutions within large systems. I have experience across the stack and truly enjoy areas from UI/UX design to building data pipelines.",
    missionStatementBottom: "I thrive in dynamic, collaborative environments.",
};

export default homeData;
