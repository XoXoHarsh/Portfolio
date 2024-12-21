import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Header from "../ui/Header";
import { profiles } from "@/config/profile";

interface Profile {
  platform: string;
  username: string;
  stats: { label: string; value: string }[];
  link: string;
  gradient: string;
  bgGradient: string;
}

const ProfileCard = ({ profile }: { profile: Profile }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="w-full"
  >
    <Card className="p-6 bg-background/50 backdrop-blur-sm border-muted hover:bg-accent/10 transition-colors h-full">
      <div className="flex flex-col h-full">
        <div
          className={`bg-gradient-to-r ${profile.bgGradient} p-4 rounded-lg mb-4`}
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
              }`}
            >
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          onClick={() => window.open(profile.link, "_blank")}
          className="w-full mt-auto"
        >
          View Profile
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Card>
  </motion.div>
);

const ProfilesSection = () => {
  return (
    <section id="profiles" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 mb-4">
            Coding Profiles
          </h2>
          <p className="text-muted-foreground text-lg">
            Check out my presence across different platforms
          </p>
        </div> */}
        <Header
          title="Coding Profiles"
          subtitle="Check out my presence across different platforms"
          gradient={true}
          align="center"
          className="mb-2"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
          {profiles.map((profile) => (
            <ProfileCard key={profile.platform} profile={profile} />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://linktr.ee/xoxoharsh", "_blank")}
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
