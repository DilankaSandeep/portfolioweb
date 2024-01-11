import  {useState} from "react";
import Title from "../titles/Title.tsx";
import {Education} from "./Education.tsx";
import {Skills} from "./Skills.tsx";
import {ExtraCurricular} from "./ExtraCurricular.tsx";
import {Experience} from "./Experience.tsx";
import CV from "../../assets/Dilanka CV Software Engineer.pdf";

export const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    const [extraCurricularData, setExtraCurricularData] = useState(false);

    return (
        <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title title="4+ Years of Professional Experience" des="My Resume" />
               <div className="p-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-black"> <a href={CV} download={"dilanakCV.pdf"}>Download CV</a></div>
            </div>

            <div>
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    <li
                        onClick={() => {
                            setEducationData(true);
                            setSkillData(false);
                            setExperienceData(false);
                            setExtraCurricularData(false);
                        }
                        }
                        className={`${
                            educationData
                                ? "border-nameTextColor rounded-lg"
                                : "border-transparent"
                        } resumeLi`}
                    >
                        Education
                    </li>
                    <li
                        onClick={() =>{
                            setEducationData(false);
                            setSkillData(true) ;
                            setExperienceData(false);
                            setExtraCurricularData(false);
                        }}
                        className={`${
                            skillData ? "border-nameTextColor" : "border-transparent"
                        } resumeLi`}
                    >
                        Professional Skills
                    </li>
                    <li
                        onClick={() =>{
                            setEducationData(false);
                            setSkillData(false);
                            setExperienceData(true);
                            setExtraCurricularData(false);
                        }}
                        className={`${
                            experienceData
                                ? "border-nameTextColor rounded-lg"
                                : "border-transparent"
                        } resumeLi`}
                    >
                        Experience
                    </li>
                    <li
                        onClick={() =>{
                            setEducationData(false);
                            setSkillData(false) ;
                            setExperienceData(false);
                            setExtraCurricularData(true);
                        }}
                        className={`${
                            extraCurricularData
                                ? "border-nameTextColor rounded-lg"
                                : "border-transparent"
                        } resumeLi`}
                    >
                        Extra Curricular
                    </li>
                </ul>
            </div>
            {educationData && <Education />}
            {skillData && <Skills />}
            {extraCurricularData && <ExtraCurricular/>}
            {experienceData && <Experience />}

        </section>
    );
};