import { aboutData, projectsData, socialData } from '../data/portfolioData';
import type { AboutData, Project, SocialLink } from '../types';

export type { AboutData, Project, SocialLink } from '../types';
export type { Experience, Education } from '../types'; // Re-export nested types if needed by consumers

// Mock delay to simulate network request (optional, for effect)
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getAbout = async (): Promise<AboutData> => {
    await delay(300); // Small delay for skeleton animation
    return aboutData;
};

export const getProjects = async (): Promise<Project[]> => {
    await delay(400);
    return projectsData;
};

export const getSocial = async (): Promise<SocialLink[]> => {
    await delay(100);
    return socialData;
};
