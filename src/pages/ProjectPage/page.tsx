import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Project, projectsData } from '../../data/projects';
import { NavBar } from '../../components/navBar';

const ProjectPage = () => {
    const { id } = useParams();

    const [currentLanguage, setCurrentLanguage] = useState('EN');
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundProject = projectsData.find(p => p.id === id);
        if (foundProject) {
            setProject(foundProject as Project);
        }
        setLoading(false);
    }, [id]);

    const toggleLanguage = () => {
        setCurrentLanguage(currentLanguage === 'EN' ? 'PT' : 'EN');
    };

    const formatDate = () => {
        const now = new Date();
        return `${now.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })} ${now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        })}`;
    };

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen bg-white">Loading...</div>;
    }

    if (!project) {
        return <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <p>Project not found</p>
            <Link to="/projects" className="text-blue-500 hover:underline">Go back</Link>
        </div>;
    }

    // Get the project index for navigation
    const currentIndex = projectsData.findIndex(p => p.id === id);
    const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
    const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

    return (
        <div className="min-h-screen mt-16 font-mono text-black bg-white">
            <NavBar />
            <div className="flex flex-col md:flex-row">
                {/* Left sidebar */}
                <div className="w-full p-4 md:w-1/4">
                    <div className="mb-8">
                        <div className="flex items-center">
                            <span>SEARCH</span>
                            <span className="ml-1 text-gray-500">SYSTEM™</span>
                        </div>
                    </div>

                    {/* Red number and text */}
                    <div className="relative mt-40">
                        <div className="text-red-600 text-[180px] font-bold leading-none">
                            {project.id.split(' ')[4] || '08'}
                        </div>
                        <div className="text-red-600 text-[60px] font-bold leading-none tracking-widest vertical-text">
                            {project.projectType[0]?.split('/')[0] || 'BRIL'}
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <div className="relative flex-1">
                    {/* Main image and title */}
                    <div className="relative">
                        <img
                            src={project.image || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YRKlwjYYZlgmCRTcNBPyMra06MCVyv.png"}
                            alt={project.title}
                            className="w-full h-auto"
                        />
                        <div className="absolute left-0 w-full top-1/4">
                            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                                {project.title}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Right sidebar */}
                <div className="w-full p-4 md:w-1/4">
                    <div className="flex justify-between mb-4">
                        <div className="flex space-x-4">
                            <a href="#" className="text-xs">ARCHIVE</a>
                            <a href="#" className="text-xs">INDEX</a>
                            <a href="#" className="text-xs">INFO</a>
                            <a href="#" className="text-xs">SHOP</a>
                            <a href="#" className="text-xs">RANDOM</a>
                            <a href="#" className="text-xs">THEME</a>
                        </div>
                        <div>○</div>
                    </div>

                    {/* Metadata */}
                    <div className="mt-20 space-y-8 text-xs">
                        <div className="flex justify-between">
                            <div>DATE</div>
                            <div className="text-right">
                                {project.date}
                            </div>
                        </div>

                        {project.collaborators && project.collaborators.length > 0 && (
                            <div className="flex justify-between">
                                <div>WITH</div>
                                <div className="text-right">
                                    {project.collaborators.join(', ')}
                                </div>
                            </div>
                        )}

                        {project.tags && project.tags.length > 0 && (
                            <div className="flex justify-between">
                                <div>TAGS</div>
                                <div className="text-right">
                                    {project.tags.map((tag, index) => (
                                        <div key={index}>{tag}</div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="flex justify-between">
                            <div>NOTES</div>
                            <div className="text-right">{project.notes}</div>
                        </div>

                        <div className="flex justify-between">
                            <div>ID</div>
                            <div className="text-right">{project.id}</div>
                        </div>

                        <div className="flex justify-between">
                            <div>SHARE</div>
                            <div className="text-right">
                                <div>FACEBOOK</div>
                                <div>LINKEDIN</div>
                                <div>PINTEREST</div>
                                <div>TUMBLR</div>
                                <div>TWITTER</div>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <div>NAVIGATION</div>
                            <div className="text-right">
                                {prevProject && (
                                    <Link to={`/project/${prevProject.id}`} className="block">PREVIOUS</Link>
                                )}
                                {nextProject && (
                                    <Link to={`/project/${nextProject.id}`} className="block">NEXT</Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project description */}
            <div className="container max-w-3xl px-4 py-16 mx-auto">
                <div className="prose prose-lg">
                    {currentLanguage === 'EN' ? (
                        <p className="whitespace-pre-line">{project.info_en}</p>
                    ) : (
                        <p className="whitespace-pre-line">{project.info_pt}</p>
                    )}
                </div>
            </div>

            {/* Current date display */}
            <div className="absolute text-xs top-4 right-4">
                {formatDate()}
            </div>
        </div>
    );
};

export default ProjectPage;