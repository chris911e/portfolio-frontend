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
                                    <CustomText
                                        title={`▸ ${point}`}
                                        size="lg"
                                        color="secondaryText"
                                    />
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