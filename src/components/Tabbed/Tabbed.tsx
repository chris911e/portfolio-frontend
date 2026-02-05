import type { ReactNode } from "react"

interface TabProps {
    children: ReactNode
    rounded?: string
    spacing?: number
    backgroundColor?: string
}

export default function Tabbed({
    children,
    rounded = "lg",
    spacing = 4,
    backgroundColor = "#222222"
}: TabProps) {
    return(
        <div
            className={`
                bg-[${backgroundColor}]
                rounded-${rounded}
                border-[1px]
                border-gray-300/10
                hover:border-gray-300/20
                items-center
                p-${spacing}
            `}
        >
            {children}
        </div>
    )
}