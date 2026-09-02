import type { AboutData, Project, SocialLink } from '../types';

export const aboutData: AboutData = {
    name: 'Jharod Miguel Hidalgo Osorio',
    role: 'Desarrollador Web Full Stack Jr. & Analista de Datos',
    bio: 'Desarrollador web con experiencia en React, PHP, JavaScript y CodeIgniter, y conocimientos en análisis de datos con SQL, Python y Power BI. Soy responsable, comprometido, leal y perseverante, con capacidad para trabajar en equipo y tomar decisiones orientadas al cumplimiento de objetivos. Me apasiona seguir aprendiendo y construir soluciones centradas en la experiencia de usuario y el análisis de información.',
    contact: {
        city: 'Copacabana, Antioquia'
    },
    experience: [
        {
            company: 'Valor+ · Gobernación de Antioquia (Dirección de TI)',
            role: 'Desarrollador Web Full Stack',
            period: 'Abril 2024 - Presente · Medellín, Colombia',
            description: 'Desarrollo de flujos automatizados en Python conectados a Power BI para tableros y visualizaciones estratégicas. Construcción de aplicaciones dinámicas con CodeIgniter, PHP y MySQL, y mejora de la interfaz con React y JavaScript. Gestión y limpieza de datos desde APIs externas y archivos Excel, y creación de dashboards interactivos que incrementaron el uso de la plataforma.'
        },
        {
            company: 'QCode',
            role: 'Desarrollador Frontend Jr',
            period: 'Abril 2023 - Octubre 2023',
            description: 'Apoyo al equipo técnico en la creación, mantenimiento y optimización de interfaces web con React.js, mediante maquetación y componentes reutilizables con diseño limpio, accesible y alineado a estándares modernos.'
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
        'Lenguajes': ['Python', 'SQL', 'JavaScript', 'TypeScript', 'PHP'],
        'Frontend': ['React', 'HTML5', 'CSS3', 'TailwindCSS', 'Leaflet'],
        'Backend': ['PHP', 'CodeIgniter', 'NodeJS', 'Java'],
        'Datos & BI': ['Power BI', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'DAX', 'Deneb (Vega-Lite)', 'MySQL', 'Excel'],
        'Herramientas': ['Git', 'Azure DevOps', 'Jupyter Notebook', 'Google Sheets', 'Notion', 'Jira', 'VS Code', 'Scrum', 'Claude Code', 'RapidAPI', 'Google Auth', 'NVIDIA NIM APIs']
    }
};

export const projectsData: Project[] = [
    {
        id: 1,
        title: 'Login COMPAN',
        description: 'Desarrollé el login de COMPAN integrando habilidades de Frontend, Backend y análisis de datos. Implementé un tablero dinámico de productos por municipio, realizando procesos de limpieza, normalización y transformación de datos para garantizar información clara y consistente.',
        tech_stack: ['Python', 'PowerBI', 'Leaflet', 'CSS3', 'JavaScript', 'HTML5'],
        image: `${import.meta.env.BASE_URL}img/Login_COMPAN.png`,
        link: 'https://compan.antioquia.gov.co/login',
        repo: '#Aplicación pública, desarrollada para la gobernación de Antioquia'
    },
    {
        id: 2,
        title: 'Análisis de víctimas en accidentes viales',
        description: 'Proyecto de análisis de datos y visualización interactiva sobre víctimas en incidentes viales en la ciudad de Medellín, utilizando Python, Pandas y Power BI para limpieza, modelado y análisis exploratorio de datos. El objetivo principal es identificar patrones temporales, demográficos y territoriales asociados a la accidentalidad vial, proporcionando evidencia analítica para la comprensión del fenómeno.',
        tech_stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'Deneb (Vega-Lite)', 'DAX', 'CSV', 'Notebook (Jupyter)'],
        image: `${import.meta.env.BASE_URL}img/dashboard.png`,
        link: 'https://app.powerbi.com/view?r=eyJrIjoiNzBkMzUxZjQtNWMyZi00YjhmLThhMDQtOGJlZTU4NjU3NWJiIiwidCI6Ijk5ZjdiNTVlLTljYmUtNDY3Yi04MTQzLTkxOTc4MjkxOGFmYiIsImMiOjR9',
        repo: 'https://github.com/Jharod3/Proyecto'
    },
    {
        id: 3,
        title: 'Finanzas App',
        description: 'Aplicación moderna para la gestión financiera personal, desarrollada con una arquitectura en servicios de Laravel e integración de IA, en chatbot, sugerencias inteligentes y noticias financieras en tiempo real para ofrecer análisis y contexto sobre las finanzas del usuario.',
        tech_stack: ['React', 'TypeScript', 'Tailwind', 'JavaScript', 'PHP', 'CLAUDE CODE', 'NVIDIA NIM APIS', 'GOOGLE AUTH', 'RapidAPI'],
        image: `${import.meta.env.BASE_URL}img/app_fianzas.png`,
        link: 'https://app-finanzas-flax.vercel.app/',
        repo: 'https://github.com/Jharod3/App_Finanzas'
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
