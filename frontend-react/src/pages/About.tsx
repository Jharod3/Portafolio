import { useEffect, useState } from 'react';
import { getAbout } from '../services/api';
import type { AboutData } from '../services/api';
import anime from 'animejs';

const About = () => {
    const [data, setData] = useState<AboutData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAbout().then(setData).catch(console.error).finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        if (!loading && data) {
            anime({
                targets: '.animate-item',
                translateY: [20, 0],
                opacity: [0, 1],
                delay: anime.stagger(100),
                easing: "easeOutExpo",
                duration: 800,
            });
        }
    }, [loading, data]);

    if (loading) return (
        <div className="pt-24 px-4 max-w-4xl mx-auto space-y-8 animate-pulse">
            <div className="h-10 bg-gray-200 dark:bg-slate-700 rounded w-1/4 mb-8"></div>
            <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-3/4 mb-8"></div>
        </div>
    );

    if (!data) return <div className="pt-24 text-center">No se pudo cargar la información. Asegúrate de ejecutar el backend.</div>;

    return (
        <div className="pt-24 px-4 max-w-4xl mx-auto space-y-16 pb-20">
            <section className="animate-item">
                <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white relative inline-block">
                    Sobre mí
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
                </h1>
                <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>{data.bio}</p>
                </div>
            </section>

            <section className="animate-item">
                <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-blue-500 rounded"></span>
                    Experiencia
                </h2>
                <div className="space-y-12">
                    {data.experience.map((exp, idx) => (
                        <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-500 before:rounded-full after:absolute after:left-1.5 after:top-5 after:h-full after:w-0.5 after:bg-gray-200 dark:after:bg-slate-700 last:after:hidden">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wide">{exp.period}</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="grid md:grid-cols-2 gap-12 animate-item">
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Educación</h2>
                    <div className="space-y-6">
                        {data.education.map((edu, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                                <p className="text-blue-500 dark:text-blue-400">{edu.institution}</p>
                                <p className="text-sm text-gray-500">{edu.year}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Habilidades</h2>
                    <div className="space-y-6">
                        {Object.entries(data.skills).map(([category, skills], idx) => (
                            <div key={idx}>
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, sIdx) => (
                                        <span key={sIdx} className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};
export default About;
