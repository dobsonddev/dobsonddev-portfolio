// src/pages/api/chatbotassistantbeta.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const openai = new OpenAI({
            apiKey: "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",
        });

        try {
            //create assistant
            const assistant = await openai.beta.assistants.retrieve("asst_nocJRvtHf67l5FscsQExlm7T");

            //create thread
            const thread = await openai.beta.threads.create();

            //create message in this thread
            const message = await openai.beta.threads.messages.create(thread.id, {
                role: "user",
                content: "what color is a banana?",
            });

            //run assistant
            const run = await openai.beta.threads.runs.create(thread.id, {
                assistant_id: assistant.id,
            });

            const responseRun = await getResponse(openai, thread.id, run.id);

            const messages: any = await openai.beta.threads.messages.list(thread.id);

            messages.body.data.forEach((message: any) => {
                console.log(message.content);
            });

            res.status(200).json({ assistant, thread, message, run, responseRun });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}

async function getResponse(openai: OpenAI, threadId: string, runId: string) {
    let runStatus = null;
    do {
        const run = await openai.beta.threads.runs.retrieve(threadId, runId);
        runStatus = run.status;
        if (runStatus === "completed") {
            return run;
        }
        await new Promise(resolve => setTimeout(resolve, 50000)); // Reduced from 50000 to 1000
    } while (runStatus === "queued");

    throw new Error("Run did not complete in expected time.");
}