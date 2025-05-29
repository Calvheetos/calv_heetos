import { Link } from "react-router-dom";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navBar";
import { projectsData } from '../data/projects';

type ProjectProps = {
    to: string;
    title: string;
    projectType: string | string[];
    date: string;
    banner: string;
    alt: string;
    href?: string;
};

function Project({ to, title, projectType, date, banner, alt }: ProjectProps) {
    return (
        <Link to={to} className="relative flex flex-col items-start justify-between w-full p-2 overflow-hidden aspect-square group sm:text-[12px] text-[20px]">
            <p className="text-white z-10 text-clip w-full h-fit uppercase">{title}</p>
            <p className="text-white z-10 text-clip w-full h-fit">
                {Array.isArray(projectType) ? projectType.join(", ") : projectType}
            </p>
            <p className="text-white z-10 text-clip w-full h-fit">{date}</p>
            <img
                src={banner}
                alt={alt}
                className="absolute top-0 left-0 w-full h-full object-cover brightness-[20%] group-hover:brightness-[50%] transition-all duration-200"
            />
        </Link>
    );
}

export function Projects() {
    return (
        <div className='w-full h-full min-h-screen justify-between flex flex-col overflow-x-hidden bg-black'>
            <NavBar />
            <div className="grid w-full h-full gap-4 p-6 sm:grid-cols-[repeat(auto-fit,8rem)] mt-16">
                {projectsData.map((project, index) => (
                    <Project
                        key={project.id ?? index}
                        to={project.href ? project.href : `/projects/${project.id}`}
                        title={project.title}
                        projectType={project.projectType}
                        date={project.date}
                        banner={project.banner ?? 'favicon.ico'}
                        alt={project.title}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}
