import type { ReactNode } from "react"

interface TabProps {
    children: ReactNode
}

export default function Tab({ children }: TabProps) {
    return(
        <div>
            {children}
        </div>
    )
}