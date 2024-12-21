import Header from "@/components/ui/Header";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background/50"
    >
      <div className="max-w-4xl mx-auto">
        <Header
          title="Experience"
          subtitle="My professional journey"
          gradient={true}
          align="center"
          as="h2"
          className="mb-2"
        />

        {/* Rest of your experience section content */}
      </div>
    </section>
  );
};

export default ExperienceSection;
