import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug } = req.query;

    if (!slug || Array.isArray(slug)) {
        return res.status(400).json({ error: 'Invalid slug' });
    }

    try {
        const filePath = path.join(process.cwd(), 'src', 'components', 'Blog', 'posts', `${slug}.mdx`);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { content } = matter(fileContent);
        const mdxSource = await serialize(content);

        res.status(200).json({ mdxSource });
    } catch (error) {
        res.status(500).json({ error: 'Failed to load MDX content' });
    }
}
