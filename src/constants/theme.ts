export const defaultTheme = {
    app: {
        backgroundColor: "bg-[#141414]",
        textColor: "text-white"
    },
    colors: {
        primaryText: "text-white",
        secondaryText: "text-[#909692]",
        primaryColor: "bg-[#141414]",
        secondaryColor: "bg-[#222222]"
    }
}

export type Theme = typeof defaultTheme
export type ThemeColorKey = keyof Theme["colors"]
