import Dot from "./Dot";
import Tabbed from "./Tabbed/Tabbed";
import Tag from "./Tabbed/Tag";
import CustomText from "./Titles/CustomText";

interface ProjectCardProps {
    preview: string
    name: string,
    shortDescription: string
    tags: readonly string[]
    github: string
    status: "active" | "inactive" | "archived"
}

export default function ProjectCard({
    preview,
    name,
    shortDescription,
    tags,
    github,
    status
}: ProjectCardProps) {
    return (
        <div>
            <Tabbed backgroundColor="primary" rounded="lg">
                <div className="h-fit flex flex-col gap-4">
                    <div className="fixed p-1">
                        <Tag>
                            <Dot color={status} />
                        </Tag>
                    </div>
                    <img
                        src={preview}
                        className="
                            w-full h-48
                            object-cover 
                            object-top
                            rounded-lg
                            border
                            border-gray-300/10
                        "
                    />
                    <div>
                        <CustomText
                            title={name}
                            size="lg"
                        />
                        <CustomText
                            title={shortDescription}
                            size="md"
                            textColor="secondary"
                        />
                    </div>
                    <div className="grid grid-cols-4">
                        <div className="flex flex-wrap gap-2 col-span-3 items-center">
                            {
                                tags.map((tag, index) => (
                                    <Tag key={index}>
                                        {tag}
                                    </Tag>
                                ))
                            }
                        </div>
                        <div className="flex items-center justify-center">
                            <img
                                height={35}
                                width={35}
                                src="/icons/Github.svg"
                                onClick={() => window.open(github, "_blank")}
                                className="hover:cursor-pointer hover:scale-115 duration-250"
                            />
                        </div>
                    </div>
                </div>
            </Tabbed>
        </div>
    )
}