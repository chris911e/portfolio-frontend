import type { ReactNode } from "react"

interface ActionProps {
    link: boolean
    icon: string
    value: string
    children: ReactNode
}

export default function Action({ children, value, icon, link }: ActionProps) {
    return(
        <div
            className="
                flex
                gap-4
                p-3
                m-2
                rounded-lg
                border-[1px]
                border-gray-300/5
                hover:border-gray-300/15
                hover:bg-gray-300/15
                hover:cursor-pointer
            "
        >
            <img
                src={icon}
                alt="?"
                className=""
                height={25}
                width={25}
            />
            {children}
        </div>
    )
}