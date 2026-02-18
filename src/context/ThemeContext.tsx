import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { getThemeByName, getThemeName, type Theme } from "../constants/theme"

const THEME_STORAGE_KEY = "portfolio-theme"

interface ThemeContextValue {
    theme: Theme
    setTheme: (nextTheme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

interface ThemeProviderProps {
    children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(() => {
        const storedThemeName = localStorage.getItem(THEME_STORAGE_KEY)

        return getThemeByName(storedThemeName)
    })

    useEffect(() => {
        localStorage.setItem(THEME_STORAGE_KEY, getThemeName(theme))
    }, [theme])

    const contextValue = useMemo(() => ({
            theme,
            setTheme
        }), [theme]
    )

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    const context = useContext(ThemeContext)

    if(!context) {
        throw new Error("useTheme must be used within ThemeProvider")
    }

    return context
}
