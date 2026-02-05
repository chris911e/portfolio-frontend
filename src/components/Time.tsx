import { useEffect, useState } from "react"

interface TimeProps {
    timeZone?: string
}

export default function Time({ timeZone }: TimeProps){
    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('de-DE', {
            timeZone: timeZone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        })
    }
    return(
        <div>
            {formatTime(currentDate)}
        </div>
    )
}