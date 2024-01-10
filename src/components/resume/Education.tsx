import { motion } from 'framer-motion';
import {ResumeCard} from "./ResumeCard.tsx";
export const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-nameTextColor tracking-[4px]"> Highest- BSc (hons) in Engineering</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Educational Qualifications</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="BSc(Hons) in Engineering"
                        subTitle="University of Peradeniya (2014 - 2019)"
                        result="Degree"
                        des="Got selected to one of the most reputed University in Sri Lanka for the faculty of Engineering from the first attempt in Advanced level exam conducted by SL government.Then Specialized in Civil Engineering from scond year onwards."
                    />
                    <ResumeCard
                        title="Diploma in Comprehensive Master Java Developer"
                        subTitle="Institute of Software Engineering(2022-2023)"
                        result="Diploma"
                        des="Comprehesive analysing, designing and implementing Java SE software solutions in covering major aspects of software developing standards."
                    />
                    <ResumeCard
                        title="Certificate course in English"
                        subTitle="University of Sabaragamuwa Sri Lanka"
                        result="Distinction Pass"
                        des="Distiction Level pass In Writing,Reading,Speaking,Listening"
                    />
                    <ResumeCard
                        title="Secondary Education"
                        subTitle="R/Sivali central Collage"
                        result="Advanced Level Exam in 2013/ Ordinary Level Exam in 2010"
                        des="Selected to Faculty of Engineering from the A/L Exam."
                    />
                </div>
            </div>

        </motion.div>
    );
};