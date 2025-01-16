import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown, ChevronDown } from "lucide-react";
import { trackDownload } from "@/utils/analytics";

const roles = [
  "Upcoming SWE @Google",
  "Ex-Tech Intern @Fidelity International",
  "MERN Stack Developer",
  "Competitive Programmer",
  "Problem Solver",
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const role = roles[currentRole];
    const updateText = () => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
          timeout = setTimeout(updateText, 100);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          timeout = setTimeout(updateText, 50);
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    };

    timeout = setTimeout(updateText, 100);
    return () => clearTimeout(timeout);
  }, [currentRole, displayText, isDeleting]);

  const handleResumeDownload = () => {
    trackDownload("Resume");
    window.open("/resume.pdf", "_blank");
  };

  const handleScrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full mx-auto overflow-hidden bg-background pb-16"
    >
      {/* Grid Background with visible grid and smooth blending */}
      <div className="absolute inset-0 max-w-7xl mx-auto left-0 right-0">
        <div className="absolute inset-0 bg-background dark:bg-grid-white/[0.15] bg-grid-white/[0.15]" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        </div>
      </div>

      {/* Multiple Spotlights with adjusted positioning and larger mobile radius */}
      <div className="absolute inset-0 max-w-7xl mx-auto">
        {/* Main central spotlight - increased mobile radius */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] md:h-[800px] md:w-[800px] bg-red-500/30 rounded-full blur-[120px] md:blur-[100px] animate-pulse" />

        {/* Secondary spotlights - increased mobile radius */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] md:h-[700px] md:w-[700px] bg-orange-500/20 rounded-full blur-[100px] md:blur-[80px] animate-pulse"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      {/* Content Section with improved mobile spacing */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 sm:space-y-6 max-w-4xl mx-auto"
        >
          {/* Main Title with increased mobile spacing */}
          <div className="space-y-4 sm:space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground/80 mb-6 sm:mb-0"
            >
              Hey
            </motion.h2>
            <div className="space-y-4 sm:space-y-2 mb-8 sm:mb-3">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground"
              >
                My Name is
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight px-2 mb-6 sm:mb-0"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-red-500 to-orange-500">
                  Harsh Sharma
                </span>
              </motion.h1>
            </div>
          </div>

          {/* Typing Effect with increased height for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="h-16 sm:h-16 md:h-20 flex items-center justify-center px-4 mb-8 sm:mb-0"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground/80">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          {/* Tagline with increased mobile spacing */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl text-foreground/70 px-4 mb-8 sm:mb-0"
          >
            The Person You call when you want to get Things Done
          </motion.p>

          {/* CTA Button with increased top padding for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-8 sm:pt-8"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-700 via-red-500 to-orange-500 hover:opacity-90 transition-opacity text-lg sm:text-xl px-6 sm:px-8 py-4 sm:py-6 text-foreground"
              onClick={handleResumeDownload}
            >
              <FileDown className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-1 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="flex flex-col items-center space-y-2 text-foreground/60 px-4 py-2 rounded-full backdrop-blur-sm"
            onClick={handleScrollDown}
          >
            <span className="text-sm sm:text-base font-medium tracking-wider">
              Scroll Down
            </span>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
