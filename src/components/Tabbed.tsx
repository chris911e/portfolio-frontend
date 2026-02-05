import type { ReactNode } from "react"

interface TabProps {
    children: ReactNode
    rounded?: string
}

export default function Tabbed({ children, rounded = "lg" }: TabProps) {
    return(
        <div
            className={`
                bg-[#222222]
                p-2
                rounded-${rounded}
                border-[1px]
                border-gray-300/10
                hover:border-gray-300/20
            `}
        >
            {children}
        </div>
    )
}