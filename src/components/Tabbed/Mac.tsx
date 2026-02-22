import type { ReactNode } from "react"
import Tabbed from "./Tabbed"
import WindowButton from "./WindowButton"

interface MacProps {
    children: ReactNode
    link: string
}

export default function Mac({ children, link }: MacProps) {
    return(
        <div className="stagger-in">
            <Tabbed rounded="xl" padding={0} backgroundColor="secondary">
                <div className="overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3">
                        <WindowButton color="red" href={link} />
                        <WindowButton color="yellow" href={link} />
                        <WindowButton color="green" href={link} />
                    </div>

                    <div className="p-4 flex justify-center">
                        {children}
                    </div>
                </div>
            </Tabbed>
        </div>
    )
}