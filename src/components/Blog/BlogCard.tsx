// BlogCard.tsx
import React, { useState } from 'react';
import { BlogPost } from './blogData'; // Ensure this path is correct

interface BlogCardProps {
    post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className="bg-softBlue w-1/2 p-4">
            <div className=" h-full border-black border-2 p-4 rounded-md bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_rgba(0,0,0,1)]">
                <article className="w-full h-full">
                    <figure className="w-full h-1/2 border-black border-b-2">
                        <div>
                            {post.publicationDate}
                        </div>
                    </figure>
                    <div className="px-6 py-5 text-left h-full">
                        <h1 className="text-[32px] mb-4">{post.title}</h1>
                        <p className="text-xs mb-4 line-clamp-4">
                            {post.Introduction}
                        </p>
                        <button onClick={toggleModal} className="font-bold">Read Post</button>
                    </div>
                </article>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="w-3/4 bg-white p-5 rounded-md border-2 border-black">
                        <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                        <div className="prose prose-lg p-4" dangerouslySetInnerHTML={{ __html: post.mainContent }} />
                        <button onClick={toggleModal} className="mt-4 bg-gray-300 px-4 py-2 rounded text-black">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogCard;
