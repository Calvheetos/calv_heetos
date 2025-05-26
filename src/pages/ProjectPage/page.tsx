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

    if (loading || !project) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex flex-col w-full h-full pt-20 md:flex-row">
            <NavBar />
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
                <div className="flex flex-col w-full p-6 md:w-1/2 md:p-12">
                    <div className="flex items-center justify-between mb-8">
                        <button className="text-sm uppercase hover:underline" onClick={() => setLanguage("pt")}>
                            PT
                        </button>
                        <button className="text-sm uppercase hover:underline" onClick={() => setLanguage("en")}>
                            EN
                        </button>
                    </div>

                    <div className="flex-grow space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-sm text-gray-500 uppercase">DATE</h3>
                                <p className="text-sm">{project.date}</p>
                            </div>

                            {project.collaborators.length > 0 && (
                                <div>
                                    <h3 className="text-sm text-gray-500 uppercase">WITH</h3>
                                    <div>
                                        {project.collaborators.map((collaborator, index) => (
                                            <p key={index} className="text-sm">
                                                {collaborator}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            <h3 className="text-sm text-gray-500 uppercase">TAGS</h3>
                            <div className="flex flex-wrap gap-1 mt-1">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="text-sm">
                                        {tag}
                                        {index < project.tags.length - 1 && ", "}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm text-gray-500 uppercase">NOTES</h3>
                            <p className="text-sm">{project.notes}</p>
                        </div>

                        <div>
                            <h3 className="text-sm text-gray-500 uppercase">ID</h3>
                            <p className="text-sm">{project.id}</p>
                        </div>

                        {project.share && (
                            <div>
                                <h3 className="text-sm text-gray-500 uppercase">SHARE</h3>
                                <div className="flex mt-1 space-x-2">
                                    <a href="#" className="text-sm hover:underline">
                                        FACEBOOK
                                    </a>
                                    <a href="#" className="text-sm hover:underline">
                                        AEDIN
                                    </a>
                                    <a href="#" className="text-sm hover:underline">
                                        PINTEREST
                                    </a>
                                    <a href="#" className="text-sm hover:underline">
                                        TUMBLR
                                    </a>
                                    <a href="#" className="text-sm hover:underline">
                                        TWITTER
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-8">
                        <h3 className="text-sm text-gray-500 uppercase">NAVIGATION</h3>
                        <div className="flex justify-between mt-1">
                            <a href="#" className="text-sm hover:underline">
                                PREVIOUS
                            </a>
                            <a href="#" className="text-sm hover:underline">
                                NEXT
                            </a>
                        </div>
                    </div>

                    <div className="mt-8">
                        <p className="text-sm leading-relaxed">{language === "pt" ? project.info_pt : project.info_en}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
