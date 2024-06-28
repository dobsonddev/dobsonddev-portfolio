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
        'tater tot connoisseur <span class="icon-placeholder" data-icon="/icons/tatertot.svg"></span>',
        'hobby: the outdoors <span class="icon-placeholder" data-icon="/icons/outdoors.svg"></span>',
        'hobby: music <span class="icon-placeholder" data-icon="/icons/music.svg"></span>',
        'hobby: soccer <span class="icon-placeholder" data-icon="/icons/soccer.svg"></span>',
        'hobby: drumming <span class="icon-placeholder" data-icon="/icons/drummer.svg"></span>',
        'hobby: building stuff <span class="icon-placeholder" data-icon="/icons/project.svg"></span>',
        'hobby: gaming <span class="icon-placeholder" data-icon="/icons/gaming.svg"></span>',
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
        "Welcome! I'm a full-stack developer with a passion for tackling real-world problems with optimized, seamless solutions.",
    missionStatementBottom:
        "I'm driven by curiosity, collaboration, and the desire to build awesome things, with awesome people.",
};

export default homeData;
