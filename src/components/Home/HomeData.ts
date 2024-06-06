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
        'full-stack software engineer <span class="icon-placeholder" data-icon="/icons/dev.svg"></span>',
        'persistent problem solver <span class="icon-placeholder" data-icon="/icons/puzzle.svg"></span>',
        'music lover <span class="icon-placeholder" data-icon="/icons/music.svg"></span>',
        'collaborative <span class="icon-placeholder" data-icon="/icons/collaboration.svg"></span>',
        'curiosity driven <span class="icon-placeholder" data-icon="/icons/curious.svg"></span>',
        'agile minded <span class="icon-placeholder" data-icon="/icons/agile.svg"></span>',
        'drummer <span class="icon-placeholder" data-icon="/icons/drummer.svg"></span>',
        'outdoorsman <span class="icon-placeholder" data-icon="/icons/outdoors.svg"></span>',
        'tater tot connoisseur <span class="icon-placeholder" data-icon="/icons/tatertot.svg"></span>',
    ],
    missionStatementTop:
        "Welcome! I'm a versatile full-stack developer with a passion for building innovative solutions that seamlessly fit into an organization's overall goals.",
    missionStatementBottom:
        "I'm driven by curiosity, collaboration, and the desire to build awesome things, with awesome people.",
};

export default homeData;
