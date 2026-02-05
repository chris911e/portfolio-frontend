interface PrimaryTitleProps {
    title: string
}

export default function PrimaryTitle({ title }: PrimaryTitleProps){
    return(
        <div className="text-4xl m-5">
            {title}
        </div>
    )
}