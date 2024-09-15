import { NotionAPI } from 'notion-client';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const notionAPI = new NotionAPI({
    authToken: process.env.NOTION_TOKEN_V2,
    activeUser: process.env.NOTION_ACTIVE_USER,
});

export async function getAllBlogPosts(databaseId) {
    try {
        console.log(`Querying Notion database with ID: ${databaseId}`);
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: 'Published',
                checkbox: {
                    equals: true,
                },
            },
            sorts: [
                {
                    property: 'Date',
                    direction: 'descending',
                },
            ],
        });

        console.log(`Notion database query successful. Number of posts: ${response.results.length}`);
        return response.results.map((page) => {
            const title = page.properties?.Title?.title?.[0]?.plain_text || 'Untitled';
            const slug = page.properties?.Slug?.rich_text?.[0]?.plain_text || page.id;
            const description = page.properties?.Description?.rich_text?.[0]?.plain_text || '';
            const date = page.properties?.Date?.date?.start || '';

            console.log(`Processed post - ID: ${page.id}, Title: ${title}, Slug: ${slug}, Description: ${description}, Date: ${date}`);

            return {
                id: page.id,
                slug,
                title,
                description,
                date,
            };
        });
    } catch (error) {
        console.error('Error querying Notion database', error);
        return [];
    }
}

export async function getNotionPage(pageId) {
    const cleanedPageId = pageId.replace(/-/g, ''); // Remove hyphens from the page ID

    try {
        console.log(`Fetching Notion page with cleaned ID: ${cleanedPageId}`);

        const page = await notionAPI.getPage(cleanedPageId);
        console.log(`Successfully fetched Notion page with ID: ${cleanedPageId}`);
        return page;
    } catch (error) {
        console.error(`Error fetching Notion page with cleaned ID: ${cleanedPageId}`, error);
        throw error;
    }
}
