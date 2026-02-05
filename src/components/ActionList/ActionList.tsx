import Action from "./Action"

interface ActionListProps {
    items: string[][]
    link: boolean
}

export default function ActionList({ items, link }: ActionListProps) {
    return(
        <div className="space-y-4">
            {
                items.map((item) => (
                    <Action
                        key={item[0]}
                        link={link}
                        icon={`/icons/${item[0]}.svg`}
                        value={item[1]}
                        text={item[0]}
                    />
                ))
            }
        </div>
    )
}