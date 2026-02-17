import { useEffect, useState } from "react"

type OverlapPosition = "top" | "bottom"

export default function useScrollOverlap(position: OverlapPosition) {
    const [hasOverlap, setHasOverlap] = useState(false)

    useEffect(() => {
        const updateOverlap = () => {
            const docHeight = document.documentElement.scrollHeight
            const viewportHeight = window.innerHeight
            const hasScrollableContent = docHeight > viewportHeight

            if(!hasScrollableContent) {
                setHasOverlap(false)
                return
            }

            if(position === "top") {
                setHasOverlap(window.scrollY > 0)
            } else {
                setHasOverlap(window.scrollY + viewportHeight < docHeight)
            }
        }

        updateOverlap()
        window.addEventListener("scroll", updateOverlap)
        window.addEventListener("resize", updateOverlap)

        return () => {
            window.removeEventListener("scroll", updateOverlap)
            window.removeEventListener("resize", updateOverlap)
        }
    }, [position])

    return hasOverlap
}
