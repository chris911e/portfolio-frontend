interface CustomTitleProps {
    title: string
    size?: string
    color?: string
}

export default function CustomTitle({
    title,
    size = "xl",
    color = "#909692"
}: CustomTitleProps){
    return(
        <div className={`text-${size} text-[${color}]`}>
            {title}
        </div>
    )
}