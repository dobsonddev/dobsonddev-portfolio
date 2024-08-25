export interface BlogPost {
    title: string;
    Introduction: string;
    imageUrl: string;
    publicationDate: string;
    slug: string; // Add this to connect with the MDX file
}

const blogData: BlogPost[] = [
    {
        title: "Imposter Syndrome and Navigating Early Experiences in Tech",
        Introduction: "Starting a career in tech can feel overwhelming, especially when Imposter Syndrome rears its head. In this post, I offer some anecdotal insights with hopes they might help someone facing similar challenges.",
        imageUrl: "https://yourimageurl.com/react-hooks.jpg",
        publicationDate: "2023-05-04",
        slug: "imposter-syndrome-and-early-experiences"
    },
    {
        title: "The Value of Sequence Diagrams for Early Software Engineers",
        Introduction: "How creating sequence diagrams helps me understand large, complex, enterprise systems.",
        imageUrl: "https://yourimageurl.com/sequence-diagrams.jpg",
        publicationDate: "Coming soon",
        slug: "value-of-sequence-diagrams"
    },
    {
        title: "Zoomed out, then Zoomed In - Evolution of 'Hooks' in Web Development",
        Introduction: "How did we manage state before hooks? How did Hooks emerge and evolve into what we see across modern frontend frameworks today (React, Angular, Vue)?",
        imageUrl: "https://yourimageurl.com/react-angular-hooks.jpg",
        publicationDate: "Coming soon",
        slug: "evolution-of-hooks"
    },
    {
        title: "Understanding JS' Async/Await in the context of Concurrency and Parallelism",
        Introduction: "(Re)Introducing yourself to asynchronous web development, through the lens of concurrency and parallelism.",
        imageUrl: "https://yourimageurl.com/async-await.jpg",
        publicationDate: "Coming soon",
        slug: "understanding-async-await"
    },
    {
        title: "A Dive into Webpack's Module Federation",
        Introduction: "Exploring Webpack's Module Federation and it's usage/importance in Micro Front-End (MFE) architectures.",
        imageUrl: "https://yourimageurl.com/module-federation.jpg",
        publicationDate: "Coming soon",
        slug: "module-federation"
    },
    {
        title: "AI in EdTech - Equalizer or divider for educational inequality?",
        Introduction: "Some thoughts on how AI-powered solutions could either bridge or further divide educational inequalities.",
        imageUrl: "",
        publicationDate: "Coming soon",
        slug: "ai-in-edtech"
    }
];

export default blogData;
