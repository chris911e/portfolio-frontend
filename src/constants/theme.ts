export const defaultTheme = {
    colors: {
        primary: "bg-[#171414]",
        secondary: "bg-[#2E2C2C]"
    },
    text: {
        primary: "text-[#f3ede4]",
        secondary: "text-[#87827B]"
    },
}

export type Theme = typeof defaultTheme
export type ThemeColorKey = keyof Theme["colors"]
