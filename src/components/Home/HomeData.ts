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
        'hobby: music <span class="icon-placeholder" data-icon="/icons/music.svg"></span>',
        'hobby: soccer <span class="icon-placeholder" data-icon="/icons/soccer.svg"></span>',
        'hobby: drumming <span class="icon-placeholder" data-icon="/icons/drummer.svg"></span>',
        'hobby: backpacking <span class="icon-placeholder" data-icon="/icons/outdoors.svg"></span>',
        'hobby: gaming <span class="icon-placeholder" data-icon="/icons/gaming.svg"></span>',
        'interest: Evolutionary AI <span class="icon-placeholder" data-icon="/icons/cloudcomputing.png"></span>',
        'interest: AI and Ethics <span class="icon-placeholder" data-icon="/icons/cybersecurity.png"></span>',
        'hobby: home labs <span class="icon-placeholder" data-icon="/icons/devops.png"></span>',
        'interest: processing big data <span class="icon-placeholder" data-icon="/icons/dataengineering.png"></span>'
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
        "Welcome! \n I'm a tech enthusiast with interests ranging from full-stack web development to cybersecurity and cloud computing. I love to learn on-the-go while tackling real-world problems with long-term solutions.",
    missionStatementBottom:
        "I'm driven by curiosity, collaboration, and building awesome things with awesome people.",
};

export default homeData;
