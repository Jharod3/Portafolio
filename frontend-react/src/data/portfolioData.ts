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
        },
        {
            institution: 'NODO - EAFIT',
            degree: 'Análisis de Datos para Profesionales',
            year: '2026'
        },
        {
            institution: 'Udemy',
            degree: 'React: De cero a Experto',
            year: '2023'
        },
        {
            institution: 'Programa de formación digital Conecta Empleo',
            degree: 'Programación con JavaScript',
            year: '2022'
        }
    ],
    skills: {
        'Frontend': ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'TailwindCSS', 'Leaflet'],
        'Backend': ['PHP', 'NodeJS', 'Python', 'Java'],
        'Data': ['PowerBI', 'SQL', 'MySQL', 'Excel', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'DAX', 'Deneb (Vega-Lite)', 'Jupyter Notebook'],
        'Tools': ['Git', 'VS Code', 'Scrum', 'Claude Code', 'RapidAPI', 'Google Auth', 'NVIDIA NIM APIs']
    }
};

export const projectsData: Project[] = [
    {
        id: 1,
        title: 'Login COMPAN',
        description: 'Desarrollé el login de COMPAN integrando habilidades de Frontend, Backend y análisis de datos. Implementé un tablero dinámico de productos por municipio, realizando procesos de limpieza, normalización y transformación de datos para garantizar información clara y consistente.',
        tech_stack: ['Python', 'PowerBI', 'Leaflet', 'CSS3', 'JavaScript', 'HTML5'],
        image: '/img/Login_COMPAN.png',
        link: 'https://compan.antioquia.gov.co/login',
        repo: '#Aplicación pública, desarrollada para la gobernación de Antioquia'
    },
    {
        id: 2,
        title: 'Análisis de víctimas en accidentes viales',
        description: 'Proyecto de análisis de datos y visualización interactiva sobre víctimas en incidentes viales en la ciudad de Medellín, utilizando Python, Pandas y Power BI para limpieza, modelado y análisis exploratorio de datos. El objetivo principal es identificar patrones temporales, demográficos y territoriales asociados a la accidentalidad vial, proporcionando evidencia analítica para la comprensión del fenómeno.',
        tech_stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'Deneb (Vega-Lite)', 'DAX', 'CSV', 'Notebook (Jupyter)'],
        image: '/img/dashboard.png',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiNzBkMzUxZjQtNWMyZi00YjhmLThhMDQtOGJlZTU4NjU3NWJiIiwidCI6Ijk5ZjdiNTVlLTljYmUtNDY3Yi04MTQzLTkxOTc4MjkxOGFmYiIsImMiOjR9',
        repo: 'https://github.com/Jharod3/Proyecto'
    },
    {
        id: 3,
        title: 'Finanzas App',
        description: 'Aplicación moderna para la gestión financiera personal, desarrollada con una arquitectura en servicios de Laravel e integración de IA, en chatbot, sugerencias inteligentes y noticias financieras en tiempo real para ofrecer análisis y contexto sobre las finanzas del usuario.',
        tech_stack: ['React', 'TypeScript', 'Tailwind', 'JavaScript', 'PHP', 'CLAUDE CODE', 'NVIDIA NIM APIS', 'GOOGLE AUTH', 'RapidAPI'],
        image: '/img/app_fianzas.png',
        link: 'https://app-finanzas-flax.vercel.app/',
        repo: 'https://github.com/Jharod3/App_Finanzas'
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
