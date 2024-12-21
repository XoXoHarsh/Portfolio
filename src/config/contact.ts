import { Github, Linkedin, Instagram } from "lucide-react";

export const socials = [
  {
    name: "GitHub",
    url: "YOUR_GITHUB_URL",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "YOUR_LINKEDIN_URL",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: "YOUR_INSTAGRAM_URL",
    icon: Instagram,
  },
];

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
};
