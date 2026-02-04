interface ProfileProps {
    url: string
}

export default function Profile({ url } : ProfileProps) {
    return(
        <div>
            <img
                src={url}
                alt="Profile"
                className="rounded-full"
                width={100}
                height={100}
            />
        </div>
    )   
}