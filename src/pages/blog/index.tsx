import { GetStaticProps } from 'next';
import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Blog from '@/components/Blog/Blog';
import Footer from '@/components/Footer/Footer';
import Navbar from "@/components/Navbar/Navbar";
import SiteHead from "@/components/SEO/Head/SiteHead";
import { siteConfig } from '@/components/SEO/SiteConfig';
import { themeClassNames } from '@/utils/themeClassNames';
import { applyVantaEffect } from '@/utils/vantaEffects';
import Birds from "@/components/Birds/Birds";
import { getAllBlogPosts } from '@/utils/notion';
import { BlogPost } from '@/utils/types';

interface BlogHomeProps {
    posts: BlogPost[];
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllBlogPosts(process.env.NOTION_DATABASE_ID);
    return {
        props: {
            posts,
        },
    };
};

const BlogHome = ({ posts }: BlogHomeProps) => {
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

    return (
        <div className={themeClass}>
            {theme === 'forest' && (
                <div className="fixed top-0 left-0 w-full h-full bg-forest-bg bg-cover bg-center"></div>
            )}
            <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full -z-10"></div>
            {theme === 'forest' && <Birds />}
            <SiteHead
                title={siteConfig.title}
                description={siteConfig.description}
                author={siteConfig.author}
                keywords={siteConfig.keywords}
                siteUrl={siteConfig.siteUrl}
                imageUrl={siteConfig.imageUrl}
                structuredData={siteConfig.structuredData}
            />
            <Navbar toggleChatModal={toggleChatModal} />

            <div className="relative z-10 pt-36 space-y-24 bg-none">
                <section id="blog" className={`w-full min-h-screen text-dark`}>
                    <Blog posts={posts} />
                </section>

                <section id="contact" className="w-full">
                    <Footer />
                </section>
            </div>
        </div>
    );
};

export default BlogHome;
