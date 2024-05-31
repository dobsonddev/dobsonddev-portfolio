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
    missionStatementTop: "Hello! I'm a full-stack software developer with a passion for building solid, optimized solutions to real-world problems. I adapt and deliver at a high level as a result of a wide array of experience and skills, from AI/ML + robotics to enterprise-level, full-stack application development. I thrive in dynamic, collaborative environments.",
    missionStatementBottom: "Scroll down to learn more!",
};

export default homeData;
