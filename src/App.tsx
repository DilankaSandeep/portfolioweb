import {NavBar} from "./components/navbar/NavBar.tsx";
import './App.css'
import {Home} from "./components/home/Home.tsx";
import {Feature} from "./components/features/Feature.tsx";
import {Testimonial} from "./components/testimonial/Testimonial.tsx";
import Contact from "./components/contact/Contact.tsx";
import {Resume} from "./components/resume/Resume.tsx";
import Projects from "./components/projects/Projects.tsx";


function App() {


  return (
    <>
      <div  className="w-full h-auto bg-bodyColor text-lightText px-4">
        <NavBar />
        <div className="max-w-screen-xl mx-auto">
            <Home/>
            <Resume/>
            <Projects/>
            <Feature/>
            <Testimonial/>
            <Contact/>


        </div>
      </div>
    </>
  )
}

export default App
