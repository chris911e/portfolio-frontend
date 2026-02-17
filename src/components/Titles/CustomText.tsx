import { textSizeOptions } from "../../constants/tables"
import { useTheme } from "../../context/ThemeContext"

interface CustomTextProps {
    title: string
    size?: "sm" | "md" | "lg" | "xl"
    textColor?: "primary" | "secondary"
}

export default function CustomText({
    title,
    size = "xl",
    textColor = "primary"
}: CustomTextProps){
    const { theme } = useTheme()

    return(
        <div className={`${textSizeOptions[size]} ${theme.text[textColor]}`}>
            {title}
        </div>
    )
}