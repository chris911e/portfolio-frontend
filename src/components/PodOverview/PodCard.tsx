import Dot from "../Dot"
import { useTheme } from "../../context/ThemeContext"

export type PodStatus = "Running" | "Pending" | "Failed"

export interface Pod {
    name: string
    namespace: string
    status: PodStatus
    cpu: { usage: number, limit: number }
    memory: { usage: number, limit: number }
    age: string
}

const statusDot = {
    Running: "active",
    Pending: "archived",
    Failed: "inactive"
} as const

interface MetricProps {
    label: string
    usage: number
    limit: number
    unit: string
}

function Metric({ label, usage, limit, unit }: MetricProps) {
    const { theme } = useTheme()
    const percent = limit > 0 ? Math.min(100, Math.round((usage / limit) * 100)) : 0

    return (
        <div className="space-y-1">
            <div className={`flex justify-between text-xs ${theme.text.secondary}`}>
                <span>{label}</span>
                <span>{usage}{unit} / {limit}{unit}</span>
            </div>
            <div className="w-full h-1 rounded-full bg-gray-300/15">
                <div
                    className="h-full rounded-full bg-green-500/70"
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    )
}

export default function PodCard({ pod }: { pod: Pod }) {
    const { theme } = useTheme()

    return (
        <div
            className={`
                ${theme.colors.primary}
                p-3
                space-y-2
                rounded-lg
                border-[1px]
                border-gray-300/10
                hover:border-gray-300/15
            `}
        >
            <div className="flex items-center gap-2">
                <Dot color={statusDot[pod.status]} />
                <span className="text-sm truncate" title={pod.name}>{pod.name}</span>
            </div>
            <div className={`flex gap-2 text-xs ${theme.text.secondary}`}>
                <span>{pod.namespace}</span> ·
                <span>{pod.status}</span> ·
                <span>{pod.age}</span>
            </div>
            <Metric label="CPU" usage={pod.cpu.usage} limit={pod.cpu.limit} unit="m" />
            <Metric label="Memory" usage={pod.memory.usage} limit={pod.memory.limit} unit="Mi" />
        </div>
    )
}
