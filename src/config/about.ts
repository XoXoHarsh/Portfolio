import { LucideIcon } from "lucide-react";
import {
  Brain,
  Laptop,
  Blocks,
  Bot,
  Tv,
  Film,
  Volleyball,
  Coins,
  Newspaper,
} from "lucide-react";

export interface TechStack {
  name: string;
  color: string;
  icon?: string;
}

export interface Interest {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const introduction = {
  personal: `About 22 years of age, Currently in final semester of B-Tech in CSE. Love to play outdoor sports. Challenge me anytime. Interested to meet smart people and learn a lot from them meanwhile sharing my knowledge to get a better understanding of what I know and also to flex :).`,
};

export const techStack: TechStack[] = [
  {
    name: "MongoDB",
    color: "#47A248",
    icon: "/icons/mongodb.svg",
  },
  {
    name: "Express.js",
    color: "#000000",
    icon: "/icons/express.svg",
  },
  {
    name: "React",
    color: "#61DAFB",
    icon: "/icons/react.svg",
  },
  {
    name: "Node.js",
    color: "#339933",
    icon: "/icons/nodejs.svg",
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    icon: "/icons/typescript.svg",
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    icon: "/icons/javascript.svg",
  },
  {
    name: "TailwindCSS",
    color: "#38B2AC",
    icon: "/icons/tailwind.svg",
  },
  {
    name: "Langchain",
    color: "#0000FF",
    icon: "/icons/langchain.svg",
  },
  {
    name: "Puppeteer",
    color: "#00B894",
    icon: "/icons/puppeteer.svg",
  },
  {
    name: "Firebase",
    color: "#FFCA28",
    icon: "/icons/firebase.svg",
  },
  {
    name: "Docker",
    color: "#2496ED",
    icon: "/icons/docker.svg",
  },
  {
    name: "Git",
    color: "#F05032",
    icon: "/icons/git.svg",
  },
  {
    name: "GitHub",
    color: "#F05032",
    icon: "/icons/github.svg",
  },
  {
    name: "GitHub Actions",
    color: "#2088FF",
    icon: "/icons/github-actions.svg",
  },
  {
    name: "Postman",
    color: "#FF6C37",
    icon: "/icons/postman.svg",
  },
];

export const technicalInterests: Interest[] = [
  {
    icon: Blocks,
    title: "Scalable Systems",
    description: "Designing and building systems that can grow and adapt",
  },
  {
    icon: Laptop,
    title: "Application Development",
    description: "Creating robust and user-friendly web applications",
  },
  {
    icon: Brain,
    title: "New Technologies",
    description: "Exploring and implementing cutting-edge tech solutions",
  },
  {
    icon: Bot,
    title: "AI Applications",
    description: "Building intelligent solutions using AI and ML technologies",
  },
];

export const nonTechnicalInterests: Interest[] = [
  {
    icon: Tv,
    title: "Anime",
    description: "Exploring different anime genres and storytelling",
  },
  {
    icon: Film,
    title: "Movies",
    description: "Watching and analyzing various genres of cinema",
  },
  {
    icon: Volleyball,
    title: "Outdoor Sports",
    description: "Playing basketball, volleyball, and other team sports",
  },
  {
    icon: Coins,
    title: "Personal Finance",
    description: "Learning about investments and financial planning",
  },
  {
    icon: Newspaper,
    title: "Tech News",
    description: "Staying updated with latest technology trends and updates",
  },
];
