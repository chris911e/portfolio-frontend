import type { ReactNode } from "react"

interface TabProps {
    children: ReactNode
    rounded?: "sm" | "md" | "lg" | "xl" | "full"
    spacing?: 1 | 2 | 3 | 4 | 5
    backgroundColor?: "#222222"
}

export default function Tabbed({
    children,
    rounded = "lg",
    spacing = 4,
    backgroundColor = "#222222"
}: TabProps) {
    const spacingOptions = {
        1: "p-1",
        2: "p-2",
        3: "p-3",
        4: "p-4",
        5: "p-5"
    }

    const roundedOptions = {
        "sm": "rounded-sm",
        "md": "rounded-md",
        "lg": "rounded-lg",
        "xl": "rounded-xl",
        "full": "rounded-full"
    }

    const backgroundOptions = {
        "#222222": "bg-[#222222]"
    }

    return(
        <div
            className={`]
                border-[1px]
                border-gray-300/10
                hover:border-gray-300/20
                items-center
                ${spacingOptions[spacing]}
                ${roundedOptions[rounded]}
                ${backgroundOptions[backgroundColor]}
            `}
        >
            {children}
        </div>
    )
}