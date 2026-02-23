import CustomText from "../Titles/CustomText"

interface ListItem {
    id: number,
    title: string,
    points: string[]
}

interface ListProps {
    list: ListItem[]
}

export default function List({ list }: ListProps) {
    return(
        <div className="mt-3">
            {
                list.map((item) => (
                    <div key={item.id} className="mt-7">
                        <CustomText
                            title={item.title}
                            size="lg"
                        />
                        <ul>
                        {
                            item.points.map((point, index) => (
                                <li key={index} className="mt-1">
                                    <span className="flex gap-2">
                                        <span
                                            aria-hidden="true"
                                            className="
                                                inline-flex
                                                items-center
                                                justify-center
                                                mt-1 h-4 w-4
                                                shrink-0
                                                animate-pulse
                                            "
                                        >
                                            •
                                        </span>
                                        <CustomText
                                            title={`${point}`}
                                            size="lg"
                                            textColor="secondary"
                                        />
                                    </span>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}