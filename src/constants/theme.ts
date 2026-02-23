export const defaultTheme = {
    colors: {
        primary: "bg-[#141414]",
        secondary: "bg-[#222222]"
    },
    text: {
        primary: "text-[#f3ede4]",
        secondary: "text-[#87827B]"
    },
    chat: {
        cmd: "text-green-400/50",
        caret: "caret-green-400/50"
    }
}

export const forestTheme = {
    colors: {
        primary: "bg-[#0b1611]",
        secondary: "bg-[#13231c]"
    },
    text: {
        primary: "text-[#ecf2ed]",
        secondary: "text-[#8e9d94]"
    },
    chat: {
        cmd: "text-green-400/50",
        caret: "caret-green-400/50"
    }
}

export const midnightTheme = {
    colors: {
        primary: "bg-[#0f172a]",
        secondary: "bg-[#1e293b]"
    },
    text: {
        primary: "text-[#e2e8f0]",
        secondary: "text-[#94a3b8]"
    },
    chat: {
        cmd: "text-blue-300/60",
        caret: "caret-blue-300/70"
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
        name: "Midnight",
        theme: midnightTheme
    }
] 

export function getThemeByName(themeName: string | null) {
    if(!themeName) {
        return defaultTheme
    }

    return themeOptions.find((option) => option.name === themeName)?.theme ?? defaultTheme
}

export function getThemeName(theme: Theme) {
    return themeOptions.find((option) => option.theme.colors.primary === theme.colors.primary)?.name ?? themeOptions[0].name
}


export type Theme = typeof defaultTheme
export type ThemeColorKey = keyof Theme["colors"]