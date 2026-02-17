import { useEffect, useState } from "react"
import useScrollOverlap from "../../hooks/useScrollOverlap"

export default function Footer() {
    const [screenSize, setScreenSize] = useState({
        width: innerWidth,
        height: innerHeight
    })

    const [loadTime, setLoadTime] = useState<number | null>(null)
    const hasOverlap = useScrollOverlap("bottom")

    useEffect(() => {
        setLoadTime(performance.now())

        const handleResize = () => {
            setScreenSize({
                width: innerWidth,
                height: innerHeight
            })
        }

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return(
        <div
            className={`
                fixed
                z-50
                bottom-0
                left-0
                right-0
                grid
                grid-cols-2
                p-2
                text-[#909692]/50
                text-xs
                transition-all
                duration-200
                ${hasOverlap ? "backdrop-blur-md bg-[#222222]/40" : "bg-transparent"}
            `}
        >
            <div>
                {screenSize.width}x{screenSize.height}
            </div>
            <div className="text-right">
                loaded in {loadTime}ms
            </div>
        </div>
    )
}