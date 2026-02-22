interface WindowButtonProps {
    color: "red" | "yellow" | "green"
    href: string
}

const colorStyles = {
    red: {
        bg: "bg-red-500/80",
        shadow: "shadow-red-500/40",
        hoverShadow: "hover:shadow-red-500/90"
    },
    yellow: {
        bg: "bg-yellow-400/80",
        shadow: "shadow-yellow-400/40",
        hoverShadow: "hover:shadow-yellow-400/90"
    },
    green: {
        bg: "bg-green-500/80",
        shadow: "shadow-green-500/40",
        hoverShadow: "hover:shadow-green-500/90"
    }
} as const

export default function WindowButton({ color, href }: WindowButtonProps) {
    const style = colorStyles[color]

    return(
        <button
            type="button"
            aria-label={`Go to ${href}`}
            className={`
                size-2.5
                rounded-full
                shadow-[0_0_4px]
                transition-shadow
                duration-150
                hover:cursor-pointer
                hover:shadow-[0_0_16px]
                ${style.bg}
                ${style.shadow}
                ${style.hoverShadow}
            `}
            onClick={() => window.open(href, "_self")}
        />
    )
}
