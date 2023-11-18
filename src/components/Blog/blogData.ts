// blogData.ts

export interface BlogPost {
    title: string;
    Introduction: string;
    mainContent: string;
    imageUrl: string;
    publicationDate: string;
}

const blogData: BlogPost[] = [
    {
        title: "How did I navigate my early experiences in tech?",
        Introduction: "My evolution from my first experience in tech, to where I am now.",
        mainContent: `
    <p class="text-base mb-4">Going into my first internship, I had a million questions, and admittedly, a lot of intimidation. What would my day-to-day look like? How am I going to learn this entire stack, from scratch, while making impactful contributions?</p>
    <p class="text-base mb-4">How much different will working in tech be, compared to my expectations?...As I began to work, I realized that I had a lot to learn, but I also realized that I had a lot to offer. What was once intimidation quickly evolved into excitement and drive.</p>
    <p class="text-base mb-4">I'll never forget my first PR. Although it was a minor change, it was to hit the UI of a several-thousand-users UI. I saw it in nightly, a week before the production release, which gave me a swift dose of excitement and nerves. Finally, I received an automated message that it was successfully deployed into production, and I was absolutely elated. Admittedly, negative emotions still exist at times, but have largely been replaced by a growing confidence, excitement to collaborate and learn from great minds and the drive to contribute optimized, healthy solutions.</p>
    <p class="text-base mb-4">I've been able to carve out and self-start opportunities for myself within my experiences, and contribute to organizations in ways that neither of us expected. It's wild to put myself in my mental shoes from 2 years ago compared to now. I'm forever grateful to have been able to learn so, so much in such a short period of time, from some incredible mentors and peers.</p>
    <p class="text-base mb-4">I'm excited to continue to learn and grow, and see where my journey takes me as I seek to invest myself in new, more challenging and impactful experiences.</p>
`,
        imageUrl: "https://yourimageurl.com/react-hooks.jpg",
        publicationDate: "2023-11-17"
    },
    {
        title: "The Value of Sequence Diagrams for Early Software Engineers",
        Introduction: "How creating sequence diagrams at Savvas enhanced my understanding of complex systems.",
        mainContent: `
        <p class="text-base mb-4">During my internship at Savvas, I was tasked with creating detailed sequence diagrams. These diagrams were crucial in tracing the journey of massive API calls across our tech stack, which included Angular 16 MFEs, GraphQL, and SpringBoot, connected to a PostgreSQL database.</p>
        <p class="text-base mb-4">The process of visualizing the flow of data and understanding the interactions between different components was not just about documentation. It was a valuable learning experience that deepened my understanding of how large-scale applications operate in a cohesive manner.</p>
    `,
        imageUrl: "https://yourimageurl.com/sequence-diagrams.jpg",
        publicationDate: "2023-09-20"
    },

    {
        title: "Exploring React and Angular's Hooks",
        Introduction: "A comparative study of React and Angular hooks based on my hands-on experience.",
        mainContent: `
        <p class="text-base mb-4">Having extensively used Angular hooks at Savvas and React hooks in various other projects, I've gained a unique perspective on how both frameworks approach the concept of hooks.</p>
        <p class="text-base mb-4">In this article, I delve into the design philosophies and implementation details of hooks in both React and Angular, drawing from my diverse experiences as detailed in my resume.</p>
    `,
        imageUrl: "https://yourimageurl.com/react-angular-hooks.jpg",
        publicationDate: "2023-10-15"
    },

    {
        title: "Understanding Async/Await in JavaScript",
        Introduction: "My journey towards mastering async/await in JavaScript.",
        mainContent: `
        <p class="text-base mb-4">Async/await in JavaScript can initially appear daunting. My journey towards understanding and effectively utilizing this powerful feature was marked by various challenges and learning experiences across multiple projects.</p>
        <p class="text-base mb-4">In this post, I aim to demystify async/await, sharing not just my own experiences but also providing educational insights into how you can leverage this feature to write cleaner, more efficient asynchronous code.</p>
    `,
        imageUrl: "https://yourimageurl.com/async-await.jpg",
        publicationDate: "2023-11-03"
    },

    {
        title: "A Dive into Webpack's Module Federation",
        Introduction: "Exploring Webpack's Module Federation and it's usage/importance in Micro Front-End (MFE) architectures.",
        mainContent: `
        <p class="text-base mb-4">At Savvas Learning Company, my engagement with Angular's Module Federation was both deep and insightful. Leveraging Webpack for our main platform, I discovered the power and flexibility of this approach.</p>
        <p class="text-base mb-4">This article shares my experiences and learning, offering a detailed understanding of Module Federation and how it can be applied to create scalable, maintainable, and efficient applications.</p>
    `,
        imageUrl: "https://yourimageurl.com/module-federation.jpg",
        publicationDate: "2023-08-23"
    },

    //other topics to consider: Working in industrial environemtns, machine learning stuff, robotics stuff, stuff from other experineces and tying those expereinces to the blog posts.


];

export default blogData;