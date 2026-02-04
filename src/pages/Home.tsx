import Profile from "../components/Profile";
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
            <div>
                Column 1
            </div>
            <div
                className="
                    flex
                    flex-col
                    items-center
                    gap-2
                "
            >
                <Profile url="/dawg.jpg" />
                <div className="text-center text-xl">
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
                Column 3
            </div>
        </div>
    )
}