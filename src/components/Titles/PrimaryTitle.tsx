import { marginOptions, textSizeOptions } from "../../constants/tables"

interface PrimaryTitleProps {
    title: string
    size?: "2xl" | "3xl" | "4xl" | "5xl"
    margin?: 1 | 2 | 3 | 4 | 5
}

export default function PrimaryTitle({
    title,
    size = "4xl",
    margin = 5
}: PrimaryTitleProps){
    return(
        <div 
            className={`
                ${textSizeOptions[size]}
                ${marginOptions[margin]}
            `}
        >
            {title}
        </div>
    )
}