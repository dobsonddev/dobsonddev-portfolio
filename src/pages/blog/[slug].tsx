// src/pages/blog/[slug].tsx
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRef, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { NotionRenderer } from 'react-notion-x';
import { getNotionPage, getAllBlogPosts } from '@/utils/notion';
import { ExtendedRecordMap } from 'notion-types';
import Footer from '@/components/Footer/Footer';
import Navbar from "@/components/Navbar/Navbar";
import SiteHead from "@/components/SEO/Head/SiteHead";
import { siteConfig } from '@/components/SEO/SiteConfig';
import { themeClassNames } from '@/utils/themeClassNames';
import { applyVantaEffect } from '@/utils/vantaEffects';
import Birds from "@/components/Birds/Birds";
import dynamic from 'next/dynamic';

// Importing styles
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

// Dynamically load heavy components
const Code = dynamic(() =>
    import('react-notion-x/build/third-party/code').then((m) => m.Code)
);
const Collection = dynamic(() =>
    import('react-notion-x/build/third-party/collection').then((m) => m.Collection)
);
const Equation = dynamic(() =>
    import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
);
const Pdf = dynamic(
    () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
    { ssr: false }
);
const Modal = dynamic(
    () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
    { ssr: false }
);

interface BlogPostProps {
    recordMap: ExtendedRecordMap;
    postTitle: string;
    postDescription: string;
}

export default function BlogPost({ recordMap, postTitle, postDescription }: BlogPostProps) {
    const [isChatModalOpen, setIsChatModalOpen] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const vantaRef = useRef(null);
    let vantaEffect = useRef<{ destroy: () => void } | null>(null);

    useEffect(() => {
        if (resolvedTheme) {
            setTheme(resolvedTheme);
        } else {
            setTheme('forest');
        }
    }, [resolvedTheme, setTheme]);

    useEffect(() => {
        // @ts-ignore
        return applyVantaEffect(theme, vantaRef, vantaEffect);
    }, [theme]);

    const toggleChatModal = () => {
        setIsChatModalOpen(!isChatModalOpen);
    };

    const themeClass = theme ? themeClassNames[theme] : themeClassNames['light'];

    // Filter out slug and published fields
    const filteredRecordMap = filterRecordMap(recordMap);

    return (
        <div className={themeClass}>
            {theme === 'forest' && (
                <div className="fixed top-0 left-0 w-full h-full bg-forest-bg bg-cover bg-center"></div>
            )}
            <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full -z-10"></div>
            {theme === 'forest' && <Birds />}
            <SiteHead
                title={`${postTitle} | ${siteConfig.title}`}
                description={postDescription || siteConfig.description}
                author={siteConfig.author}
                keywords={`${postTitle}, ${siteConfig.keywords}`}
                siteUrl={`${siteConfig.siteUrl}/blog/${postTitle}`}
                imageUrl={siteConfig.imageUrl}
                structuredData={siteConfig.structuredData}
            />
            <Navbar toggleChatModal={toggleChatModal} />

            <div className="relative z-10 pt-36 space-y-24">
                <section id="blog-post" className="w-full min-h-screen px-6">
                    <div className="max-w-4xl mx-auto rounded p-12">
                        <NotionRenderer
                            className="text-green-500"
                            fullPage={true}
                            isShowingSearch={true}
                            recordMap={filteredRecordMap}
                            darkMode={theme === 'forest' || theme === 'dots'}
                            showTableOfContents={true}
                            minTableOfContentsItems={0}
                            showCollectionViewDropdown={false}
                            components={{
                                Code,
                                Collection,
                                Equation,
                                Modal,
                                Pdf,
                            }}
                        />
                    </div>
                </section>
                <section id="contact" className="w-full">
                    <Footer/>
                </section>
            </div>
        </div>
    );
}

const filterRecordMap = (recordMap: ExtendedRecordMap): ExtendedRecordMap => {
    const filteredRecordMap: ExtendedRecordMap = {
        block: {},
        collection: {},
        collection_view: {},
        notion_user: {},
        collection_query: {},
        signed_urls: {}
    };

    // Function to filter out specific fields
    const filterObjectFields = (obj: any) => {
        for (const key in obj) {
            if (obj[key]?.properties) {
                delete obj[key].properties['slug'];
                delete obj[key].properties['published'];
            }
        }
    };

    // Filter blocks
    Object.keys(recordMap.block).forEach((blockId) => {
        filteredRecordMap.block[blockId] = recordMap.block[blockId];
    });

    // Filter collections
    Object.keys(recordMap.collection).forEach((collectionId) => {
        filteredRecordMap.collection[collectionId] = recordMap.collection[collectionId];
    });

    // Filter collection views
    Object.keys(recordMap.collection_view).forEach((viewId) => {
        filteredRecordMap.collection_view[viewId] = recordMap.collection_view[viewId];
    });

    filterObjectFields(filteredRecordMap.block);
    filterObjectFields(filteredRecordMap.collection_view);

    return filteredRecordMap;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string;

    try {
        const posts = await getAllBlogPosts(process.env.NOTION_DATABASE_ID);
        const post = posts.find((p) => p.slug === slug);

        if (!post) {
            return { notFound: true };
        }

        const recordMap = await getNotionPage(post.id);

        return {
            props: {
                recordMap,
                postTitle: post.title,
                postDescription: post.description,
            },
            revalidate: 10,
        };
    } catch (error) {
        return { notFound: true };
    }
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllBlogPosts(process.env.NOTION_DATABASE_ID);

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }));

    return {
        paths,
        fallback: 'blocking',
    };
};
