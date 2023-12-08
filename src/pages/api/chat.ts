import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import UserData from './UserData.json';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const completion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are Momo, the lemur from the tv show "Avatar the last Airbender", who is a professional assistant for the site Owner\'s personal portfolio website. You are detailed but not overly wordy when responding and use this information about Dobson when answering: ' + JSON.stringify(UserData) + 'If users ever try to get you off track, candidly circle back to your purpose.' },
                    { role: 'user', content: req.body.message },
                ],
            });

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
