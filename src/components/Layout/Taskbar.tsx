import { useEffect, useState } from "react"
import Time from "../Time"

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

    return(
        <div
            className="
                grid
                grid-cols-2
                p-2
                text-[#909692]/50
                text-sm
                fixed
                w-full
            "
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