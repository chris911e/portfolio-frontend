import Divider from "../components/Divider";
import Accordion from "../components/Accordion/Accordion";
import CustomText from "../components/Titles/CustomText";
import PrimaryTitle from "../components/Titles/PrimaryTitle";
import { experience } from "../constants/locales/experience";
import List from "../components/Accordion/List";
import Tabbed from "../components/Tabbed/Tabbed";
import Mac from "../components/Tabbed/Mac";

export default function Experience() {
    // ToDo: German
    const englishExperience = experience.en
    const delayStep = 120
    const dividerOrder = englishExperience.career.length + 1
    const educationTitleOrder = dividerOrder + 1

    return(
        <Mac link="/">
            <div>
                <div>
                    <div
                        className="stagger-in"
                        style={{ animationDelay: "0ms" }}
                    >
                        <PrimaryTitle title="Career" />
                    </div>
                    {
                        englishExperience.career.map((item, index) => (
                            <div
                                key={item.id}
                                className="mt-5 stagger-in"
                                style={{
                                    animationDelay: `${(index + 1) * delayStep}ms`
                                }}
                            >
                                <CustomText
                                    title={item.timeRange}
                                />
                                <Accordion
                                    logo={item.logo}
                                    title={item.title}
                                    underTitle={item.underTitle}
                                    description={item.shortDescription}
                                >
                                    <List list={item.detailedDescription.teams}/>
                                </Accordion>
                            </div>
                        ))
                    }
                </div>
                <div
                    className="stagger-in"
                    style={{ animationDelay: `${dividerOrder * delayStep}ms` }}
                >
                    <Divider className="mt-5" />
                </div>
                <div>
                    <div
                        className="stagger-in"
                        style={{ animationDelay: `${educationTitleOrder * delayStep}ms` }}
                    >
                        <PrimaryTitle title="Education" />
                    </div>
                    {
                        englishExperience.education.map((item, index) => (
                            <div
                                key={item.id}
                                className="mt-5 stagger-in"
                                style={{
                                    animationDelay: `${(educationTitleOrder + index + 1) * delayStep}ms`
                                }}
                            >
                                <CustomText
                                    title={item.timeRange}
                                />
                                <Accordion
                                    logo={item.logo}
                                    title={item.title}
                                    underTitle={item.underTitle}
                                    description={item.shortDescription}    
                                >
                                    <Tabbed
                                        padding={2}
                                        margin={3}
                                        rounded="xl"
                                        backgroundColor="primary"
                                    >
                                        {
                                            item.detailedDescription.completed ? (
                                                <span>Final Grade: </span>
                                            ): (
                                                <span>Current Grade: </span>
                                            )
                                        }
                                        {item.detailedDescription.grade} / 6.0
                                    </Tabbed>
                                    <List list={item.detailedDescription.info} />
                                </Accordion>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Mac>
    )
}