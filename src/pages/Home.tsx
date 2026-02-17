import ActionList from "../components/ActionList/ActionList";
import Divider from "../components/Divider";
import Dot from "../components/Dot";
import Profile from "../components/Profile";
import Tabbed from "../components/Tabbed/Tabbed";
import Tag from "../components/Tabbed/Tag";
import Time from "../components/Time";
import Typewriter from "../components/Typewriter";

export default function Home() {
    const socialItems = [
        ["Github", "chris911e"],
        ["Discord", "piffels"],
        ["Email", "christopherscheel99@gmail.com"]
    ];

    const websiteItems = [
        ["Experience", "/experience"],
        ["Projects", "/projects"],
        ["Study", "/study"]
    ];

    const typewriterWords = [
        "Student @ ZHAW",
        "Manga Reader",
        "Camper & Hiker",
        "DevSecOps & k8s",
        "Typescript & Go",
        "Java & Python"
    ];

    const SocialList = (
        <Tabbed>
            <ActionList items={socialItems} link={false} backgroundColor="primary" />
        </Tabbed>
    )

    const DeploymentOverview = (
        <Tabbed>
            <div className="flex flex-col items-center text-xs font-bold">
                <img src="/load.svg" alt="" height={40} width={40} />
                Feature is under construction
            </div>
        </Tabbed>
    )

    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            <div className="md:col-span-3 flex justify-center">
                <Profile url="/pixelated.png" />
            </div>

            <div className="hidden md:block">
                {SocialList}
            </div>

            <div className="flex flex-col items-center gap-4">
                <div className="text-center text-2xl">Chris</div>

                <Typewriter words={typewriterWords} />

                <div className="flex gap-2 text-sm text-[#909692]">
                    <Time timeZone="Europe/Berlin" /> · UTC+1
                </div>

                {/* To Do: Red/Green based off of status via API */}
                <Tag>
                    <Dot color="#2dba4e" />
                    Systems Operational
                </Tag>

                <div className="w-full">
                    <ActionList items={websiteItems} link={true} />
                </div>

                <Divider />
                <div className="w-full block md:hidden space-y-4">
                    {SocialList}
                    <Divider />
                    {DeploymentOverview}
                    <Divider />
                </div>

                <span className="text-sm text-[#909692]">@ 2026</span>
            </div>

            <div className="hidden md:block">
                {DeploymentOverview}
            </div>
        </div>
    );
}