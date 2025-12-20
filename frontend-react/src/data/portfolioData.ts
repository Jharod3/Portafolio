import type { AboutData, Project, PowerBIReport, SocialLink } from '../types';

export const aboutData: AboutData = {
    name: 'Jharod Miguel Hidalgo',
    role: 'Full Stack Web Developer & Data Analyst',
    bio: 'Desarrollador web full stack y analista de datos con experiencia en Python, PowerBI, React, PHP y SQL. Apasionado por el aprendizaje continuo y el diseño UX. Experiencia en creación de interfaces dinámicas y automatización de procesos.',
    contact: {
        city: 'Copacabana, Antioquia'
    },
    experience: [
        {
            company: 'Gobernación de Antioquia',
            role: 'Desarrollador web full stack',
            period: 'Abril 2024 - Presente',
            description: 'Implementación de flujos automatizados en Python para PowerBI. Desarrollo de aplicaciones con CodeIgniter, PHP y MySQL. Gestión de datos de API externas y limpieza/normalización.'
        },
        {
            company: 'QCode',
            role: 'Desarrollador frontend Jr',
            period: 'Abril 2023 - Octubre 2023',
            description: 'Creación y mantenimiento de interfaces con React.js. Desarrollo de componentes reutilizables y formularios dinámicos.'
        }
    ],
    education: [
        {
            institution: 'CESDE',
            degree: 'Técnico Laboral en Desarrollo de Software',
            year: '2023'
        },
        {
            institution: 'MINTIC',
            degree: 'Diplomado Fundamentos en Analítica de Datos',
            year: '2022'
        },
        {
            institution: 'Comfama',
            degree: 'Inglés B1',
            year: '2022'
        }
    ],
    skills: {
        'Frontend': ['React', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS'],
        'Backend': ['PHP', 'NodeJS', 'Python', 'Java'],
        'Data': ['PowerBI', 'SQL', 'MySQL', 'Excel'],
        'Tools': ['Git', 'VS Code', 'Scrum']
    }
};

export const projectsData: Project[] = [
    {
        id: 1,
        title: 'Gobernación Automation Dashboard',
        description: 'Sistema de automatización en Python que alimenta tableros de PowerBI para la toma de decisiones estratégicas.',
        tech_stack: ['Python', 'PowerBI', 'ETL'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        link: '#',
        repo: '#'
    },
    {
        id: 2,
        title: 'Gestor Documental Dinámico',
        description: 'Aplicación web para la gestión de documentos y procesos utilizando CodeIgniter y MySQL.',
        tech_stack: ['PHP', 'CodeIgniter', 'MySQL'],
        image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
        link: '#',
        repo: '#'
    },
    {
        id: 3,
        title: 'React UI Kit',
        description: 'Colección de componentes React reutilizables y accesibles desarrollada para estandarizar interfaces.',
        tech_stack: ['React', 'TypeScript', 'Tailwind'],
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
        link: '#',
        repo: '#'
    }
];

export const powerBIData: PowerBIReport[] = [
    {
        id: 1,
        title: 'Indicadores de Gestión 2024',
        embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=placeholder',
        description: 'Visualización de KPIs estratégicos.'
    }
];

export const socialData: SocialLink[] = [
    {
        platform: 'Email',
        url: 'mailto:jharod3@gmail.com',
        text: 'jharod3@gmail.com'
    },
    {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/jharod-hidalgo',
        text: 'LinkedIn'
    },
    {
        platform: 'GitHub',
        url: 'https://github.com/jharod-hidalgo',
        text: 'GitHub'
    }
];
