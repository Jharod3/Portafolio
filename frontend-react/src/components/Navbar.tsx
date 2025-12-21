import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi';
import clsx from 'clsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const location = useLocation();

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                        JH
                    </Link>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            <NavLink to="/" active={isActive('/')}>Home</NavLink>
                            <NavLink to="/about" active={isActive('/about')}>Sobre mí</NavLink>
                            <NavLink to="/projects" active={isActive('/projects')}>Proyectos</NavLink>
                            <NavLink to="/powerbi" active={isActive('/powerbi')}>PowerBI</NavLink>
                            <NavLink to="/contact" active={isActive('/contact')}>Contacto</NavLink>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-yellow-500 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Toggle Dark Mode"
                        >
                            {theme === 'dark' ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
                        </button>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none transition-colors"
                                aria-label="Menu"
                            >
                                {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={clsx("md:hidden transition-all duration-300 overflow-hidden", isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0")}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-slate-900 shadow-xl border-b border-gray-200 dark:border-slate-800">
                    <MobileNavLink to="/" onClick={() => setIsOpen(false)} active={isActive('/')}>Home</MobileNavLink>
                    <MobileNavLink to="/about" onClick={() => setIsOpen(false)} active={isActive('/about')}>Sobre mí</MobileNavLink>
                    <MobileNavLink to="/projects" onClick={() => setIsOpen(false)} active={isActive('/projects')}>Proyectos</MobileNavLink>
                    <MobileNavLink to="/powerbi" onClick={() => setIsOpen(false)} active={isActive('/powerbi')}>PowerBI</MobileNavLink>
                    <MobileNavLink to="/contact" onClick={() => setIsOpen(false)} active={isActive('/contact')}>Contacto</MobileNavLink>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) => (
    <Link
        to={to}
        className={clsx(
            "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative group",
            active
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300"
        )}
    >
        {children}
        <span className={clsx(
            "absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform transition-transform duration-200 scale-x-0 origin-left",
            active ? "scale-x-100" : "group-hover:scale-x-100"
        )} />
    </Link>
);

const MobileNavLink = ({ to, children, onClick, active }: { to: string; children: React.ReactNode; onClick: () => void; active: boolean }) => (
    <Link
        to={to}
        onClick={onClick}
        className={clsx(
            "block px-3 py-2 rounded-md text-base font-medium transition-colors",
            active
                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-blue-500"
        )}
    >
        {children}
    </Link>
);

export default Navbar;
