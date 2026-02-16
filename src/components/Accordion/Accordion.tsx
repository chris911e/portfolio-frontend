import type { ReactNode } from "react";
import { useState } from "react";
import CustomText from "../Titles/CustomText";
import Tabbed from "../Tabbed/Tabbed"
import Divider from "../Divider";

interface AccordionProps {
    children: ReactNode
    title: string
    underTitle?: string
    logo: string
    description: string
}

export default function Accordion({
    children,
    logo,
    title,
    description,
    underTitle
}: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="hover:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            <Tabbed>
                <div>
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
                                md:col-span-2
                                col-span-3
                            "
                        >
                            <img
                                src={`/experiences/${logo}`}
                                alt="?"
                                height={50}
                                width={50}
                            />
                            <div>
                                <CustomText
                                    title={title}
                                />
                                {
                                    underTitle && (
                                        <CustomText
                                            color="secondaryText"
                                            title={underTitle}
                                            size="sm"
                                        />
                                    )
                                }
                            </div>
                        </div>
                        <div
                            className="
                                md:col-span-2
                                flex
                                md:justify-between
                                justify-end
                                items-center
                            "
                        >
                            <div className="text-[#909692] w-full hidden md:block">
                                {description}
                            </div>
                            <div className="text-right">
                                <img
                                    src="/icons/arrow-down.svg"
                                    alt="?"
                                    height={50}
                                    width={50}
                                    className={`
                                        transition-transform 
                                        duration-300 
                                        ease-in-out
                                        ${isOpen ? 
                                            'rotate-180' : 
                                            'rotate-0'
                                        }
                                    `}
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className={`
                            grid
                            transition-all
                            duration-300
                            ease-in-out
                            overflow-hidden
                            ${isOpen ?
                                'grid-rows-[1fr] opacity-100' : 
                                'grid-rows-[0fr] opacity-0'
                            }
                        `}
                    >
                        <div className="overflow-hidden">
                            <div className="p-3 pt-0">
                                <Divider />
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </Tabbed>
        </div>
    )
}