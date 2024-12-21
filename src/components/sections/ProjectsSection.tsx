import Header from "@/components/ui/Header";

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Header
          title="Featured Projects"
          subtitle="Some things I've built"
          gradient={true}
          align="center"
          as="h2"
          className="mb-2"
        />

        {/* Rest of your projects section content */}
      </div>
    </section>
  );
};

export default ProjectsSection;
