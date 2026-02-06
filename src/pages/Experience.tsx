import Divider from "../components/Divider";
import Accordion from "../components/Accordion.tsx/Accordion";
import CustomText from "../components/Titles/CustomText";
import PrimaryTitle from "../components/Titles/PrimaryTitle";
import { experience } from "../constants/locales";
import List from "../components/Accordion.tsx/List";

export default function Experience() {
    // ToDo: German
    // ToDo: LanguageContext
    const englishExperience = experience.en

    return(
        <div>
            <div>
                <PrimaryTitle title="Professional Career" />
                {
                    englishExperience.career.map((item) => (
                        <div key={item.id}>
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
                <CustomText
                    title="September 2025 - Present"
                />
                <Accordion
                    logo="ZHAW.jpg"
                    title="ZHAW School of Engineering"
                    underTitle="Part-Time · Zurich"
                    description="BSc of Sciences in Computer Science"
                >

                </Accordion>
                <br />
                <CustomText
                    title="August 2021 - July 2025, Zurich"
                />
                <Accordion
                    logo="BBW.jpg"
                    title="BBW Vocational Training School"
                    underTitle="Part-Time · Zurich"
                    description="Swiss Certificate of Competence in Software Engineering"
                >

                </Accordion>
            </div>
        </div>
    )
}