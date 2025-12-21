import { useEffect } from 'react';
import anime from 'animejs';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    useEffect(() => {
        anime({
            targets: '.animate-item',
            translateY: [20, 0],
            opacity: [0, 1],
            delay: anime.stagger(150),
            easing: "easeOutExpo",
            duration: 800,
        });
    }, []);

    return (
        <div className="pt-24 px-4 max-w-4xl mx-auto pb-20 min-h-[80vh] flex flex-col justify-center">
            <div className="text-center mb-16 animate-item">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                    Contáctame
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    ¿Tienes algún proyecto en mente o simplemente quieres saludar?
                    ¡Estoy disponible para nuevas oportunidades!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 animate-item">
                <a
                    href="mailto:jharod3@gmail.com"
                    className="group flex flex-col items-center p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
                >
                    <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-full text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                        <FaEnvelope className="text-3xl" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">jharod3@gmail.com</p>
                </a>

                <a
                    href="https://wa.me/573507085473"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-800 hover:border-green-500 dark:hover:border-green-500 transition-all duration-300"
                >
                    <div className="p-4 bg-green-50 dark:bg-slate-800 rounded-full text-green-500 mb-4 group-hover:scale-110 transition-transform">
                        <FaWhatsapp className="text-3xl" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">WhatsApp</h3>
                    <p className="text-gray-600 dark:text-gray-400">+57 350 708 5473</p>
                </a>
            </div>

            <div className="mt-16 flex justify-center gap-8 animate-item">
                <SocialLink
                    href="https://github.com/Jharod3"
                    icon={<FaGithub />}
                    label="GitHub"
                />
                <SocialLink
                    href="https://www.linkedin.com/in/jharod-hidalgo-534432241/"
                    icon={<FaLinkedin />}
                    label="LinkedIn"
                />
            </div>
        </div>
    );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="transform hover:-translate-y-1 transition-transform p-3 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-slate-700 hover:shadow-lg text-2xl"
        aria-label={label}
    >
        {icon}
    </a>
);

export default Contact;
