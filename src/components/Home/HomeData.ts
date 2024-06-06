export interface HomeData {
    name: string;
    attributes: string[];
    iconAlts: string[];
    missionStatementTop: string;
    missionStatementBottom: string;
}

const homeData: HomeData = {
    name: "Dobson",
    attributes: [
        'full-stack software developer <span class="icon-placeholder" data-icon="/icons/dev.svg"></span>',
        'persistent problem solver <span class="icon-placeholder" data-icon="/icons/problemsolve.svg"></span>',
        'music lover <span class="icon-placeholder" data-icon="/icons/music.svg"></span>',
        'collaborative <span class="icon-placeholder" data-icon="/icons/collaboration.svg"></span>',
        'curiosity driven <span class="icon-placeholder" data-icon="/icons/curious.svg"></span>',
        'agile minded <span class="icon-placeholder" data-icon="/icons/agile.svg"></span>',
        'drummer <span class="icon-placeholder" data-icon="/icons/drummer.svg"></span>',
        'outdoorsman <span class="icon-placeholder" data-icon="/icons/outdoors.svg"></span>',
        'tater tot connoisseur <span class="icon-placeholder" data-icon="/icons/tatertot.svg"></span>',
    ],
    iconAlts: [
        'Developer icon',
        'Puzzle icon',
        'Music icon',
        'Collaboration icon',
        'Curious icon',
        'Agile icon',
        'Drummer icon',
        'Outdoors icon',
        'Tater tot icon',
    ],
    missionStatementTop:
        "Welcome! I'm a versatile full-stack developer with a passion for building solutions that seamlessly align with an organization / team's goals.",
    missionStatementBottom:
        "I'm driven by curiosity, collaboration, and the desire to build awesome things, with awesome people.",
};

export default homeData;
