import { useState } from "react"

interface ActionProps {
    link: boolean
    icon: string
    value: string
    text: string
}

export default function Action({ text, value, icon, link }: ActionProps) {
    const [actionName, setActionName] = useState(text)

    return(
        <div
            className="
                bg-[#222222]
                flex
                items-center
                justify-between
                gap-4
                p-3
                rounded-lg
                border-[1px]
                border-gray-300/5
                hover:border-gray-300/15
                hover:bg-gray-300/15
                hover:cursor-pointer
                w-full
            "
            onClick={() => {
                if(link) {
                    window.open(value, '_blank')
                } else {
                    // ToDo: Real Notification anim, etc. in the future
                    navigator.clipboard.writeText(value)
                    setActionName("Copied!")
                    setTimeout(() => {
                        setActionName(text)
                    }, 1000)
                }
            }}
        >
            <div className="flex gap-3 items-center">
                <img
                    src={icon}
                    alt="?"
                    height={25}
                    width={25}
                />
                {actionName}
            </div>
            <img
                src={link ? "/icons/arrow.svg" : "/icons/copy.svg"}
                alt="?"
                height={25}
                width={25}
            />
        </div>
    )
}