import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 py-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                        © {new Date().getFullYear()} Jharod Miguel Hidalgo. All rights reserved.
                    </div>

                    <div className="flex space-x-6">
                        <SocialLink href="https://github.com/jharod-hidalgo" icon={<FaGithub />} label="GitHub" />
                        <SocialLink href="https://linkedin.com/in/jharod-hidalgo" icon={<FaLinkedin />} label="LinkedIn" />
                        <SocialLink href="mailto:jharod3@gmail.com" icon={<FaEnvelope />} label="Email" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-xl"
        aria-label={label}
    >
        {icon}
    </a>
);

export default Footer;
