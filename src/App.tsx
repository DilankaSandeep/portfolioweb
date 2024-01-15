import {NavBar} from "./components/navbar/NavBar.tsx";
import './App.css'
import {Home} from "./components/home/Home.tsx";
import Contact from "./components/contact/Contact.tsx";
import {Resume} from "./components/resume/Resume.tsx";
import Projects from "./components/projects/Projects.tsx";
import Footer from "./components/footer/Footer.tsx";
import 'animate.css';
import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from "react-scroll";


function App() {


  return (
    <>
      <div  className="w-full h-auto bg-bodyColor text-lightText px-4">
      <button id="test" className="sml:hidden md:block"> 
                                <Link
                                className="w-full"
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                   <FaArrowCircleUp />
                                </Link></button>
        <NavBar />
        <div className="max-w-screen-xl mx-auto">
            <Home/>
            <Resume/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
       
      </div>
      
     
    </>
  )
}

export default App
