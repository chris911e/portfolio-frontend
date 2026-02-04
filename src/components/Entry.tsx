import type { ReactNode } from "react"

interface EntryProps {
    link: boolean
    copy: boolean
    children: ReactNode
}

export default function Entry({ children, link, copy }: EntryProps) {
    return(
        <div>
            {children}
        </div>
    )
}