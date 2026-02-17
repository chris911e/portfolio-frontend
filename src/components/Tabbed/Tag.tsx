import type { ReactNode } from "react"
import Tabbed from "./Tabbed"
import { useTheme } from "../../context/ThemeContext"

interface TagProps {
    children: ReactNode
    textColor?: "primary" | "secondary"
}

export default function Tag({
    children,
    textColor = "secondary"
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
                    ${theme.text[textColor]}
                `}
            >
                {children}
            </div>
        </Tabbed>
    )
}