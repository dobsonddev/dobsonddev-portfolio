// Blog.tsx
import React from 'react';
import BlogCard from './BlogCard';
import blogData from './BlogData';

function Blog() {
    return (
        <div className="flex flex-col items-center text-black border-t-8 p-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold underline mb-6">Blog</h2>
            <div className="w-full flex flex-wrap justify-center">
                {blogData.map((post, index) => (
                    <BlogCard  key={index} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Blog;
