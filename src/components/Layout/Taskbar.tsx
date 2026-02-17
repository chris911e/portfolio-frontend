import { useEffect, useState } from "react"
import Time from "../Time"
import useScrollOverlap from "../../hooks/useScrollOverlap"

export default function Taskbar() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const hasOverlap = useScrollOverlap("top")

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatDate = (date: Date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    return(
        <div
            className={`
                fixed
                z-50
                w-full
                grid
                grid-cols-2
                p-2
                text-[#909692]/50
                text-sm
                transition-all
                duration-200
                ${hasOverlap ? "backdrop-blur-md bg-[#222222]/40" : "bg-transparent"}
            `}
        >
            <div>
                {formatDate(currentDate)}
            </div>
            <div className="text-right">
                <Time />
            </div>
        </div>
    )
}