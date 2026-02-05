import ActionList from "../components/ActionList/ActionList";
import Dot from "../components/Dot";
import Profile from "../components/Profile";
import Tabbed from "../components/Tabbed/Tabbed";
import Tag from "../components/Tabbed/Tag";
import Time from "../components/Time";
import Typewriter from "../components/Typewriter";

export default function Home() {
    const socialItems = [["Github", "chris911e"], ["Discord", "piffels"], ["Email", "christopherscheel99@gmail.com"]]
    const websiteItems = [["Experience", "/experience"], ["Blog", "/blog"], ["Study", "/study"]]

    return(
        <div
            className="
                grid
                grid-cols-3
                gap-5
            "
        >
            <div className="col-span-3 flex justify-center">
                <Profile url="/pixelated.png" />
            </div>
            <div>
                <Tabbed>
                    <ActionList
                        items={socialItems}
                        link={false}
                    />
                </Tabbed>
            </div>
            <div
                className="
                    flex
                    flex-col
                    items-center
                    gap-4
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
                    <Time timeZone="Europe/Berlin" /> · UTC+1
                </div>
                {/* To Do: Red/Green based off of status via API */}
                <Tag>
                    <Dot color="#2dba4e" />
                    Systems Operational
                </Tag>
                <br />
                <div className="w-full">
                    <ActionList
                        items={websiteItems}
                        link={true}
                    />
                </div>
            </div>
            <div>
                <Tabbed>
                    f
                </Tabbed>
            </div>
        </div>
    )
}