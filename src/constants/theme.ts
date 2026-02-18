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
        primary: "bg-[#0f1b15]",
        secondary: "bg-[#182a22]"
    },
    text: {
        primary: "text-[#f2f5ef]",
        secondary: "text-[#9ca8a0]"
    }
}

export const twilightTheme = {
    colors: {
        primary: "bg-[#17131f]",
        secondary: "bg-[#241f30]"
    },
    text: {
        primary: "text-[#f3eefc]",
        secondary: "text-[#9e93b3]"
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
        name: "Twilight",
        theme: twilightTheme
    }
] 


export type Theme = typeof defaultTheme
export type ThemeColorKey = keyof Theme["colors"]