import Entry from "../components/Entry";
import Profile from "../components/Profile";
import Tabbed from "../components/Tabbed";
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
                    <Entry link={true} copy={true}>
                        H
                    </Entry>
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
                <div
                    className="
                        text-center
                        text-2xl
                    "
                >
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
            </div>
            <div>
                <Tabbed>
                    <Entry link={false} copy={false}>
                        H
                    </Entry>
                </Tabbed>
            </div>
        </div>
    )
}