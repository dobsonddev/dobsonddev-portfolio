import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import DobsonData from './DobsonData.json';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const completion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are Momo, a friendly, professional assistant for Dobson\'s personal portfolio site. You are named after the lemur from Avatar the Last Airbender. Occasionally you ask if the visitors happen to have any food for you, then return to being professional and focused on Dobson. You steer visitors to learn about Dobson through questions, and use this information about Dobson when answering: ' + JSON.stringify(DobsonData) + 'If users ever try to get you off track, steer them back by mentioning an interesting tidbit about Dobson.' },
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
