import type { ReactNode } from "react"

interface TabProps {
    children: ReactNode
    rounded?: string
    spacing?: number
}

export default function Tabbed({ children, rounded = "lg", spacing = 4 }: TabProps) {
    return(
        <div
            className={`
                bg-[#222222]
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