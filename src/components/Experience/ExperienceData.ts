// ExperienceData.ts

export interface Experience {
    title: string;
    date: string;
    company: string;
    location: string;
    details: string[];
    logo: string;
}

const experiences: Experience[] = [
    {
        title: "Robotics & Machine Learning Co-Op",
        date: "Sep 2023 - Current",
        company: "Mercedes-Benz x College of Charleston",
        location: "Ladson, SC",
        details: [
            "Developed a real-time, autonomous inventory scanning system using a multi-layered machine learning system deployed onto Raspberry Pi edge devices that communicate with AWS and SAP via WebSocket connections",
            "Leading a team of four students under two professors, in direct collaboration with Mercedes-Benz Vans stakeholders.",
            "Demonstrated significant improvement in accuracy and real-time awareness of high-importance inventory during the initial system implementation",
        ],
        logo: '/mblogo.png'
    },
    {
        title: "Software Engineering Intern",
        date: "May 2023 - Aug 2023",
        company: "Savvas Learning Company (EdTech)",
        location: "Phoenix, AZ",
        details: [
            "Developed full-stack solutions for an industry-leading K-12 ed-tech platform across an Angular 16 MFE, Apollo, GraphQL, RxJS, Spring, PostgreSQL, and Jest tech stack",
            "Resolved nine Jira tickets across  sprints as a member of an Agile team",
            "Self-started a full knowledge-base development, resulting in an all-in-on confluence knowledge hub for both new hires and experienced devs to reference during their onboarding and development processes, respectively"
        ],
        logo: '/savvaslogo.png'
    },
    {
        title: "Data Engineering Intern",
        date: "Sep 2022 - Jan 2023",
        company: "Fiscal Spreading & Tracking (FinTech)",
        location: "Charleston, SC",
        details: [
            "Performed transition from a monolithic desktop app to a microserviced, serverless web app, utilizing React, Django, PostgreSQL, and multiple AWS cloud services such as Lambda, S3, and RDS",
            "Optimized API calls, assessed existing API performance, then refactored for improved query and data handling, reducing server load and user wait times",
            "Containerized various data tasks to separate concerns and minimize/mitigate single-point-of-failure situations using Docker containers"
        ],
        logo: '/fiscallogo.png'
    },
    {
        title: "Sales Engineer & Scrum Master",
        date: "March 2018 - March 2021",
        company: "Ceterus (FinTech startup)",
        location: "Charleston, SC",
        details: [
            "Engineered technical solutions for over 125 clients by translating complex technical features into tangible business benefits, leading to increased sales and enhanced customer engagement",
            "Fostered these client relationships, resulting in enhanced product adoption and customer satisfaction/retention\n",
            "Achieved a 21% reduction in time blocked within six months by addressing common blockers while facilitating knowledge-sharing between interdependent teams for more educated spring planning and execution"
        ],
        logo: '/ceteruslogo.png'
    }
];

export default experiences;
