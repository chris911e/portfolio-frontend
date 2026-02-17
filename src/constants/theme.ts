export const defaultTheme = {
    colors: {
        primary: "bg-[#141414]",
        secondary: "bg-[#222222]"
    },
    text: {
        primary: "text-white",
        secondary: "text-[#909692]"
    }
}

export type Theme = typeof defaultTheme
export type ThemeColorKey = keyof Theme["colors"]
