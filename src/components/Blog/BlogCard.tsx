import React, { useState } from 'react';
import { BlogPost } from './BlogData';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface BlogCardProps {
    post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mdxContent, setMdxContent] = useState<MDXRemoteSerializeResult | null>(null);

    const toggleModal = async () => {
        if (!isModalOpen && !mdxContent) {
            const content = await fetchMDXContent(post.slug);
            setMdxContent(content);
        }
        setIsModalOpen(!isModalOpen);
        document.body.style.overflow = isModalOpen ? '' : 'hidden';
    };

    const fetchMDXContent = async (slug: string) => {
        const res = await fetch(`/api/get-mdx-content?slug=${slug}`);
        if (!res.ok) {
            console.error('Failed to fetch MDX content');
            return null;
        }
        const { mdxSource } = await res.json();
        return mdxSource;
    };

    return (
        <div className="w-full md:w-1/2 p-4">
            <div
                onClick={toggleModal}
                className="min-h-[250px] border-black border-2 p-3 rounded-md backdrop-blur-2xl bg-neutral-100 bg-opacity-70 transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] h-full flex flex-col cursor-pointer"
            >
                <article className="relative flex flex-col justify-between h-full px-4">
                    <figure className="w-full border-black border-b-2">
                        <div>{post.publicationDate}</div>
                    </figure>
                    <div className="py-5 text-left flex-grow">
                        <h2 className="text-lg md:text-xl lg:text-2xl rounded end-auto mb-4">{post.title}</h2>
                        <p className="text-sm mb-2 line-clamp-4 p-2 pl-4 lg:text-lg rounded-md backdrop-blur-2xl bg-neutral-100/10 bg-opacity-70 ">
                            {post.Introduction}
                        </p>
                    </div>
                </article>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-30">
                    <div
                        className="relative bg-neutral-100 bg-opacity-70 backdrop-blur-2xl p-10 rounded-md border-2 border-black max-h-[80vh] max-w-3xl overflow-y-auto">
                        <button
                            onClick={toggleModal}
                            className="fixed top-1 right-1 overflow-visible z-50 bg-red-500 hover:text-light px-3 py-1 rounded text-black text-2xl">
                            X
                        </button>
                        <article className="px-4">
                            <figure className="w-full border-black border-b-2 mb-4">
                                <div>{post.publicationDate}</div>
                            </figure>
                            <h2 className="text-xl md:text-2xl font-bold mb-4">{post.title}</h2>
                            {mdxContent ? (
                                <div className="prose prose-lg p-2">
                                    <MDXRemote {...mdxContent} />
                                </div>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </article>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogCard;
