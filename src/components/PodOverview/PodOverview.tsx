import { useLayoutEffect, useRef } from "react"
import PodCard, { type Pod } from "./PodCard"
import { useTheme } from "../../context/ThemeContext"

// To Do: replace with data from the Kubernetes API
const mockPods: Pod[] = [
    {
        name: "portfolio-frontend-7c9d8f6b5-x2k4p",
        namespace: "portfolio",
        status: "Running",
        cpu: { usage: 12, limit: 250 },
        memory: { usage: 48, limit: 256 },
        age: "3d"
    },
    {
        name: "portfolio-backend-5f6b7c8d9-q8r2t",
        namespace: "portfolio",
        status: "Running",
        cpu: { usage: 87, limit: 500 },
        memory: { usage: 192, limit: 512 },
        age: "3d"
    },
    {
        name: "grafana-6d5c4b3a2-m7n9z",
        namespace: "monitoring",
        status: "Pending",
        cpu: { usage: 0, limit: 200 },
        memory: { usage: 0, limit: 256 },
        age: "2m"
    }
]

const VISIBLE_PODS = 3

interface PodOverviewProps {
    pods?: Pod[]
}

export default function PodOverview({ pods = mockPods }: PodOverviewProps) {
    const { theme } = useTheme()
    const running = pods.filter((pod) => pod.status === "Running").length
    const listRef = useRef<HTMLDivElement>(null)

    // Cap the list at the height of the first VISIBLE_PODS cards, scroll the rest
    useLayoutEffect(() => {
        const list = listRef.current
        if (!list) return

        const last = list.children[VISIBLE_PODS - 1] as HTMLElement | undefined
        list.style.maxHeight = pods.length > VISIBLE_PODS && last
            ? `${last.offsetTop + last.offsetHeight}px`
            : ""
    }, [pods])

    return (
        <div className="space-y-3">
            <div className={`flex justify-between text-xs ${theme.text.secondary}`}>
                <span className="font-bold">Pods</span>
                <span>{running}/{pods.length} running</span>
            </div>
            <div ref={listRef} className="relative space-y-3 overflow-y-auto">
                {pods.map((pod) => (
                    <PodCard key={pod.name} pod={pod} />
                ))}
            </div>
        </div>
    )
}
