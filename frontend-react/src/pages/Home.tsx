import { useEffect, useRef } from "react";
import anime from "animejs";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        anime({
            targets: heroRef.current?.children,
            translateY: [20, 0],
            opacity: [0, 1],
            delay: anime.stagger(100),
            easing: "easeOutExpo",
            duration: 800,
        });
    }, []);

    return (
        <div className="min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-color filter blur-xl opacity-30 dark:opacity-20 animate-blob"></div>
            <div className="absolute top-40 -left-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-color filter blur-xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>

            <div ref={heroRef} className="max-w-5xl mx-auto space-y-8 relative z-10">
                <h3 className="text-xl md:text-2xl text-blue-500 dark:text-blue-400 font-medium">Hola, soy</h3>
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Jharod Hidalgo
                </h1>
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">
                    Full Stack Developer & Data Analyst
                </h2>

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                    Convierto datos complejos en decisiones claras y construyo aplicaciones web ágiles y robustas.
                    Combino la potencia de <span className="text-slate-900 dark:text-white font-semibold">Laravel & Python</span> con la interactividad de <span className="text-slate-900 dark:text-white font-semibold">React</span> para crear soluciones de impacto.
                </p>

                <div className="flex flex-wrap gap-4 pt-8">
                    <Link
                        to="/projects"
                        className="group inline-flex items-center px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
                    >
                        Ver Portafolio
                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/contact"
                        className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-lg hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        Contactar
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
