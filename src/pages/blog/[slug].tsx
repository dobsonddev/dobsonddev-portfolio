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

import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

// Dynamically load heavy stuff
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
    postDate: string;
    postSlug: string;
}

const CustomPageHeader: React.FC<any> = () => {
    // Return null or a custom header if we want
    return null
}

export default function BlogPost({ recordMap, postTitle, postDescription, postDate, postSlug }: BlogPostProps) {
    const [isChatModalOpen, setIsChatModalOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const vantaRef = useRef(null);
    let vantaEffect = useRef<{ destroy: () => void } | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Create article structured data
    const articleStructuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": postTitle,
        "description": postDescription || siteConfig.description,
        "datePublished": postDate,
        "dateModified": postDate,
        "author": {
            "@type": "Person",
            "name": siteConfig.author,
            "url": siteConfig.siteUrl
        },
        "publisher": {
            "@type": "Person",
            "name": siteConfig.author,
            "logo": {
                "@type": "ImageObject",
                "url": siteConfig.imageUrl
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteConfig.siteUrl}/blog/${postSlug}`
        },
        "image": siteConfig.imageUrl
    };

    useEffect(() => {
        // Add custom CSS to hide specific metadata
        const style = document.createElement('style')
        style.textContent = `
      .notion-collection-row-body .notion-collection-row-property {
        display: flex !important;
      }
      .notion-collection-row-body .notion-collection-row-property:nth-child(1),
      .notion-collection-row-body .notion-collection-row-property:nth-child(4) {
        display: none !important;
      }
    `
        document.head.append(style)

        // Cleanup func to remove the style when the component unmounts
        return () => {
            document.head.removeChild(style)
        }
    }, [])

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

    // Filter out metadata
    const filteredRecordMap = removeMetadata(recordMap);

    // Prevent hydration mismatch by not rendering theme-dependent content until mounted
    if (!mounted) {
        return null;
    }

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
                siteUrl={`${siteConfig.siteUrl}/blog/${postSlug}`}
                imageUrl={siteConfig.imageUrl}
                structuredData={articleStructuredData}
                isArticle={true}
                publishedTime={postDate}
                modifiedTime={postDate}
                breadcrumbs={[
                    { name: 'Home', url: siteConfig.siteUrl },
                    { name: 'Blog', url: `${siteConfig.siteUrl}/blog` },
                    { name: postTitle, url: `${siteConfig.siteUrl}/blog/${postSlug}` }
                ]}
            />
            <Navbar toggleChatModal={toggleChatModal} />

            <div className="relative z-10 pt-36 space-y-24">
                <section id="blog-post" className="w-full min-h-screen px-6">
                    <div className="max-w-6xl mx-auto rounded">
                        <NotionRenderer
                            recordMap={recordMap}
                            fullPage={true}
                            darkMode={theme === 'forest' || theme === 'vector'}
                            disableHeader={true}
                            showTableOfContents={false}
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

const removeMetadata = (recordMap: ExtendedRecordMap): ExtendedRecordMap => {
    const newRecordMap = JSON.parse(JSON.stringify(recordMap));

    if (newRecordMap.block) {
        Object.values(newRecordMap.block).forEach((block: any) => {
            if (block.value && block.value.properties) {
                // Remove specific properties entirely
                delete block.value.properties.TbC_; // Slug
                delete block.value.properties['V~XC']; // Description
                delete block.value.properties.olvG; // Date
                delete block.value.properties['sS@j']; // Published
            }
            // Remove the entire content array if it exists
            if (block.value && block.value.content && block.value.content.length > 0) {
                // Keep only the title block (usually the first one) and remove the rest
                block.value.content = [block.value.content[0]];
            }
        });
    }

    return newRecordMap;
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
                postDate: post.date || new Date().toISOString(),
                postSlug: post.slug,
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
