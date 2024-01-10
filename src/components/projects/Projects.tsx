import ProjectCard from "./ProjectCard.tsx";
import Title from "../titles/Title.tsx";
import Taskflow from "../../assets/project/TaskFlowFront.png";
import BookLand from "../../assets/project/bookLand.png";
import Apple from "../../assets/project/Apple.png";
import Google from "../../assets/project/google.png";
import TextEditor from "../../assets/project/simpletextEditor.png";
import Portfoliopweb from "../../assets/project/portfolioweb.png";

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="CHECK OUT MY PERSONEL PROJECT IN GIVE YOUR FEEDBACK"
                    des="My Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectCard
                    title="TaskFlow Application"
                    des=" Welcome to Task Flow, the ultimate solution for streamlined task management designed to make your life easier and more organized. Task Flow is not just a to-do list; it's your personal productivity companion, accessible from anywhere, whether you're at your computer or on the go with your mobile device and log in with your Google account."
                    src={Taskflow}
                    github="https://github.com/DilankaSandeep/Task-flow-app.git"
                    link="//"
                />
                <ProjectCard
                    title="Book Land Online Book Store"
                    des=" Welcome to the Online Book Store App! This is a web application built using Spring Boot and React.js, designed to provide a seamless shopping experience for book enthusiasts.Features including Navigating the Website, Browsing Books, User Authentication, Shopping Cart, Placing an Order"
                    src={BookLand}
                    github={"https://github.com/DilankaSandeep/online-Book-Store.git"}
                    link={"//"}
                />
                <ProjectCard
                    title="Apple Web Site Clone"
                    des=" This project is a clone of the Apple webSite front page as of November 2023 created using HTML, CSS and JS. It includes responsive design using media queries, and it utilizes Ionic icons and Images are from Apple Web Site. Please note that all product logos, designs, and trademarks belong to their respective owners, and the clone is intended for educational and non-commercial purposes only."
                    src={Apple}
                    github={"https://github.com/DilankaSandeep/appleClone.git"}
                    link={"https://dilankasandeep.github.io/appleClone/"}
                />
                <ProjectCard
                    title="Google Search Front"
                    des=" This project is a clone of the Google front page created using HTML and CSS. It includes responsive design using media queries, and it utilizes Ionic icons and the Google logo from the Google site. Please note that all product logos, designs, and trademarks belong to their respective owners, and the clone is intended for educational and non-commercial purposes only"
                    src={Google}
                    github={"https://github.com/DilankaSandeep/googleclone.git"}
                    link={"https://dilankasandeep.github.io/googleclone/"}
                />
                <ProjectCard
                    title="Simple Text Editor"
                    des=" This is a basic text editor built using JavaFX. It provides a user-friendly interface for creating, editing, and saving text documents.Features

    Text Editing,
    Save and Load,
    Cut, Copy, Paste,
    Customizable: Simple and intuitive design that can be extended or modified as needed.
"
                    src={TextEditor}
                    github={"https://github.com/DilankaSandeep/simple-text-editor.git"}
                    link={"//"}
                />
                <ProjectCard
                    title="Personel Web Site"
                    des="Welcome to my personal portfolio website! This project was built using React.js with Vite to showcase my skills, projects, and experience.Integrated with Libraries React-scroll, react-simple-typewriter, framer-motion, react-icon, bootstarp icons,EmailJS "
                    src={Portfoliopweb}
                    github={"https://github.com/DilankaSandeep/portfolioweb.git"}
                    link={"///"}
                />
            </div>
        </section>
    );
}

export default Projects;