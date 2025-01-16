import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Header from "../ui/Header";
import { profiles } from "@/config/profile";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { trackEvent, trackExternalLink } from "@/utils/analytics";

interface Profile {
  platform: string;
  username: string;
  stats: { label: string; value: string }[];
  link: string;
  gradient: string;
  bgGradient: string;
}

const ProfileCard = ({
  profile,
  hoveredIndex,
  setHoveredIndex,
  idx,
}: {
  profile: Profile;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  idx: number;
}) => {
  const handleProfileClick = () => {
    // Track profile link click with platform info
    trackExternalLink(profile.link, `${profile.platform} Profile View`);
    window.open(profile.link, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative group block p-2 h-full w-full"
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl z-0"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>

      <div className="flex flex-col h-full bg-black border:slate-900 p-4 rounded-3xl relative z-10 shadow-lg shadow-slate-500/20 ring-1 ring-slate-700/50">
        <div
          className={`bg-gradient-to-r ${profile.bgGradient} p-4 rounded-lg mb-4 text-center`}
        >
          <h3
            className={`text-2xl font-bold bg-gradient-to-r ${profile.gradient} bg-clip-text text-transparent`}
          >
            {profile.platform}
          </h3>
          <p className="text-muted-foreground">@{profile.username}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 flex-grow">
          {profile.stats.map((stat, index) => (
            <div
              key={index}
              className={`${
                index === profile.stats.length - 1 &&
                profile.stats.length % 2 !== 0
                  ? "col-span-2"
                  : ""
              } flex flex-col space-y-1 text-center`}
            >
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          onClick={handleProfileClick}
          className="w-full mt-auto z-0"
        >
          View Profile
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </motion.div>
  );
};

const ProfilesSection = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackEvent(
              "Section View",
              "Profiles Section",
              "Viewed Profiles Section"
            );
            // Track number of profiles displayed
            trackEvent(
              "Section Metrics",
              "Profiles Count",
              "Total Profiles",
              profiles.length
            );
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    const section = document.getElementById("profiles");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleAllProfilesClick = () => {
    // Track Linktree click
    trackExternalLink("https://linktr.ee/xoxoharsh", "All Profiles - Linktree");
    trackEvent("Profile Interaction", "View All Profiles", "Linktree");
    window.open("https://linktr.ee/xoxoharsh", "_blank");
  };

  return (
    <section id="profiles" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Header
          title="Coding Profiles"
          subtitle="Check out my presence across different platforms"
          gradient={true}
          align="center"
          className="mb-3"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
          {profiles.map((profile, idx) => (
            <ProfileCard
              key={profile.platform}
              profile={profile}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              idx={idx}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={handleAllProfilesClick}
            className="bg-gradient-to-r from-red-700 via-red-500 to-orange-500 hover:opacity-90"
          >
            See All Profiles
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
