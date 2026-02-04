import type { ReactNode } from "react"

interface TabProps {
    children: ReactNode
}

export default function Tabbed({ children }: TabProps) {
    return(
        <div
            className="
                bg-[#222222]
                p-2
                rounded-lg
                border-[1px]
                border-gray-300/10
                hover:border-gray-300/20
            "
        >
            {children}
        </div>
    )
}