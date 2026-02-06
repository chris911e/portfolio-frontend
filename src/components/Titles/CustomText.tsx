import { colorOptions, textSizeOptions } from "../../constants/tables"

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

    return(
        <div className={`${textSizeOptions[size]} ${colorOptions[color]}`}>
            {title}
        </div>
    )
}