import {motion} from "framer-motion";
import {ResumeCard} from "./ResumeCard.tsx";

export const ExtraCurricular = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-nameTextColor tracking-[4px]">Volunteering</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Extra Curricular Works</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Exchange Participant"
                        subTitle="AIESEC in Malaysia (EYLN 2015) (Ten Weeks)"
                        result="OGX-Malaysia"
                        des="Through AEISEC in Sri Lanka went for an exchange program in Malaysia in
Universiti of Kebangsaan and participated in a organizing
a conference for university students about entrepreneurship and Youth and Other Volunterring Works."
                    />
                    <ResumeCard
                        title="Manager(OGV)"
                        subTitle="AIESEC in University of Peradeniya (2016 - 2017)"
                        result="Out Goping Volunteer(OGV)"
                        des="AIESEC is aglobal platform for young people to develop their leadership potential through practical experiencesof many kinds, including internships, volunteering opportunities, and more. AS a OGV Manger and as a team we were responsible for find and send students for suitable valunteering programs abrod for Cross culture Experiences."
                    />
                    <ResumeCard
                        title="Team Leader(OGX)"
                        subTitle="AIESEC in University of Peradeniya (2015 - 2016)"
                        result="Out Going Exchange"
                        des="Team Leader for OGX team of AIESEC university of Peradeniya.Contributed develop leaderShip skills of many University Students."
                    />
                    <ResumeCard
                        title="Organizing Commite Vice President-AIESEC"
                        subTitle="Project Hodi Potha V 2.0"
                        result="IGV"
                        des="Organize a Volunteering program with foriegn student volunteers"
                    />
                    <ResumeCard
                        title="Commitee Member"
                        subTitle="Society of Structural Engineers Sri Lanka, University of Peradeniya"
                        result="Volunteer"
                        des=""
                    />
                </div>
            </div>

        </motion.div>
    );
};