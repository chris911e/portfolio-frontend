import Action from "../components/Action";
import Dot from "../components/Dot";
import Profile from "../components/Profile";
import Tabbed from "../components/Tabbed";
import Tag from "../components/Tag";
import Time from "../components/Time";
import Typewriter from "../components/Typewriter";

export default function Home() {
    return(
        <div
            className="
                grid
                grid-cols-3
                gap-4
            "
        >
            <div className="col-span-3 flex justify-center">
                <Profile url="/pixelated.png" />
            </div>
            <div>
                <Tabbed>
                    {
                        [
                            ["Github", "chris911e"],
                            ["Discord", "piffels"],
                            ["Email", "christopherscheel99@gmail.com"]
                        ].map((item) => (
                            <Action
                                link={false}
                                icon={`/icons/${item[0]}.svg`}
                                value={item[1]}
                            >
                                {item[0]}
                            </Action>
                        ))
                    }
                </Tabbed>
            </div>
            <div
                className="
                    flex
                    flex-col
                    items-center
                    gap-2
                "
            >
                <div className="text-center text-2xl">
                    Chris
                </div>
                <Typewriter
                    words={[
                        "Student @ ZHAW",
                        "Typescript & React",
                        "Go & K8s",
                        "Azure DevOps",
                        "Cyber Security"
                    ]}
                />
                <div className="text-sm text-[#909692] flex gap-2">
                    <Time timeZone="Europe/Berlin" />
                    · UTC+1
                </div>
                {/* To Do: Red/Green based off of status via API */}
                <Tag>
                    <Dot color="#2dba4e" size={8} />
                    All Systems Operational
                </Tag>
            </div>
            <div>
                <Tabbed>
                    f
                </Tabbed>
            </div>
        </div>
    )
}