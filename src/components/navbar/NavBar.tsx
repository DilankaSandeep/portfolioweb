import "./NavBar.css";
import logo from "../../assets/logo/dwlogo.png";
import { Link } from "react-scroll";
import {navLinkData} from "../../constants";
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";


export const NavBar = () => {
    const [showmenu,setShowManu]  = useState<boolean>(false);
    return (
        <>
            <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
                <div className="">
                    <img src={logo} alt="logo" className="w-[139px] h-[70px]"  />
                </div>
                
                <div>
                    <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
                        {navLinkData.map(({ _id, title, link }) => (
                            <li
                                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-nameTextColor duration-300 hover:-translate-y-1 transition-all"
                                key={_id}
                            >
                                <Link
                                className="w-full"
                                    activeClass="active"
                                    to={link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <span className="mdl:hidden text-3xl" onClick={()=>{
                        if(showmenu === true){
                            setShowManu(false);
                        }else{
                            - setShowManu(true);
                        }
                       
                    }}>
                        {showmenu? <VscChromeClose/>:
                            <FiMenu/>
                        }
                   
                    </span>
                    </div>
                </div>
                {showmenu && 
                
                    <div className="w-[80%]  h-auto mt-2  ">
                        <ul className="mdl:hidden w-full flex flex-col items-center justify-center gap-4">
                        {navLinkData.map(({ _id, title, link }) => (
                            <li
                                className="h-10 w-full  py-2 text-center text-slate-900 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-black text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                                key={_id}
                            >
                                <Link
                                    activeClass="active"
                                    to={link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    </div>

                }


        </>
    );
};