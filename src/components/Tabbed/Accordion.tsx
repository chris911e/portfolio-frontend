import CustomTitle from "../Titles/CustomTitle";
import Tabbed from "./Tabbed";

interface AccordionProps {
    title: string
    underTitle?: string
    logo: string
    description: string
}

export default function Accordion({
    logo,
    title,
    description,
    underTitle
}: AccordionProps) {
    return(
        <div className="hover:cursor-pointer">
            <Tabbed>
                <div
                    className="
                        flex
                        items-center
                        gap-5
                        grid
                        grid-cols-4
                        p-3
                    "
                >
                    <div
                        className="
                            flex
                            items-center
                            gap-5
                            col-span-2
                        "
                    >
                        <img
                            src={`/experiences/${logo}`}
                            alt="?"
                            height={50}
                            width={50}
                        />
                        <div>
                            <CustomTitle
                                color="#ffffff"
                                title={title}
                            />
                            {
                                underTitle && (
                                    <CustomTitle
                                        title={underTitle}
                                        size="sm"
                                    />
                                )
                            }
                        </div>
                    </div>
                    <div className="text-[#909692]">
                        {description}
                    </div>
                    <div className="text-right">
                        d
                    </div>
                </div>
            </Tabbed>
        </div>
    )
}