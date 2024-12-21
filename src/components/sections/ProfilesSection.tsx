import Header from "@/components/ui/Header";

const ProfilesSection = () => {
  return (
    <section id="profiles" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Header
          title="Coding Profiles"
          subtitle="Check out my presence across different platforms"
          gradient={true}
          align="center"
          className="mb-2"
        />

        {/* Profile cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Profile cards content */}
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
