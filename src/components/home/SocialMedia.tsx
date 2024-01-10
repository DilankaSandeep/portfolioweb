import {Facebook, Github, Linkedin} from "react-bootstrap-icons";

import { SiHibernate, SiNextdotjs, SiSpring, SiSpringboot} from "react-icons/si";
import {FaAngular, FaJava, FaReact} from "react-icons/fa";
import {TbBrandJavascript} from "react-icons/tb";
import {BiLogoTypescript} from "react-icons/bi";
import {GiDatabase} from "react-icons/gi";

export const SocialMedia = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-6 justify-between">
            <div>
                <h2 className="text-base font-bold uppercase font-titleFont mb-4">
                    Find me in,
                </h2>
                <div className="flex gap-4">
            <span className="bannerIcon" title="LinkedIn Link" >
                <a href="https://www.linkedin.com/in/dilanka-wijesekara-a0a344109">
              <Linkedin  />
                    </a>
            </span>
                    <span className="bannerIcon" title="FaceBook Link">
              <Facebook />
            </span>
                    <a href="https://github.com/DilankaSandeep">
                    <span className="bannerIcon hover:text-gray-700" title="GitHub Link">
              <Github />
            </span>
                    </a>

                </div>
            </div>
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    BEST SKILL ON
                </h2>
                <div className="flex gap-4 flex-wrap">
            <span className="bannerIcon" title="Core Java" >
              <FaJava  />
            </span>

                    <span className="bannerIcon hover:text-green-700" title="Spring FrameWork">
              <SiSpring  />
            </span>
                    <span className="bannerIcon hover:text-green-700" title="Spring-Boot">
              <SiSpringboot/>
            </span>
                    <span className="bannerIcon hover:text-sky-500" title="ReactJs">
          <FaReact />
            </span>

                    <span className="bannerIcon hover:text-red-500" title="Angular">
             <FaAngular />
            </span>
                    <span className="bannerIcon hover:text-yellow-300" title="Hibernate">
                        <SiHibernate/>
            </span>
                    <span className="bannerIcon hover:text-green-600"  title="NodeJS">
              <SiNextdotjs />
            </span>
                    <span className="bannerIcon hover:text-yellow-400" title="ECMA Script" >
              <TbBrandJavascript/>
            </span>
                    <span className="bannerIcon hover:text-blue-700" title="TypeScript" >
              <BiLogoTypescript/>
            </span>
                    <span className="bannerIcon hover:text-gray-700" title="DataBases MySQL, PostgreSQL, MogoDB">
          <GiDatabase />
            </span>

                </div>
            </div>
        </div>
    );
};