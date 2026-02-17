export const defaultTheme = {
    colors: {
        primary: "bg-[#222222]",
        secondary: "bg-[#141414]"
    },
    text: {
        primary: "text-[#f3ede4]",
        secondary: "text-[#87827B]"
    },
}

export type Theme = typeof defaultTheme
export type ThemeColorKey = keyof Theme["colors"]
