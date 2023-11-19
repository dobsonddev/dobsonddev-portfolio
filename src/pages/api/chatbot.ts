// import OpenAI from "openai";
// import portfolioData from '../../../My_Portfolio_GPT_Datacorrect.json';
//
// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });
//
// // Define a function to handle user interactions and generate responses
// async function handleUserInteraction(userMessage: string) {
//     try {
//         const response = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo",
//             messages: [
//                 {
//                     "role": "system",
//                     "content": `A friendly assistant for Dobson's personal portfolio site, providing info about him to all who ask, using the information in this JSON file to answer any questions about Dobson:`,
//                 },
//                 {
//                     "role": "user",
//                     "content": userMessage,
//                 },
//             ],
//             temperature: 0.7,
//             max_tokens: 100,
//         });
//
//         const assistantMessage = response.choices[0]?.message?.content || "I'm sorry, I couldn't understand your request.";
//
//         return assistantMessage;
//     } catch (error) {
//         console.error("Error processing user message:", error);
//         return "An error occurred while processing your request. Please try again later.";
//     }
// }
//
// export default handleUserInteraction;