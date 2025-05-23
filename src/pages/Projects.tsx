import { Link } from "react-router-dom";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navBar";
import { projectsData } from '../data/projects'
import poster from '../assets/fotos/foto (1).png'

export function Projects() {
    return (
        <div className='mt-16 w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto bg-black'>
            <NavBar />
            <div />
            <div className="grid w-full h-auto gap-4 p-6 sm:grid-cols-[repeat(auto-fit,8rem)]">
                <Link key={1} to="/projects/map" className="relative flex flex-col items-start justify-between w-full p-2 overflow-hidden aspect-square">
                    <p className="text-white z-10 text-[12px] text-clip w-full h-fit">THE MAP IS NOT THE TERRITORY</p>
                    <p className="text-white z-10 text-[12px] text-clip w-full h-fit">ESAD </p>
                    <p className="text-white z-10 text-[12px] text-clip w-full h-fit">02 | 2024 </p>
                    <img src={poster} alt="THE MAP IS NOT THE TERRITORY" className="absolute top-0 left-0 w-full brightness-[40%] hover:brightness-[50%] transition-all duration-200" />
                </Link>
                {
                    projectsData.map((project, index) => (
                        <Link key={index} to={`/projects/${project.id}`} className="relative flex flex-col items-start justify-between w-full p-2 overflow-hidden aspect-square">
                            <p className="text-white z-10 text-[12px] text-clip w-full h-fit uppercase">{project.title}</p>
                            <p className="text-white z-10 text-[12px] text-clip w-full h-fit">{project.projectType.join(", ")}</p>
                            <p className="text-white z-10 text-[12px] text-clip w-full h-fit">{project.date}</p>
                            <img src={project.banner ?? 'favicon.ico'} alt={project.title} className="absolute top-0 h-full bg-white bg-cover left-0 w-full brightness-[40%] hover:brightness-[50%] transition-all duration-200" />
                        </Link>
                    ))
                }
            </div>
            <Footer />
        </div>
    );
}

