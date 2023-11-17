import BlogCard from "@/components/Blog/BlogCard";
import ProjectCard from "@/components/Projects/ProjectCard";

function Projects() {
    return (
        <div className="min-h-screen bg-black text-black">
            <div className="justify-items-center">
                <h2 className="text-3xl text-white font-bold">Projects</h2>
            </div>
            <ProjectCard />
        </div>
    );
}

export default Projects;