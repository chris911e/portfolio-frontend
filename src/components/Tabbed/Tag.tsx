import type { ReactNode } from "react"
import Tabbed from "./Tabbed"

interface TagProps {
    children: ReactNode
    textColor?: string
}

export default function Tag({ children, textColor = "#909692" }: TagProps) {
    return(
        <Tabbed rounded="full" spacing={1}>
            <div
                className={`
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-[${textColor}]
                `}
            >
                {children}
            </div>
        </Tabbed>
    )
}