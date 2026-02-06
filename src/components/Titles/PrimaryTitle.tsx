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

    const sizeOptions = {
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl"
    }

    const marginOptions = {
        1: "m-1",
        2: "m-2",
        3: "m-3",
        4: "m-4",
        5: "m-5"
    }

    return(
        <div 
            className={`
                ${sizeOptions[size]}
                ${marginOptions[margin]}
            `}
        >
            {title}
        </div>
    )
}