import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import {ArrowDown} from "react-bootstrap-icons";
import { useState } from "react";

// @ts-ignore
const ProjectsCard = ({ title, des, src,github,link }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };
    return (
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
            <h3 className="text-base uppercase text-nameTextColor font-normal flex items-center gap-4">
                Check Out Demo Video<ArrowDown/>
            </h3>
            <div className="w-full h-[80%] overflow-hidden rounded-lg">
                <video className="w-full h-60 object-contain group-hover:scale-110 duration-300 cursor-pointer" src={src}  controls={!isPlaying} 
                autoPlay={isPlaying}
                muted
                loop
                onClick={handlePlay} ></video>
            </div>
            <div className="w-full mt-5 flex flex-col  gap-6">
                <div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base uppercase text-nameTextColor font-normal">
                            {title}
                        </h3>
                        <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-blue-700 duration-300 cursor-pointer">
                  <a href={github} title="Checkout the code" target="_blank" 
              rel="noopener noreferrer">
                                      <BsGithub />
                  </a>

              </span>
                            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-blue-600 duration-300 cursor-pointer">
                <a href={link} target="_blank" 
              rel="noopener noreferrer">
                                                    <FaGlobe />
                </a>

              </span>
                        </div>
                    </div>
                    <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                        {des}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectsCard