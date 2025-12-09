import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
}

export interface Education {
    institution: string;
    degree: string;
    year: string;
}

export interface AboutData {
    name: string;
    role: string;
    bio: string;
    contact: { city: string };
    experience: Experience[];
    education: Education[];
    skills: Record<string, string[]>;
}

export const getAbout = async (): Promise<AboutData> => {
    const response = await api.get('/about');
    return response.data;
};

export interface Project {
    id: number;
    title: string;
    description: string;
    tech_stack: string[];
    image: string;
    link: string;
    repo: string;
}

export const getProjects = async (): Promise<Project[]> => {
    const response = await api.get('/projects');
    return response.data;
};

export interface PowerBIReport {
    id: number;
    title: string;
    embedUrl: string;
    description: string;
}

export const getPowerBI = async (): Promise<PowerBIReport[]> => {
    const response = await api.get('/powerbi');
    return response.data;
};

export interface SocialLink {
    platform: string;
    url: string;
    text: string;
}

export const getSocial = async (): Promise<SocialLink[]> => {
    const response = await api.get('/social');
    return response.data;
};

export default api;
