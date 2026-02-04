import { useEffect, useState } from "react"

export default function Taskbar() {
    const [currentDate, setCurrentDate] = useState(new Date())

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

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('de-DE', {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        })
    }

    return(
        <div
            className="
                grid
                grid-cols-2
                p-2
                text-[#909692]/50
                text-sm
            "
        >
            <div>
                {formatDate(currentDate)}
            </div>
            <div className="text-right">
                {formatTime(currentDate)}
            </div>
        </div>
    )
}