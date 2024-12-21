// src/config/experience.ts

export interface Experience {
  id: string;
  date: string;
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
  skills: string[];
  category: "tech" | "other";
}

export const experiences: Experience[] = [
  {
    id: "fidelity-intern",
    date: "2024",
    title: "Technology Intern",
    company: "Fidelity International",
    duration: "June - July",
    responsibilities: [
      "Contributed to developing a Proof of Concept for a custodial crypto wallet",
      "Enhanced security features and implemented robust access control measures",
    ],
    skills: ["MERN Stack", "Web3.js", "Chrome Extension v3"],
    category: "tech",
  },
  {
    id: "web-dev",
    date: "2024",
    title: "Website Developer",
    company: "Freelancing",
    duration: "January",
    responsibilities: [
      "Developed and deployed a responsive website for University Literature Fest 2024",
      "Implemented design based on client's Figma specifications",
      "Achieved 10,000+ registrations and 5,000 peak daily visitors",
    ],
    skills: ["Firebase", "React", "Google Sheets API", "Bootstrap"],
    category: "tech",
  },
  {
    id: "teaching-assistant",
    date: "2023",
    title: "Teaching Assistant",
    company: "Ask Senior",
    duration: "September - October",
    responsibilities: [
      "Provided guidance and resolved DSA/CP-related doubts",
      "Served as a mentor fostering collaborative learning",
      "Provided feedback to improve course and enhance learning outcomes",
    ],
    skills: ["DSA", "Competitive Programming", "Doubt Solving"],
    category: "other",
  },
];
