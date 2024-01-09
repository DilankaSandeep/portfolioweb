import "./NavBar.css";
import logo from "../../assets/logo/dwlogo.png";
import { Link } from "react-scroll";
import {navLinkData} from "../../constants";


export const NavBar = () => {
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
                                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
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
                </div>


        </>
    );
};