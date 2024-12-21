import { motion } from "framer-motion";
import Header from "@/components/ui/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  techStack,
  technicalInterests,
  nonTechnicalInterests,
  introduction,
} from "@/config/about";
import { Mail } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background/50"
    >
      <div className="max-w-6xl mx-auto">
        <Header
          title="About Me"
          subtitle="Get to know me better"
          gradient={true}
          align="center"
          className="mb-2"
        />

        {/* Main content */}
        <div className="grid gap-24">
          {/* Introduction */}
          <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
            {/* Card comes first on mobile */}
            <div className="md:order-2 mb-8 md:mb-0">
              <Card className="p-8 bg-background/50 backdrop-blur-sm border-muted">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                    {introduction.personal}
                  </p>
                </motion.div>
              </Card>
            </div>

            {/* Contact section comes second on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start space-y-4 md:order-1"
            >
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 text-center self-center">
                Interested in having a Conversation?
              </h3>
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:opacity-90 self-center"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>
          </div>

          {/* Technical Interests and Tech Stack */}
          <div className="grid md:grid-cols-2 gap-24 md:gap-12">
            {/* Technical Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-center">
                Technical Interests
              </h3>
              <div className="grid gap-4 h-full flex-1 justify-center">
                {technicalInterests.map((interest) => (
                  <Card
                    key={interest.title}
                    className="flex p-4 bg-background/50 backdrop-blur-sm border-muted hover:bg-accent/10 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-xl">
                        <interest.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">
                          {interest.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-center">Tech Stack</h3>
              <div className="grid grid-cols-3 gap-4 h-full flex-1 justify-center items-center">
                {techStack.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center"
                  >
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-2"
                      style={{ backgroundColor: `${tech.color}20` }}
                    >
                      {tech.icon ? (
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-8 h-8"
                        />
                      ) : (
                        <div
                          className="w-8 h-8 rounded-lg"
                          style={{ backgroundColor: tech.color }}
                        />
                      )}
                    </div>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Non-Technical Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-center">
              Non-Technical Interests
            </h3>
            <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {nonTechnicalInterests.map((interest) => (
                <Card
                  key={interest.title}
                  className="p-6 bg-background/50 backdrop-blur-sm border-muted hover:bg-accent/10 transition-colors"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <interest.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">
                        {interest.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
