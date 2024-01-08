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
    missionStatementTop: "An aspiring software engineer with the proven ability to deliver seamless solutions for organizations through collaboration and innovation.",
    missionStatementBottom: "I thrive in dynamic environments where technical problem-solving drives impactful results.",
};

export default homeData;
