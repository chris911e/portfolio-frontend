interface CustomTextProps {
    title: string
    size?: "sm" | "md" | "lg" | "xl"
    color?: "primary" | "secondary"
}

export default function CustomText({
    title,
    size = "xl",
    color = "primary"
}: CustomTextProps){

    const sizeOptions = {
        "sm": "text-sm",
        "md": "text-md",
        "lg": "text-lg",
        "xl": "text-xl"
    }

    const colorOptions = {
        "primary": "text-white",
        "secondary": "text-[#909692]"
    }

    return(
        <div className={`${sizeOptions[size]} ${colorOptions[color]}`}>
            {title}
        </div>
    )
}