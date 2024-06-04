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
        "collaborative teammate \u{1F91D}",
        "curiosity driven \u{1F9E0}",
        "agile minded \u{1F501}",
        "music lover \u{1F3B5}",
        "drummer \u{1F941}",
        "outdoorsman \u{1F3D5}",
        "tater tot connoisseur \u{1F954}",
    ],
    missionStatementTop:
        "Hi there! I'm a versatile full-stack developer who loves tackling complex challenges. With a diverse background spanning cloud, data, AI/ML, and enterprise-level web development, I bring a unique perspective to building efficient, scalable solutions.",
    missionStatementBottom:
        "I'm driven by curiosity, collaboration, and a desire to make a real impact. Scroll down to see how I can contribute to your team!",
};

export default homeData;
