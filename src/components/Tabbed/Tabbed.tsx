import type { ReactNode } from "react"
import { roundedOptions, paddingOptions, marginOptions } from "../../constants/tables"
import { useTheme } from "../../context/ThemeContext"

interface TabProps {
    children: ReactNode
    rounded?: "sm" | "md" | "lg" | "xl" | "full"
    padding?: 0 | 1 | 2 | 3 | 4 | 5
    margin?: 0 | 1 | 2 | 3 | 4 | 5
    backgroundColor?: "primaryColor" | "secondaryColor"
}

export default function Tabbed({
    children,
    rounded = "lg",
    padding = 4,
    margin = 0,
    backgroundColor = "secondaryColor"
}: TabProps) {
    const { theme } = useTheme()

    return(
        <div
            className={`
                border-[1px]
                border-gray-300/10
                hover:border-gray-300/20
                items-center
                ${paddingOptions[padding]}
                ${roundedOptions[rounded]}
                ${theme.colors[backgroundColor]}
                ${marginOptions[margin]}
            `}
        >
            {children}
        </div>
    )
}