import { motion } from 'framer-motion';
import {ResumeCard} from "./ResumeCard.tsx";
export const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-nameTextColor tracking-[4px]">2019-Present</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Professional Experience</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Software Engineer-Trainee"
                        subTitle="IJSE - (July 2023 - Present)"
                        result="OnSite"
                        des="Gaining a Frontend and Backend development Experience and WhiteBox
testing (JUnit) in Web Application Development with at least 60% test coverage with understanding
Software Development Life cycle. Tech stacks used Java 11, Java EE 8 (Servlet,
JSP, JSTL,JSP), Tom Cat, Postgresql, ReactJS, Spring FrameWork and Spring Boot,
Hibernate, TypeScript, ECMAScript, NodeJs, javaFX and Git. Worked In Linux Environment."
                    />
                    <ResumeCard
                        title="Engineer-Civil"
                        subTitle="National Water Supply and Drainage Board - (2021 - 2023)"
                        result="onSite"
                        des="Worked as a project Engineer for the largest water supply project in Sri Lanka"
                    />
                    <ResumeCard
                        title="Enginner-Civil"
                        subTitle="Sanken Construction (PVT) Ltd/ JN Construction(PVT) Ltd(2019-2021)"
                        result="OnSite"
                        des="Worked as an Enginner and Site Manager "
                    />
                    <div className="w-full h-1/3 group flex">
                        <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
                        </div>
                        <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
                            <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                                        Gains from Engineering Experience
                                    </h3>
                                </div>
                            </div>
                            <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
                                Project Management : Managed several teams, Worked under budgets, Manage project timelines, Meet Deadlines, Preparing of work schedules.
                            </p>
                            <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
                                Problem-Solving: Solved many technical and non-technical issues in sites and in offices. Found devise innovative solutions, and optimized processes with minimum resources.
                            </p>
                            <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
                                Collaboration and Communication: collaborated with multidisciplinary teams and many stockholders like interacted with clients (Local and Foreign) to meet their requirements, Communication with general public. Presented technical information to relevant parties.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </motion.div>
    );
};