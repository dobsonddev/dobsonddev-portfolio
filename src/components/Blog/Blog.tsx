function Blog() {
    return (
        <div className="min-h-screen bg-softBlue flex items-center justify-center">
            <h2 className="text-2xl font-bold">Blog</h2>
            {/* Your content here */}

            <div className="w-80 h-full border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
                <a href="" className="block cursor-pointer">
                    <article className="w-full h-full">
                        <figure className="w-full h-1/2 border-black border-b-2">
                            <img
                                src="https://neo-brutalism-ui-library.vercel.app/assets/neo-brutalism-image3-6c6a875b.jpg"
                                alt="thumbnail"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="px-6 py-5 text-left h-full">
                            <p className="text-base mb-4">May 15th, 2023</p>
                            <h1 className="text-[32px] mb-4">Neo Brutallism</h1>
                            <p className="text-xs mb-4 line-clamp-4">
                                Neobrutalist test
                            </p>
                            <strong>Read More</strong>
                        </div>
                    </article>
                </a>
            </div>

        </div>

    );
}

export default Blog;
