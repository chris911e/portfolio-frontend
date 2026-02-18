export const defaultTheme = {
    colors: {
        primary: "bg-[#141414]",
        secondary: "bg-[#222222]"
    },
    text: {
        primary: "text-[#f3ede4]",
        secondary: "text-[#87827B]"
    },
}

export const forestTheme = {
    colors: {
        primary: "bg-[#0b1611]",
        secondary: "bg-[#13231c]"
    },
    text: {
        primary: "text-[#ecf2ed]",
        secondary: "text-[#8e9d94]"
    }
}

export const lightTheme = {
    colors: {
        primary: "bg-[#ddd7cc]",
        secondary: "bg-[#d1c9bc]"
    },
    text: {
        primary: "text-[#1f1f1f]",
        secondary: "text-[#5f5951]"
    }
}

export const themeOptions = [
    {
        name: "Dark",
        theme: defaultTheme
    },
    {
        name: "Forest",
        theme: forestTheme
    },
    {
        name: "Light",
        theme: lightTheme
    }
] 


export type Theme = typeof defaultTheme
export type ThemeColorKey = keyof Theme["colors"]