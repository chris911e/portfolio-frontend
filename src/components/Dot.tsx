import { dotColors } from "../constants/tables";

interface DotProps {
    color: "active" | "inactive" | "archived"
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
                    backgroundColor: `${dotColors[color]}`
                }}
            ></span>
            <span
                className="relative inline-flex rounded-full"
                style={{
                    backgroundColor: `${dotColors[color]}`,
                    width: `${size}px`,
                    height: `${size}px`
                }}
            ></span>
        </span>
    );
}
