import type { ReactNode } from "react"
import Tabbed from "./Tabbed"
import { colorOptions } from "../../constants/tables"

interface TagProps {
    children: ReactNode
    textColor?: "primaryText" | "secondaryText"
}

export default function Tag({
    children,
    textColor = "secondaryText"
}: TagProps) {
    return(
        <Tabbed rounded="full" spacing={1}>
            <div
                className={`
                    flex
                    items-center
                    gap-2
                    text-xs
                    ${colorOptions[textColor]}
                `}
            >
                {children}
            </div>
        </Tabbed>
    )
}