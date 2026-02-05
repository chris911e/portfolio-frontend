interface DotProps {
    color: string
    size?: number
}

export default function Dot({ color, size = 8 }: DotProps) {
    return (
        <span className="relative inline-flex">
            <span
                className="
                    animate-ping
                    absolute
                    inline-flex
                    h-full
                    w-full
                    rounded-full
                    opacity-75
                "
                style={{
                    backgroundColor: color
                }}
            ></span>
            <span
                className="relative inline-flex rounded-full"
                style={{
                    backgroundColor: color,
                    width: `${size}px`,
                    height: `${size}px`
                }}
            ></span>
        </span>
    );
}
