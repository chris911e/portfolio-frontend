import { textSizeOptions } from "../../constants/tables"
import { useTheme } from "../../context/ThemeContext"

interface CustomTextProps {
    title: string
    size?: "sm" | "md" | "lg" | "xl"
    color?: "primaryText" | "secondaryText"
}

export default function CustomText({
    title,
    size = "xl",
    color = "primaryText"
}: CustomTextProps){
    const { theme } = useTheme()

    return(
        <div className={`${textSizeOptions[size]} ${theme.colors[color]}`}>
            {title}
        </div>
    )
}