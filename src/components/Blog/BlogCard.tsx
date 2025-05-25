import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/utils/types';

interface BlogCardProps {
    post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
    return (
        <div className="w-full md:w-1/2 p-4">
            <Link href={`/blog/${post.slug}`} passHref>
                <div
                    className="min-h-[250px] border-black border-2 p-3 rounded-md backdrop-blur-2xl bg-neutral-100 bg-opacity-70 transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] h-full flex flex-col cursor-pointer"
                >
                    <article className="relative flex flex-col justify-between h-full px-4">
                        <figure className="w-full border-black border-b-2">
                            <div>{post.date}</div>
                        </figure>
                        <div className="py-5 text-left flex-grow">
                            <h2 className="text-lg md:text-xl lg:text-2xl rounded end-auto mb-4">{post.title}</h2>
                            <p className="text-sm mb-2 line-clamp-4 p-2 pl-4 lg:text-lg rounded-md backdrop-blur-2xl bg-neutral-100/10 bg-opacity-70 ">
                                {post.description}
                            </p>
                        </div>
                    </article>
                </div>
            </Link>
        </div>
    );
}

export default BlogCard;
