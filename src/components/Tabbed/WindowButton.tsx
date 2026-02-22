import { buttonColorOptions } from "../../constants/tables"

interface WindowButtonProps {
    color: "red" | "yellow" | "green"
    href: string
}

export default function WindowButton({ color, href }: WindowButtonProps) {
    const style = buttonColorOptions[color]

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
