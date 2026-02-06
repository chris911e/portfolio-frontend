interface CustomTitleProps {
    title: string
    size?: "sm" | "md" | "lg" | "xl"
    color?: string
}

export default function CustomTitle({
    title,
    size = "xl",
    color = "#909692"
}: CustomTitleProps){

    const sizeOptions = {
        "sm": "text-sm",
        "md": "text-md",
        "lg": "text-lg",
        "xl": "text-xl"
    }

    return(
        <div className={`${sizeOptions[size]} text-[${color}]`}>
            {title}
        </div>
    )
}