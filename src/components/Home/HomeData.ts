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
        "A full-stack software engineer 💻",
        "A hungry mind 🧠",
        "A persistent problem solver 🔍",
        "A collaborative teammate 👥",
        "Agile minded 🏃‍♂️",
        "A continuous learner 📚",
        "A drummer 🥁",
        "A lover of the outdoors 🌳",
        "A tater tot connoisseur 🥔",
    ],
    missionStatementTop: "An aspiring full-stack software engineer with a proven ability to continually learn while delivering solutions that seamlessly integrate into an organization's existing goals.",
    missionStatementBottom: "",

};

export default homeData;
