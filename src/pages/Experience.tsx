import Divider from "../components/Divider";
import Accordion from "../components/Tabbed/Accordion";
import CustomTitle from "../components/Titles/CustomTitle";
import PrimaryTitle from "../components/Titles/PrimaryTitle";

export default function Experience() {
    return(
        <div>
            <div>
                <PrimaryTitle title="Professional Career" />
                <CustomTitle
                    title="September 2025 - Present"
                />
                <Accordion
                    logo="AnyWell.jpg"
                    title="AnyWell"
                    underTitle="Part-Time · Zurich"
                    description="Co-Founder & Engineer"
                >

                </Accordion>
                <br />
                <CustomTitle
                    title="August 2022 - July 2025"
                />
                <Accordion
                    logo="SwissRe.png"
                    title="Swiss Re"
                    underTitle="Part-Time · Zurich"
                    description="Software Engineering Trainee"
                >

                </Accordion>
            </div>
            <Divider className="mt-5" />
            <div>
                <PrimaryTitle title="Education" />
                <CustomTitle
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
                <CustomTitle
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