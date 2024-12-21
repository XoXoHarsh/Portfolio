import Header from "@/components/ui/Header";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background/50"
    >
      <div className="max-w-4xl mx-auto">
        <Header
          title="Get In Touch"
          subtitle="Let's create something amazing together"
          gradient={true}
          align="center"
          as="h2"
          className="mb-2"
        />

        {/* Rest of your contact section content */}
      </div>
    </section>
  );
};

export default ContactSection;
