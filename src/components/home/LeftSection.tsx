import { useTypewriter, Cursor } from "react-simple-typewriter";
import {SocialMedia} from "./SocialMedia.tsx";

export const LeftSection = () => {
    const [text] = useTypewriter({
        words: ["Professional Engineer.", "Full Stack Developer.", "Java Developer.","Full Stack Engineer"],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 20,
        delaySpeed: 750,
    });

    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className=" text-lg font-normal">WELCOME TO MY PERSONAL WEB SITE</h4>
                <h1 className="text-6xl font-bold text-white">
                    Hi, I'm <span className="text-nameTextColor hover:text-blue-800 capitalize animate__animated animate__bounceInDown">Dilanka Wijesekara</span>
                </h1>
                <h2 className="text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking={true}
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    As a Full Stack Developer, I navigate the digital realm with mastery in Java, shaping robust backends with Spring, Spring Boot, and Java EE. On the frontend, I sculpt seamless experiences using the power of ReactJS and AngularJS. In the world of databases, SQL and NoSQL are my playgrounds. Coding isn't just my skill; it's the language through which I architect solutions and craft digital experiences
                </p>
            </div>

            <SocialMedia />
        </div>
    );
};