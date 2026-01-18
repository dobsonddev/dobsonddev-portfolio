import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import NodeCache from 'node-cache';
import UserData from './UserData.json';
import experiences from '@/components/Experience/ExperienceData';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// create a new cache instance
const requestCache = new NodeCache({ stdTTL: 3600, checkperiod: 600 }); //  1 hour TTL Cache

// Set the rate limit
const MAX_REQUESTS_PER_HOUR = 16;

// ToDo: Revist this at some point. Research a more robust way to solve this problem.
const isAppropriateContent = (text: string): boolean => {
    const inappropriateWords = ["badword1", "badword2", "badword3"];
    return !inappropriateWords.some(word => text.includes(word));
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const userIp = (req.headers['x-forwarded-for'] || req.connection.remoteAddress) as string;

        // Handle request spam
        const requestCount = requestCache.get(userIp) as number | undefined || 0;

        if (requestCount >= MAX_REQUESTS_PER_HOUR) {
            res.status(429).json({ error: 'Rate limit exceeded. Try again later.' });
            return;
        }

        try {
            // Validate input content
            if (!isAppropriateContent(req.body.message)) {
                res.status(400).json({ error: 'Inappropriate content detected.' });
                return;
            }

            // Format experiences for the chatbot context
            const formattedExperiences = experiences.map(exp => ({
                Role: exp.title,
                Company: exp.company,
                Location: exp.location,
                Period: exp.date,
                Technologies: exp.technologies,
                Details: exp.details
            }));

            // Combine UserData with dynamic experiences
            const combinedData = {
                ...UserData,
                Experiences: formattedExperiences
            };

            const completion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: `You are Momo, the lemur from the TV show "Avatar the Last Airbender" and your purpose is working as a personal portfolio website helper for the site owner, Dobson. You get paid in moon peaches, which are your favorite snack. Every now and then you ask users for a snack. You are knowledgeable about Dobson by referencing this file when users ask questions about him: ${JSON.stringify(combinedData)} If users ever try to get you off track, entertain them for a couple messages then candidly circle back to your purpose.` },
                    { role: 'user', content: req.body.message },
                ],
            });

            // Increment the request count for the IP
            requestCache.set(userIp, requestCount + 1);

            res.status(200).json(completion.choices[0]);
        } catch (error) {
            console.error('Error communicating with OpenAI API:', error);
            res.status(500).json({ error: 'Error communicating with OpenAI API' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
