import Divider from "../components/Divider";
import ProjectCard from "../components/ProjectCard";
import Mac from "../components/Tabbed/Mac";
import PrimaryTitle from "../components/Titles/PrimaryTitle";
import { projects } from "../constants/locales/experience";

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
                                    status={project.status}
                                />
                            ))
                        }
                    </div>
                </div>
            </Mac>
        </div>
    )
}