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
        "full-stack software engineer \u{1F6E0}",
        "persistent problem solver \u{1F575}",
        "music lover \u{1F50A}",
        "collaborative teammate \u{1F91D}",
        "curiosity driven \u{1F9E0}",
        "agile minded \u{1F501}",
        "drummer \u{1F941}",
        "outdoorsman \u{1F3D5}",
        "tater tot connoisseur \u{1F954}",
    ],
    missionStatementTop:
        "Hello! I'm a versatile full-stack developer with a passion for tackling complex real-world problems through seamless solutions.",
    missionStatementBottom:
        "I'm driven by curiosity, collaboration, and the desire to build awesome things.",
};

export default homeData;
