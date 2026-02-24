import Divider from "../components/Divider";
import ProjectCard from "../components/ProjectCard";
import Mac from "../components/Tabbed/Mac";
import PrimaryTitle from "../components/Titles/PrimaryTitle";

const projects = [
    {
        id: 1,
        name: "Home Infra",
        preview: "/gif/infra.gif",
        shortDescription: "Home CI/CD Infrastructure workflow for personal projects",
        tags: [
            "CI/CD", "FluxCD", "GitOps", "Kubernetes", "GitHub Actions"
        ],
        github: "https://github.com"
    },
    {
        id: 2,
        name: "Portfolio",
        preview: "/gif/portfolio.gif",
        shortDescription: "Fullstack portfolio site, fully integrated with my CI/CD workflow",
        tags: [
            "React.js", "TypeScript", "Vite", "Golang", "GitHub Actions"
        ],
        github: "https://github.com"
    },
]

export default function Projects() {
    return(
        <div>
            <Mac link="/">
                <div className="w-full">
                    <PrimaryTitle title="Projects" />
                    <Divider />
                    <div
                        className="
                            space-y-5 mt-5
                            md:grid grid-cols-2
                            grid-cols-1 gap-5
                            "
                        >
                        {
                            projects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    preview={project.preview}
                                    name={project.name}
                                    shortDescription={project.shortDescription}
                                    tags={project.tags}
                                    github={project.github}
                                />
                            ))
                        }
                    </div>
                </div>
            </Mac>
        </div>
    )
}