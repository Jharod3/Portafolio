import { useEffect, useState } from 'react';
import { getProjects } from '../services/api';
import type { Project } from '../services/api';
// @ts-ignore
import anime from 'animejs';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProjects()
            .then(setProjects)
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        if (!loading && projects.length > 0) {
            anime({
                targets: '.project-card',
                translateY: [20, 0],
                opacity: [0, 1],
                delay: anime.stagger(150),
                easing: "easeOutExpo",
                duration: 800,
            });
        }
    }, [loading, projects]);

    if (loading) return (
        <div className="pt-24 px-4 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
                <div key={i} className="bg-gray-200 dark:bg-slate-800 h-96 rounded-xl animate-pulse"></div>
            ))}
        </div>
    );

    return (
        <div className="pt-24 px-4 max-w-7xl mx-auto pb-20">
            <h1 className="text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">Proyectos Destacados</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="project-card opacity-0 bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        <div className="aspect-[3/2] overflow-hidden bg-gray-100 dark:bg-slate-800 relative group">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x400'; }}
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                {project.link && <a href={project.link} target="_blank" rel="noopener" className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition"><FaExternalLinkAlt /></a>}
                                {project.repo && (
                                    project.repo.startsWith('#') ? (
                                        <span
                                            title={project.repo.slice(1)}
                                            className="p-3 bg-white/70 rounded-full text-slate-400 cursor-not-allowed"
                                        >
                                            <FaGithub />
                                        </span>
                                    ) : (
                                        <a href={project.repo} target="_blank" rel="noopener" className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition"><FaGithub /></a>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech_stack?.map((tech, i) => (
                                    <span key={i} className="px-2 py-1 text-xs font-semibold bg-gray-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Projects;
