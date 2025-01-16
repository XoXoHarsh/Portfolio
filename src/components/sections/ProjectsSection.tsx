import { motion } from "framer-motion";
import Header from "@/components/ui/Header";
import ProjectCarousel from "@/components/ui/ProjectCarousel";
import { projects } from "@/config/project";
import { trackExternalLink } from "@/utils/analytics";

const ProjectsSection = () => {
  // Split projects into two groups
  const firstRowProjects = projects.slice(0, Math.ceil(projects.length / 2));
  const secondRowProjects = projects.slice(Math.ceil(projects.length / 2));

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Header
          title="Featured Projects"
          subtitle="Some things I've built"
          gradient={true}
          align="center"
          className="mb-2"
        />

        {/* Projects Grid with Carousels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-20"
        >
          {/* First Row - Left to Right */}
          <div className="relative">
            <ProjectCarousel
              projects={firstRowProjects}
              direction="left"
              speed={
                typeof window !== "undefined" && window.innerWidth < 640
                  ? 50
                  : 50
              }
            />
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative">
            <ProjectCarousel
              projects={secondRowProjects}
              direction="right"
              speed={
                typeof window !== "undefined" && window.innerWidth < 640
                  ? 50
                  : 50
              }
            />
          </div>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/XoXoHarsh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-red-700 via-red-500 to-orange-500 text-white font-medium hover:opacity-90 transition-opacity"
            onClick={() =>
              trackExternalLink(
                "https://github.com/XoXoHarsh",
                "View All Projects - GitHub"
              )
            }
          >
            View All Projects
          </a>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background dark:bg-grid-white/[0.15] bg-grid-black/[0.15]" />
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
    </section>
  );
};

export default ProjectsSection;
