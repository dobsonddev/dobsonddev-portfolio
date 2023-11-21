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
        Introduction: "Some anecdotes on my first experiences in tech, and how I navigated them.",
        mainContent: `
<p class="text-gray-700 mb-4">
        It's nice to take a moment to reflect on how far you've come, and appreciate what has moved you closer to your goals. Imposter syndrome is a real beast, so I think a bit of reflection on your progress can go a long way.
    </p>
    
<p class="text-gray-700 mb-4">
        Going into my first real technical role as a Data Engineering Intern, back in mid 2022, I had a million questions, and admittedly, a lot of intimidation. 
        What would my day-to-day look like? How was I going to learn this entire stack, from scratch, 
        while making impactful contributions? What is this 'memoization' thing I've read about? Did they just spell memorization wrong?
    </p>
    <p class="text-gray-700 mb-4">
        As I began to work, I realized that although I had a lot to learn, I had a lot to offer too. I began breaking this massive enterprise system into smaller, more approachable pieces, relevant to my domain. The first 2 months flew by, but I got to look back and be amazed at how my mental landscape had evolved. I really enjoyed the semi-structured nature of it all. I was able to learn from my peers, and also learn on my own, in ways that were most effective for me. Essentially "learning how to learn" in a professional tech environment.
        What was once intimidation and daunt had evolved into discovery and drive. I'd made myself knowledgeable on a few pieces of the stack that no one else was especially knowledgeable about, providing some unique insights here and there to devs and stakeholders much, much smarter and more experienced than me.
    </p>
    <p class="text-gray-700 mb-4">
        I'll never forget my first PR. Just a minor change toan 'on-hover' feature. But it was a feature 
        used by several thousand users. I saw it in nightly, a week before the production release, which 
        gave me a swift dose of both excitement and nerves. After that long week, the automated production release email had my bugfix in the patch notes. An audible exhale and a little smile, it was a good moment. I've made a sort of internal decision that none of us know everything. We're all constantly learning on-the-go. It's teh ability to do that while still outputing value that makes a great engineer (unless you are a genius, then I think the bar may be a bit higher).
          These negative 
        emotions absolutely still exist at times but have largely been replaced by excitement 
        to collaborate with and learn from great minds while delivering seamless, 
        impactful solutions.
    </p>
    <p class="text-gray-700 mb-4">
        Over my diverse experiences thus far, I've been able to self-start different opportunities within 
        these experiences and contribute to organizations in ways that neither of us expected. From creating an all-in-one knowledge base that both the veterans and new-hires reference for 
        onboarding or deeper knowledge, to leading hackathon projects which designed and implemented real, 
        effective enhancements to an organization. I've realized value opportunities exist everywhere, and seizing them is a way to make real, unique impacts.
    </p>
    <p class="text-gray-700 mb-4">
        It is quite a trip to put myself in my mental shoes from 2 years ago, compared to now. I'm forever 
        grateful to have been able to learn so much in such a short period of time, from incredible mentors 
        and peers.
    </p>
    <p class="text-gray-700">
        I'm excited to continue to grow and learn as I seek to invest myself in new, more challenging and impactful experiences.
    </p>`,
        imageUrl: "https://yourimageurl.com/react-hooks.jpg",
        publicationDate: "2023-11-13"
    },
    {
        title: "The Value of Sequence Diagrams for Early Software Engineers",
        Introduction: "How creating sequence diagrams helps me understand large, complex, enterprise systems.",
        mainContent: `
        <p class="text-base mb-4">During my internship at Savvas, I was tasked with creating detailed sequence diagrams. These diagrams were crucial in tracing the journey of massive API calls across our tech stack, which included Angular 16 MFEs, GraphQL, and SpringBoot, connected to a PostgreSQL database.</p>
        <p class="text-base mb-4">The process of visualizing the flow of data and understanding the interactions between different components was not just about documentation. It was a valuable learning experience that deepened my understanding of how large-scale applications operate in a cohesive manner.</p>
    `,
        imageUrl: "https://yourimageurl.com/sequence-diagrams.jpg",
        publicationDate: "Coming soon"
    },

    {
        title: "Zoomed out, then Zoomed In - 'Hooks' in Web Development",
        Introduction: "A brief history of the evolution of 'Hooks' in programming, and how they fit into modern web development (React, Angular, Vue)",
        mainContent: `
        <p class="text-base mb-4">Having extensively used Angular hooks at Savvas and React hooks in various other projects, I've gained a unique perspective on how both frameworks approach the concept of hooks.</p>
        <p class="text-base mb-4">In this article, I delve into the design philosophies and implementation details of hooks in both React and Angular, drawing from my diverse experiences as detailed in my resume.</p>
    `,
        imageUrl: "https://yourimageurl.com/react-angular-hooks.jpg",
        publicationDate: "Coming soon"
    },

    {
        title: "Understanding JS' Async/Await in the context of Concurrency and Parallelism",
        Introduction: "(Re)Introducing yourself to asynchronous web development through the lens of concurrency and parallelism.",
        mainContent: `
        <p class="text-base mb-4">Async/await in JavaScript can initially appear daunting. My journey towards understanding and effectively utilizing this powerful feature was marked by various challenges and learning experiences across multiple projects.</p>
        <p class="text-base mb-4">In this post, I aim to demystify async/await, sharing not just my own experiences but also providing educational insights into how you can leverage this feature to write cleaner, more efficient asynchronous code.</p>
    `,
        imageUrl: "https://yourimageurl.com/async-await.jpg",
        publicationDate: "Coming soon"
    },

    {
        title: "A Dive into Webpack's Module Federation",
        Introduction: "Exploring Webpack's Module Federation and it's usage/importance in Micro Front-End (MFE) architectures.",
        mainContent: `
        <p class="text-base mb-4">At Savvas Learning Company, my engagement with Angular's Module Federation was both deep and insightful. Leveraging Webpack for our main platform, I discovered the power and flexibility of this approach.</p>
        <p class="text-base mb-4">This article shares my experiences and learning, offering a detailed understanding of Module Federation and how it can be applied to create scalable, maintainable, and efficient applications.</p>
    `,
        imageUrl: "https://yourimageurl.com/module-federation.jpg",
        publicationDate: "Coming soon"
    },

    {
        title: "AI/ML in EdTech, an equalizer or a divider of educational inequality?",
        Introduction: "In this article, I explore the role of AI/ML in EdTech, and how it can be leveraged to bridge the educational inequality gap.",
        mainContent: `
        <p class="text-base mb-4"></p>
        <p class="text-base mb-4">Sources
            <ul class="list-disc list-inside"></ul>
        </p>`
        ,
        imageUrl: "",
        publicationDate: "Coming soon"
    },

    //other topics to consider: Working in industrial environemtns, machine learning stuff, robotics stuff, stuff from other experineces and tying those expereinces to the blog posts.
];

export default blogData;
