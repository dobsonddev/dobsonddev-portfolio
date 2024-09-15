const { NotionAPI } = require('notion-client');

const notion = new NotionAPI();

async function fetchPageContent(pageId) {
    try {
        const recordMap = await notion.getPage(pageId);
        console.log(JSON.stringify(recordMap, null, 2));
    } catch (error) {
        console.error('Error fetching page:', error);
    }
}

// Replace this with your page ID
const pageId = 'e0560c0942f143d0bd143e610277a50b';
fetchPageContent(pageId);
