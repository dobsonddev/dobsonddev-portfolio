// Blog.tsx
import React from 'react';
import BlogCard from './BlogCard';
import blogData from './blogData';

function Blog() {
    return (
        <div className="flex flex-col items-center bg-custom-orange text-black border-t-8 p-4">
            <h2 className="text-5xl text-light font-bold underline mb-4">Blog</h2>
            {blogData.map((post, index) => (
                <BlogCard key={index} post={post} />
            ))}
        </div>
    );
}

export default Blog;
