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

export interface Project {
    id: number;
    title: string;
    description: string;
    tech_stack: string[];
    image: string;
    link: string;
    repo: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    text: string;
}
