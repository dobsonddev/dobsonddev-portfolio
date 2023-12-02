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
        "A full-stack engineer",
        "A hungry mind",
        "A persistent problem solver",
        "A collaborative teammate",
        "Agile minded",
        "A continuous learner",
        "A drummer",
        "A lover of the outdoors",
        "A tater tot connoisseur",],
    missionStatementTop: "An aspiring full-stack software engineer with a proven history of delivering seamless, optimized solutions through collaboration and innovation.",
    missionStatementBottom: "I thrive in dynamic environments where creative problem-solving drives impactful results.",

};

export default homeData;
