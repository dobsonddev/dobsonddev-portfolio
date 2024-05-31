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
    missionStatementTop: "Welcome! I'm a full-stack software developer who enjoys building generalized, optimized solutions to real-world problems. I have the ability to adapt and deliver at a high level due to my wide array of tech experiences from AI/ML + robotics to enterprise-level, full-stack application development. Scroll down to learn more!",
    missionStatementBottom: "I thrive in dynamic, collaborative environments.",
};

export default homeData;
