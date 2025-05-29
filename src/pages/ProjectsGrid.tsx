import React from 'react';
import { NavBar } from '../components/navBar';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

type ProjectProps = {
    to: string;
    id?: string;
    collaborators: string[] | string;
    projectType: string[] | string;
    tags: string[] | string;
    banner: string;
    alt: string;
    date?: string;
};

export default function ProjectsGrid() {

    const sortedProjects = projectsData.sort((a, b) => {
        const priorityA = a.priority || 0;
        const priorityB = b.priority || 0;
        if (priorityA !== priorityB) {
            return priorityA - priorityB;
        }
        return new Date(b.date || '').getTime() - new Date(a.date || '').getTime();
    });

    function Project({ to, id, collaborators, projectType, tags, banner, date, alt }: ProjectProps) {
        return (
            <Link to={to} className="relative flex flex-col w-full group gap-2">
                <img
                    src={banner}
                    alt={alt}
                    className=''
                />
                <div className='text-[.7rem] leading-[12px]'>
                    <p className="uppercase">{Array.isArray(projectType) ? projectType.join(", ") : projectType} /
                        {Array.isArray(collaborators) ? collaborators.join(", ") : collaborators} /
                        {Array.isArray(tags) ? tags.join(", ") : tags}
                    </p>
                    {date && <p className="uppercase">{date}</p>}
                    {id && <p className="uppercase">ID {id}</p>}
                </div>
            </Link>
        );
    }

    return (
        <div className='w-full h-full min-h-screen justify-between flex flex-col overflow-x-hidden'>
            <NavBar />
            <div className="grid lg:grid-cols-6 sm:grid-cols-4 w-full h-full gap-4 p-4 mt-12">

                <div className='flex flex-col gap-4 lg:col-span-2'>
                    {sortedProjects
                        .filter(project => project.id === "000 000 001 910 24" || project.id === "000 000 002 008 24")
                        .map(project => (
                            <Project
                                key={project.id}
                                to={project.href || "#"}
                                id={project.id}
                                collaborators={project.collaborators}
                                projectType={project.projectType}
                                tags={project.tags}
                                banner={project.banner || ""}
                                alt={project.title}
                                date={project.date}
                            />
                        ))}
                </div>

                <div className='flex flex-col gap-4 lg:col-span-2 col-span-1'>
                    <div className="flex flex-col lg:flex-row gap-4">
                        {sortedProjects
                            .filter(project => project.id === "000 000 002 203 21" || project.id === "000 000 002 310 245")
                            .map(project => (
                                <Project
                                    key={project.id}
                                    to={project.href || "#"}
                                    id={project.id}
                                    collaborators={project.collaborators}
                                    projectType={project.projectType}
                                    tags={project.tags}
                                    banner={project.banner || ""}
                                    alt={project.title}
                                    date={project.date}
                                />
                            ))}
                    </div>
                    <div>
                        {sortedProjects
                            .filter(project => project.id === "0001")
                            .map(project => (
                                <Project
                                    key={project.id}
                                    to={project.href || "#"}
                                    id={project.id}
                                    collaborators={project.collaborators}
                                    projectType={project.projectType}
                                    tags={project.tags}
                                    banner={project.banner || ""}
                                    alt={project.title}
                                    date={project.date}
                                />
                            ))}
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                        {sortedProjects
                            .filter(project => project.id === "000 000 002 310 24" || project.id === "000 000 002 203 21")
                            .map(project => (
                                <Project
                                    key={project.id}
                                    to={project.href || "#"}
                                    id={project.id}
                                    collaborators={project.collaborators}
                                    projectType={project.projectType}
                                    tags={project.tags}
                                    banner={project.banner || ""}
                                    alt={project.title}
                                    date={project.date}
                                />
                            ))}
                    </div>
                </div>

                <div className='flex flex-col gap-4 col-span-1'>
                    {sortedProjects
                        .filter(project => project.id === "000 000 002 310 24" || project.id === "000 000 001 703 24" || project.id === "000 000 002 203 21" || project.id === "000 000 000 305 21")
                        .map(project => (
                            <Project
                                key={project.id}
                                to={project.href || "#"}
                                id={project.id}
                                collaborators={project.collaborators}
                                projectType={project.projectType}
                                tags={project.tags}
                                banner={project.banner || ""}
                                alt={project.title}
                                date={project.date}
                            />
                        ))}
                </div>


                <div className='flex flex-col gap-4 col-span-1'>
                    {sortedProjects
                        .filter(project => project.id === "000 000 000 303 23" || project.id === "000 000 001 105 25" || project.id === "000 000 000 000 22" || project.id === "000 000 002 306 24")
                        .map(project => (
                            <Project
                                key={project.id}
                                to={project.href || "#"}
                                id={project.id}
                                collaborators={project.collaborators}
                                projectType={project.projectType}
                                tags={project.tags}
                                banner={project.banner || ""}
                                alt={project.title}
                                date={project.date}
                            />
                        ))}
                </div>

            </div>
        </div>
    );
}

