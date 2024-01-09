import {NavBar} from "./components/navbar/NavBar.tsx";
import './App.css'
import {Home} from "./components/home/Home.tsx";
import {Feature} from "./components/features/Feature.tsx";

function App() {


  return (
    <>
      <div  className="w-full h-auto bg-bodyColor text-lightText px-4">
        <NavBar />
        <div className="max-w-screen-xl mx-auto">
<Home/>
            <Feature/>

        </div>
      </div>
    </>
  )
}

export default App
