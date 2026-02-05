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
                    title="August 2022 - July 2025, Zurich"
                />
                <Accordion
                    logo="SwissRe.png"
                    title="Swiss Re"
                    underTitle="Part-Time"
                    description="Trainee"
                >

                </Accordion>
            </div>
            <Divider className="mt-5" />
            <div>
                <PrimaryTitle title="Education" />
                <CustomTitle
                    title="September 2025 - Present, Zurich"
                />
                <Accordion
                    logo="ZHAW.jpg"
                    title="ZHAW School of Engineering"
                    underTitle="Part-Time"
                    description="BSc of Sciences in Computer Science"
                >

                </Accordion>
                <br />
                <CustomTitle
                    title="August 2021- July 2025, Zurich"
                />
                <Accordion
                    logo="BBW.jpg"
                    title="BBW"
                    underTitle="Part-Time"
                    description="Swiss Certificate of Competence in Software Engineering"
                >

                </Accordion>
            </div>
        </div>
    )
}