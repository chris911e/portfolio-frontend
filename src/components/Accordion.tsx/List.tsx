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
                    <div key={item.id}>
                        <CustomText
                            title={item.title}
                        />
                        <ul>
                        {
                            item.points.map((point, index) => (
                                <li key={index}>
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