import Title from '../titles/Title.tsx';
import ContactImage from "../../assets/contact.jpeg";
import {FaFacebookF, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import React, {useRef, useState} from "react";
import ReactDOM from "react-dom/client";
import {FaX} from "react-icons/fa6";
import {Github} from "react-bootstrap-icons";

const Contact = () => {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const usernameinputref = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const phoneNumberInputRef = useRef<HTMLInputElement>(null);
    const subjectInputRef = useRef<HTMLInputElement>(null);
    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };

    const handleSend = (e:React.FormEvent) => {
        e.preventDefault();
        if (username === "") {
            setErrMsg("Username is required!");
            usernameinputref.current!.focus();
        } else if (phoneNumber === "") {
            setErrMsg("Phone number is required!");
            phoneNumberInputRef.current!.focus();

        } else if (email === "") {
            setErrMsg("Please give your Email!");
            emailInputRef.current!.focus();
        } else if (!emailValidation()) {
            setErrMsg("Give a valid Email!");
            emailInputRef.current!.focus();
        } else if (subject === "") {
            setErrMsg("Plese give your Subject!");
        } else if (message === "") {
            setErrMsg("Message is required!");
        } else {
            setSuccessMsg(
                `Your Messages has been sent Successfully!  ${username}`
            );
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");

            setTimeout(()=>{
                setSuccessMsg("");
            },3500)
        }
    };



    return (
        <section
            id="contact"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title title="CONTACT" des="Contact With Me" />
            </div>
            <div className="w-full">
                <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                        <img
                            className="w-full h-64 object-contain rounded-lg mb-2"
                            src={ContactImage}
                            alt="contactImg"
                        />
                        <div className="flex flex-col gap-4">
                            <h3 className="text-3xl font-bold text-white">Dilanka Sandeep Wijesekara</h3>
                            <p className="text-lg font-normal text-gray-400">
                                Full Stack Developer
                            </p>
                            <p className="text-base text-gray-400 tracking-wide">
                                Dynamic and versatile professional with a background in  Engineering and a passion for Software Engineering. Skilled in Core Java,SQL-DBMS,JavaI/O, Java EE 8, Tom Cat , MVC architecture, Layerded architecture, HTML, CSS, ECMA Script (JavaScript), Design Systems(Material UI Bootstrap, Semantic UI) Hibernate,Spring Frame Work and Spring Boot, ReactJS, Angular  and more. Seeking new opportunities to leverage my unique blend of engineering expertise and software development skills. Let's connect and explore how I can contribute to your team's success in the world of software engineering.
                            </p>
                            <p className="text-base text-gray-400 flex items-center gap-2">
                                Phone Number 01: <span className="text-lightText">+94716409353</span>
                            </p>
                            <p className="text-base text-gray-400 flex items-center gap-2">
                                Phone Number 02:         <span className="text-lightText">+94705614567</span>

                            </p>
                            <p className="text-base text-gray-400 flex items-center gap-2">
                                Email: <span className="text-lightText decoration-blue-700">dilankacm@gmail.com</span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-base uppercase font-titleFont mb-4">Reach me in</h2>
                            <div className="flex gap-4">
                                <a href={"https://www.linkedin.com/in/dilanka-wijesekara-a0a344109"}>

                                         <span className="bannerIcon">
                                                <FaLinkedinIn />
                                        </span>
                                </a>
                                <a>
                                       <span className="bannerIcon">
                                             <FaFacebookF />
                                       </span>
                                </a>
                                <a href="https://github.com/DilankaSandeep">
                                    <span className="bannerIcon  hover:text-gray-500" title={"GitHub"}>
                                              <Github />
                                    </span>
                                </a>
                                <a href={"https://twitter.com/dilankaeg"}>
                                    <span className="bannerIcon  hover:text-black" title={"Twitter/X"}>
                                        <FaX />
                                    </span>
                                </a>


                            </div>
                        </div>
                    </div>
                    <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
                        <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
                            {errMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                                    {errMsg}
                                </p>
                            )}
                            {successMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                                    {successMsg}
                                </p>
                            )}
                            <div className="w-full flex flex-col lgl:flex-row gap-10">
                                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                                        Your name
                                    </p>
                                    <input
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
                                        ref={usernameinputref}
                                        className={`${
                                            errMsg === "Username is required!" &&
                                            "focus-visible:outline-designColor"
                                        } contactInput`}
                                        type="text"
                                    />
                                </div>
                                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                                        Phone Number
                                    </p>
                                    <input onChange={(e) => {
                                        setPhoneNumber(e.target.value);
                                    }
                                    }
                                        value={phoneNumber}
                                        className={`${
                                            ( errMsg === "Phone number is required!" ) &&
                                            "focus-visible:outline-designColor"
                                        } contactInput`}
                                        type="text"
                                           ref={phoneNumberInputRef}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">
                                    Email
                                </p>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className={`${
                                        (errMsg === "Please give your Email!"|| errMsg ==="Give a valid Email!") &&
                                        "focus-visible:outline-designColor"
                                    } contactInput`}
                                    type="email"
                                    ref={emailInputRef}
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">
                                    Subject
                                </p>
                                <input
                                    onChange={(e) => setSubject(e.target.value)}
                                    value={subject}
                                    className={`${
                                        errMsg === "Plese give your Subject!" &&
                                        "outline-designColor"
                                    } contactInput`}
                                    type="text"
                                    ref={subjectInputRef}
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">
                                    Message
                                </p>
                                <textarea
                                    onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                                    value={message}
                                    className={`${
                                        errMsg === "Message is required!" && "outline-designColor"
                                    } contactTextArea`}
                                    cols={30}
                                    rows={8}
                                ></textarea>
                            </div>
                            <div className="w-full">
                                <button
                                    onClick={handleSend}
                                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                                >
                                    Send Message
                                </button>
                            </div>
                            {errMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                                    {errMsg}
                                </p>
                            )}
                            {successMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                                    {successMsg}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact