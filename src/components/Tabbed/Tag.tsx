import type { ReactNode } from "react"
import Tabbed from "./Tabbed"

interface TagProps {
    children: ReactNode
}

export default function Tag({ children }: TagProps) {
    return(
        <Tabbed rounded="full" spacing={1}>
            <div
                className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-[#909692]
                "
            >
                {children}
            </div>
        </Tabbed>
    )
}