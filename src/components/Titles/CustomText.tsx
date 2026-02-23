import { textSizeOptions } from "../../constants/tables"
import { useTheme } from "../../context/ThemeContext"

interface CustomTextProps {
    title: string
    shortTitle?: string
    size?: "sm" | "md" | "lg" | "xl"
    textColor?: "primary" | "secondary"
}

export default function CustomText({
    title,
    shortTitle,
    size = "xl",
    textColor = "primary"
}: CustomTextProps){
    const { theme } = useTheme()

    return(
        <div className={`${textSizeOptions[size]} ${theme.text[textColor]}`}>
            {
                shortTitle ? (
                    <>
                        <span className="hidden md:inline">{title}</span>
                        <span className="md:hidden">{shortTitle}</span>
                    </>
                ) : (
                    <>
                        <span>{title}</span>
                    </>
                )
            }
        </div>
    )
}