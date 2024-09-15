import React from 'react';
import BlogCard from './BlogCard';
import { BlogPost } from '@/utils/types';

interface BlogProps {
    posts: BlogPost[];
}

function Blog({ posts }: BlogProps) {
    return (
        <div className="flex flex-col items-center px-6">
            <h2 className="bg-light text-dark rounded p-4 text-5xl lg:text-7xl font-bold underline mb-6">Blog</h2>
            <div className="w-full flex flex-wrap justify-center text-black">
                {posts && posts.length > 0 ? (
                    posts.map((post, index) => (
                        <BlogCard key={index} post={post} />
                    ))
                ) : (
                    <p>No blog posts available.</p>
                )}
            </div>
        </div>
    );
}

export default Blog;
