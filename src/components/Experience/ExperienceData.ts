export interface Experience {
    title: string;
    date: string;
    company: string;
    location: string;
    details: string[];
    logo: string;
    technologies: string[];
}

const experiences: Experience[] = [
    {
        title: "Cloud Platform Engineer II",
        date: "Nov 2025 - present",
        company: "Savvas Learning Company (EdTech)",
        location: "Phoenix, AZ (remote)",
        details: [
            "Architected and executed complete 0-downtime GCP to AWS cloud migration using Infrastructure as Code, transitioning App Engine to ECS Fargate, Cloud Storage to S3, BigQuery to Redshift through AWS CDK and Terraform orchestration",
            "Led and executed 7 major cloud infrastructure epics from planning to completion, including a 0-downtime RDS PostgreSQL 12 to Aurora PostgreSQL 16 migration and greenfield AWS CDK IaC project, with minimal senior oversight",
            "Led greenfield AWS CDK Infrastructure as Code project managing all of Outlier's multi-environment AWS infrastructure, implementing TypeScript-based constructs for ECS, RDS Aurora, S3, networking, and monitoring",
            "Orchestrated 0-downtime, blue-green deployments across multiple ECS Fargate services using AWS CodePipeline/CodeDeploy with GitHub Actions CI/CD integration, linear traffic switching, and automated rollbacks",
            "Built multiple secure, FERPA-compliant cloud networking systems using AWS Site-to-Site VPN and Infrastructure as Code (AWS CDK), ensuring compliance and enabling secure cross-cloud transfers of sensitive student data",
            "Engineered custom AWS WAF solution with multi-layered scope-down rules and whitelisting logic to block nefarious traffic while ensuring legitimate signed traffic always passes through, protecting production APIs",
            "Established comprehensive Datadog observability platform using AWS CDK to deploy ECS Fargate sidecar agents, custom monitors, and dashboards, improving mean time to detection by 40% while reducing costs $53,000+ annually",
            "Implemented multi-region caching layer via AWS ElastiCache with automated failover for student data, reducing API latency by 29% during peak traffic periods and improving system resilience",
            "Architected modular k6 load testing suite with Datadog StatsD integration and Docker-based orchestration, creating reusable test patterns and developer-focused documentation that democratized performance testing across engineering teams",
            "Identified and eliminated critical performance bottleneck in student dashboard API using k6 load testing framework, replacing expensive LEFT JOIN with inverse relationship lookups leveraging existing database indexes to reduce p95 response time from 5.8s to 795ms (7.3x faster)",
            "Authored 10+ comprehensive technical documentation pieces in Confluence covering AWS architecture, cloud migration strategies, and Infrastructure as Code patterns, improving developer onboarding",
            "Created and delivered 4+ technical knowledge-sharing sessions on AWS architecture, cloud security best practices, and cloud/database migration strategies for engineering teams"
        ],
        logo: '/savvaslogo.png',
        technologies: ['React', 'Node_js', 'PostgreSQL', 'AWS', 'Google_Cloud', 'Docker'],
    },
    {
        title: "Cloud Platform Engineer I",
        date: "Dec 2023 - Nov 2025",
        company: "Savvas Learning Company (EdTech)",
        location: "Phoenix, AZ (remote)",
        details: [
            "Developed full-stack solutions for Outlier.org educational platform using React, Node.js, PostgreSQL, Jest, AWS, and GitHub in Agile environment, implementing software engineering best practices",
            "Led planning and development of semester-long course epic requiring multiple new full-stack features, completing deployment in 6 weeks (2 weeks ahead of deadline) by coordinating parallel workstreams",
            "Built end-to-end data pipeline using AWS Kinesis Firehose streaming CloudWatch application logs to Redshift, creating materialized views aggregating disparate log data for DBT ingestion and Tableau analytics",
            "Redesigned database architecture by unifying disparate data sources, establishing schema relationships in PostgreSQL and RDS Aurora, and implementing migration patterns for over 7TB of course data",
            "Built SQL-procedure-based PII scrambling solution allowing developers to pull anonymized production data subsets locally, reducing bug replication time from hours to minutes",
            "Strengthened application security posture by resolving critical DAST scan vulnerabilities, implementing Auth0-based system lockdown protocols, and configuring enhanced HSTS security headers"
        ],
        logo: '/savvaslogo.png',
        technologies: ['React', 'Node_js', 'PostgreSQL', 'AWS', 'Google_Cloud', 'Docker'],
    },
    {
        title: "Full-Stack Software Engineering Co-Op",
        date: "Sep 2023 - May 2024",
        company: "Mercedes-Benz & IFA Group",
        location: "Ladson, SC",
        details: [
            "Led team of 4 to develop a portable inventory scanning system using React, Flask, AWS, PostgreSQL, OpenCV, Tesseract OCR and YOLOv8 for real-time, small-part tracking in industrial settings to enable inventory awareness and supply-chain analytics",
            "Authored Software Requirements & Design Specification documents (SRS and SDS), gathering then defining functional and non-functional requirements which were then used in system design.",
            "Designed and implemented restful HTTPS communications via AWS API Gateway to SAP APIs, enabling real-time, scalable inventory transactions",
            "Achieved 98% inventory accuracy and SAP integration, delivering a fully end-to-end solution, significantly surpassing the existing accuracy and efficiency benchmarks"
        ],
        logo: '/mblogo.png',
        technologies: ['React', 'Flask', 'PostgreSQL', 'AWS', 'OpenCV'],
    },

    {
        title: "Software Engineering Intern",
        date: "May 2023 - Aug 2023",
        company: "Savvas Learning Company (EdTech)",
        location: "Phoenix, AZ",
        details: [
            "Developed full-stack solutions for Savvas Realize, an industry-leading K-12 ed-tech platform, using Angular 16 MFEs, Apollo, GraphQL, RxJS, Spring, PostgreSQL, and Jest",
            "Resolved 11 high-priority Jira tickets, contributing to sprint goals within an Agile team",
            "Designed API sequence diagrams, illustrating the end-to-end lifecycle across Angular micro-frontends, Apollo GraphQL, Spring services, and PostgreSQL, for use in understanding and optimizing within a module federation architecture",
            "Built a comprehensive, all-in-one Confluence knowledge hub, covering content from day 1 new-dev onboarding guides to custom micro-frontend build steps, reducing redundant knowledge-sharing and improving developer autonomy/efficiency."
        ],
        logo: '/savvaslogo.png',
        technologies: ['Angular', 'GraphQL', 'Spring', 'PostgreSQL', 'Jest', 'StoryBook'],

    },
    {
        title: "Data Engineering Intern",
        date: "Sep 2022 - Jan 2023",
        company: "Vision Software Solutions (FinTech)",
        location: "Charleston, SC",
        details: [
            "Migrated from a monolithic desktop app to a microservice web app using React, Django, PostgreSQL, and AWS services (EC2, Lambda, S3, Athena), enhancing system efficiency and scalability",
            "Optimized API and query logic, utilizing AWS ElastiCache with in-memory data store for real-time data caching, reducing user load time by 23\\% (measured by AWS CloudWatch)",
            "Containerized Python ETL tasks and credit scoring algorithms using Docker Containers, encapsulating isolated processes and minimizing single-point failures"
        ],
        logo: '/fiscallogo.png',
        technologies: ['React', 'Django', 'PostgreSQL', 'AWS', 'Docker'],

    },
    {
        title: "Customer Success & Scrum Master",
        date: "March 2018 - March 2021",
        company: "Ceterus (FinTech startup)",
        location: "Charleston, SC",
        details: [
            "Engineered technical solutions for over 125 clients by delivering solutions that directly fit client needs, creating real business value while increasing client happiness/retention.",
            "Achieved a domain-high 23% year-over-year increase in customer retention by delivering client-aligned solutions, conducting regular feedback sessions, and consistent, personalized follow-ups, leading to stronger client relationships and improved satisfaction",
            "Achieved a 21% reduction in time blocked within six months by addressing common blockers while facilitating knowledge-sharing between interdependent teams for more efficient sprint planning and execution"
        ],
        logo: '/ceteruslogo.png',
        technologies: ['Jira', 'Excel', 'QuickBooks'],

    }
];

export default experiences;
