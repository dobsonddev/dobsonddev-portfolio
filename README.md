This project was made by Dobson Dunavant - https://github.com/dobsonddev

Technologies:
- Typescript [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- Next.js (pages router)
- TailwindCSS
- next-themes
- OpenAI's `Assistant API` speaking with a custom Assistant that I made.


## Getting Started

1. Clone this repo
2. Run npm install --legacy-peer-deps to install all dependencies
   1. This is because of a version issue between react-typed and the next.js version used in this project.
3. Run npm run dev to start the development server
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Core Changes to Make it Your Own

1. I have housed most of the unique content within {componentName}Data.ts files. You will see them within each component folder. Update them with your own content.
2. You can change themes globally within the tailwind.config.js file.
3. Vanta.js animated backgrounds can be finnicky, so be on your toes with source control as you work with them.

### Please note: If you do not want to use the chatbot, you need to remove/comment out the chat-bot component from the index.tsx file.

#### (Optional) Chat-bot Setup
1. Have a premium account with OpenAI.
2. Create a new OpenAI project.
3. Create a new API key.
4. Create a new .env.local file in the root directory of your cloned project.
5. In this .env.local file, add the following line: `OPENAI_API_KEY=YOUR_API_KEY_HERE`
6. Update the contents of ".../content/structuredData.json. This file is what the OpenAI Assistance references during chatbot conversations. If you had much more content you will quickly feel slower responses. It is not scale well with larger data, as-is.

### Want to deploy? I suggest using Vercel, or GitHub Pages.
- #### Vercel was great for me because it was easy to deploy and I could use my custom domain name. Also it automatically redeployed when I merge to my "main" branch from my development branch.
- "The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js."
- Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
