import BlogCard from "@/components/Blog/BlogCard";

function Blog() {
    return (
        <div className="min-h-screen bg-black text-black flex items-center justify-center">
            <h2 className="text-3xl font-bold">Blog</h2>
            <BlogCard />
        </div>
    );
}

export default Blog;