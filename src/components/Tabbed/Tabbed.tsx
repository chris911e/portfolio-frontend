import type { ReactNode } from "react"
import { roundedOptions, paddingOptions, colorOptions } from "../../constants/tables"

interface TabProps {
    children: ReactNode
    rounded?: "sm" | "md" | "lg" | "xl" | "full"
    spacing?: 1 | 2 | 3 | 4 | 5
    backgroundColor?: "primaryColor" | "secondaryColor"
}

export default function Tabbed({
    children,
    rounded = "lg",
    spacing = 4,
    backgroundColor = "secondaryColor"
}: TabProps) {

    return(
        <div
            className={`]
                border-[1px]
                border-gray-300/10
                hover:border-gray-300/20
                items-center
                ${paddingOptions[spacing]}
                ${roundedOptions[rounded]}
                ${colorOptions[backgroundColor]}
            `}
        >
            {children}
        </div>
    )
}