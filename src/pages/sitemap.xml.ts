import { GetServerSideProps } from 'next';
import { getAllBlogPosts } from '@/utils/notion';

function generateSiteMap(posts: any[]) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.dobsond.dev/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.dobsond.dev/blog</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
    ${posts
        .map(({ slug, date }) => {
            return `
    <url>
        <loc>https://www.dobsond.dev/blog/${slug}</loc>
        <lastmod>${date || new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>`;
        })
        .join('')}
</urlset>`;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    try {
        const posts = await getAllBlogPosts(process.env.NOTION_DATABASE_ID);

        const sitemap = generateSiteMap(posts);

        res.setHeader('Content-Type', 'text/xml');
        res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=59');
        res.write(sitemap);
        res.end();

        return {
            props: {},
        };
    } catch (error) {
        console.error('Error generating sitemap:', error);
        res.statusCode = 500;
        res.end();
        return {
            props: {},
        };
    }
};

export default SiteMap;
