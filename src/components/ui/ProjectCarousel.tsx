import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import AutoScrollCarousel from "./AutoScrollCarousel";
import { trackExternalLink } from "@/utils/analytics";

interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  demoLink: string;
  tags: string[];
}

interface ProjectCarouselProps {
  projects: Project[];
  direction?: "left" | "right";
  speed?: number;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const handleDemoClick = () => {
    trackExternalLink(project.demoLink, "Project Demo View");
    window.open(project.demoLink, "_blank");
  };

  const handleCodeClick = () => {
    trackExternalLink(project.githubLink, "Project Code View");
    window.open(project.githubLink, "_blank");
  };

  return (
    <div className="flex-none px-2 w-[260px] xs:w-[300px] sm:w-[320px] md:w-[360px]">
      <Card className="h-full bg-background/50 backdrop-blur-sm border-muted hover:bg-accent/10 transition-colors overflow-hidden">
        <div className="relative h-40 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="p-4 space-y-3">
          <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 line-clamp-1">
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs bg-primary/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 text-xs"
              onClick={handleCodeClick}
            >
              <Github className="w-3 h-3 mr-1" />
              Code
            </Button>
            <Button
              size="sm"
              className="flex-1 text-xs bg-gradient-to-r from-red-700 via-red-500 to-orange-500"
              onClick={handleDemoClick}
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Demo
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

const ProjectCarousel = ({
  projects,
  direction = "left",
  speed = 40,
}: ProjectCarouselProps) => {
  // Adjust speed based on screen size
  const adjustedSpeed =
    typeof window !== "undefined" && window.innerWidth < 768
      ? speed * 0.75
      : speed;

  return (
    <div className="py-4">
      <AutoScrollCarousel
        direction={direction}
        speed={adjustedSpeed}
        className="py-4"
      >
        {projects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} />
        ))}
      </AutoScrollCarousel>
    </div>
  );
};

export default ProjectCarousel;
