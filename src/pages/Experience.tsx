import Divider from "../components/Divider";
import Accordion from "../components/Accordion.tsx/Accordion";
import CustomText from "../components/Titles/CustomText";
import PrimaryTitle from "../components/Titles/PrimaryTitle";
import { experience } from "../constants/locales/experience";
import List from "../components/Accordion.tsx/List";
import Tabbed from "../components/Tabbed/Tabbed";

export default function Experience() {
    // ToDo: German
    const englishExperience = experience.en

    return(
        <div>
            <div>
                <PrimaryTitle title="Professional Career" />
                {
                    englishExperience.career.map((item) => (
                        <div key={item.id} className="mt-5">
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
            <Divider className="mt-5" />
            <div>
                <PrimaryTitle title="Education" />
                {
                    englishExperience.education.map((item) => (
                        <div key={item.id} className="mt-5">
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
                                    backgroundColor="primaryColor"
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
    )
}