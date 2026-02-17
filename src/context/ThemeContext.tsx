import { createContext, useContext, useMemo, useState, type ReactNode } from "react"
import { defaultTheme, type Theme } from "../constants/theme"

interface ThemeContextValue {
    theme: Theme
    setTheme: (nextTheme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

interface ThemeProviderProps {
    children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

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
