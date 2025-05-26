import { useEffect, useState } from "react"
import { Project, projectsData } from '../../data/projects';
import { useParams } from "react-router-dom";
import { NavBar } from "../../components/navBar";
import { Footer } from "../../components/footer";
import ImageCarousel from "../../components/carousel-autoplay";

export default function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const [language, setLanguage] = useState<"pt" | "en">("en")
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        const foundProject = projectsData.find(p => p.id === id);
        if (foundProject) {
            setProject(foundProject as Project);
        }
        setLoading(false);
    }, [id]);

    const prevProject = () => {
        if (!project) return;
        const currentIndex = projectsData.findIndex(p => p.id === project.id);
        const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
        setProject(projectsData[prevIndex]);
    };

    const nextProject = () => {
        if (!project) return;
        const currentIndex = projectsData.findIndex(p => p.id === project.id);
        const nextIndex = (currentIndex + 1) % projectsData.length;
        setProject(projectsData[nextIndex]);
    };

    if (loading || !project) {
        return <div>Loading...</div>
    }

    return (
        <div className="relative flex flex-col w-full h-full pt-16 pb-8 md:flex-row">
            <NavBar />
            <div className="absolute hidden -translate-x-1/2 top-4 left-1/2 md:flex">
                <div className="flex justify-center space-x-4">
                    <button className="text-sm uppercase transition-all hover:font-bold" onClick={() => setLanguage("pt")}>
                        PT
                    </button>
                    <span>—</span>
                    <button className="text-sm uppercase transition-all hover:font-bold" onClick={() => setLanguage("en")}>
                        EN
                    </button>
                </div>
            </div>

            <div className="flex flex-col w-full h-full md:flex-row">
                {/* Left side - Image */}
                <div className="w-full md:w-1/2">
                    <ImageCarousel
                        images={project.images?.length ? project.images : [project.banner ?? 'favicon.ico']}
                        altPrefix={"Project Image"}
                        interval={5000}
                    />
                </div>

                {/* Right side - Information */}
                <div className="flex flex-col gap-10 w-full p-6 text-[.7rem] md:w-1/2 md:p-12">

                    <div className="flex flex-row justify-between w-full uppercase">
                        <p className="w-full">
                            {project.projectType.join(", ")}
                        </p>
                        <div className="flex flex-col w-full gap-10">
                            <p>{language === "pt" ? "DATA" : "DATE"}</p>
                            <p>{language === "pt" ? "COM" : "WITH"}</p>
                            <p>TAGS</p>
                            <p>{language === "pt" ? "NOTAS" : "NOTES"}</p>
                            <p>ID</p>
                        </div>
                        <div className="flex flex-col w-full gap-10">
                            <p>{project.date}</p>
                            <p>{project.collaborators.join(", ")}</p>
                            <p>{project.tags.join(", ")}</p>
                            <p>{project.notes}</p>
                            <p>{project.id}</p>
                        </div>
                    </div>

                    {project.links && Object.keys(project?.links).length && <div className="flex flex-row justify-between w-full uppercase">
                        <p className="w-full">
                            {language === "pt" ? "PARTILHAR" : "SHARE"}
                        </p>
                        <div className="flex flex-col w-full">
                            {
                                project.links &&
                                Object.keys(project.links).map((key: string) => (
                                    <a
                                        key={key}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={project.links![key]}
                                        className="uppercase cursor-pointer hover:underline"
                                    >
                                        {key}
                                    </a>
                                ))
                            }
                        </div>
                        <div className="w-full"></div>
                    </div>}

                    <div className="flex flex-row justify-between w-full uppercase">
                        <p className="w-full">
                            {language === "pt" ? "NAVEGAÇÃO" : "NAVIGATION"}
                        </p>
                        <div className="flex flex-col items-start w-full text-left">
                            <button className="hover:underline" onClick={prevProject}>PREVIOUS</button>
                            <button className="hover:underline" onClick={nextProject}>NEXT</button>
                        </div>
                        <div className="w-full"></div>
                    </div>

                    <div>
                        <p className="leading-relaxed">{language === "pt" ? project.info_pt : project.info_en}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
