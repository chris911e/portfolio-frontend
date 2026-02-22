import { defaultTheme } from "./theme"

export const paddingOptions = {
    0: "",
    1: "p-1",
    2: "p-2",
    3: "p-3",
    4: "p-4",
    5: "p-5"
}

export const marginOptions = {
    0: "",
    1: "m-1",
    2: "m-2",
    3: "m-3",
    4: "m-4",
    5: "m-5"
}

export const roundedOptions = {
    "sm": "rounded-sm",
    "md": "rounded-md",
    "lg": "rounded-lg",
    "xl": "rounded-xl",
    "full": "rounded-full"
}

export const textSizeOptions = {
    "sm": "md:text-sm text-xs",
    "md": "md:text-md text-sm",
    "lg": "md:text-lg text-md",
    "xl": "md:text-xl text-lg",
    "2xl": "md:text-2xl text-xl",
    "3xl": "md:text-3xl text-2xl",
    "4xl": "md:text-4xl text-3xl",
    "5xl": "md:text-5xl text-4xl"
}

export const buttonColorOptions = {
    red: {
        bg: "bg-red-500/70",
        shadow: "shadow-red-500/40",
        hoverShadow: "hover:shadow-red-500/90"
    },
    yellow: {
        bg: "bg-yellow-400/70",
        shadow: "shadow-yellow-400/40",
        hoverShadow: "hover:shadow-yellow-400/90"
    },
    green: {
        bg: "bg-green-500/70",
        shadow: "shadow-green-500/40",
        hoverShadow: "hover:shadow-green-500/90"
    }
}

export const colorOptions = defaultTheme.colors