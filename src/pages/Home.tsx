import ActionList from "../components/ActionList/ActionList";
import Divider from "../components/Divider";
import Dot from "../components/Dot";
import PodOverview from "../components/PodOverview/PodOverview";
import Profile from "../components/Profile";
import Tabbed from "../components/Tabbed/Tabbed";
import Tag from "../components/Tabbed/Tag";
import ThemeIcon from "../components/ThemeIcon/ThemeIcon";
import Time from "../components/Time";
import Typewriter from "../components/Typewriter";

export default function Home() {
    const delayStep = 90;
    const desktopCenterItems = 7;
    const desktopSideDelay = desktopCenterItems * delayStep;
    const desktopRightDelay = desktopSideDelay + delayStep;

    const socialItems = [
        ["Github", "https://www.github.com/chris911e"],
        ["LinkedIn", "https://www.linkedin.com/in/christopher-scheel-80723122b"],
        ["Email", "mail"]
    ];

    const websiteItems = [
        ["Experience", "/experience"],
        ["Projects", "/projects"],
        ["Chat", "/chat"]
    ];

    const typewriterWords = [
        "Student @ ZHAW",
        "Working Student @ AXA",
        "Kubernetes & Grafana",
        "Python & Golang",
    ];

    const SocialList = (
        <Tabbed>
            <ActionList items={socialItems} link={false} backgroundColor="primary" />
        </Tabbed>
    )

    const DeploymentOverview = (
        <Tabbed>
            <PodOverview />
        </Tabbed>
    )

    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            <div
                className="md:col-span-3 flex justify-center stagger-in"
                style={{ animationDelay: "0ms" }}
            >
                <Profile url="/pixelated.png" />
            </div>

            <div
                className="hidden md:block slide-in-left-desktop"
                style={{ animationDelay: `${desktopSideDelay}ms` }}
            >
                {SocialList}
            </div>

            <div className="flex flex-col items-center gap-4">
                <div
                    className="text-center text-2xl stagger-in"
                    style={{ animationDelay: `${delayStep}ms` }}
                >
                    Chris
                </div>

                <div
                    className="stagger-in"
                    style={{ animationDelay: `${2 * delayStep}ms` }}
                >
                    <Typewriter words={typewriterWords} />
                </div>

                <div
                    className="flex gap-2 text-sm text-[#909692] items-center stagger-in"
                    style={{ animationDelay: `${3 * delayStep}ms` }}
                >
                    <Time timeZone="Europe/Berlin" /> ·
                    <ThemeIcon />
                </div>

                {/* To Do: Red/Green based off of status via API */}
                <div
                    className="stagger-in flex gap-2"
                    style={{ animationDelay: `${4 * delayStep}ms` }}
                >
                    <Tag>
                        <Dot color="active" />
                        Systems Operational
                    </Tag>
                </div>

                <div
                    className="w-full stagger-in"
                    style={{ animationDelay: `${5 * delayStep}ms` }}
                >
                    <ActionList items={websiteItems} link={true} />
                </div>

                <div
                    className="w-full stagger-in"
                    style={{ animationDelay: `${6 * delayStep}ms` }}
                >
                    <Divider />
                </div>

                <div
                    className="w-full block md:hidden space-y-4 stagger-in"
                    style={{ animationDelay: `${7 * delayStep}ms` }}
                >
                    {SocialList}
                    <div className="stagger-in" style={{ animationDelay: `${8 * delayStep}ms` }}>
                        <Divider />
                    </div>
                    <div className="stagger-in" style={{ animationDelay: `${9 * delayStep}ms` }}>
                        {DeploymentOverview}
                    </div>
                    <div className="stagger-in" style={{ animationDelay: `${10 * delayStep}ms` }}>
                        <Divider />
                    </div>
                </div>

                <span
                    className="text-sm text-[#909692] stagger-in"
                    style={{ animationDelay: `${8 * delayStep}ms` }}
                >
                    2026
                </span>
            </div>

            <div
                className="hidden md:block slide-in-right-desktop"
                style={{ animationDelay: `${desktopRightDelay}ms` }}
            >
                {DeploymentOverview}
            </div>
        </div>
    );
}