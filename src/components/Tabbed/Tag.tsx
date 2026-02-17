import type { ReactNode } from "react"
import Tabbed from "./Tabbed"
import { useTheme } from "../../context/ThemeContext"

interface TagProps {
    children: ReactNode
    textColor?: "primaryText" | "secondaryText"
}

export default function Tag({
    children,
    textColor = "secondaryText"
}: TagProps) {
    const { theme } = useTheme()

    return(
        <Tabbed rounded="full" padding={1}>
            <div
                className={`
                    flex
                    items-center
                    gap-2
                    text-xs
                    ${theme.colors[textColor]}
                `}
            >
                {children}
            </div>
        </Tabbed>
    )
}