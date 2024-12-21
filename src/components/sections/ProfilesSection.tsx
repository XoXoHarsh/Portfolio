import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const profiles = [
  {
    platform: "LeetCode",
    username: "XoXoHarsh",
    stats: [
      { label: "Max Rating", value: "1,962" },
      { label: "Problems Solved", value: "692" },
      { label: "Level", value: "Knight" },
      { label: "Contests", value: "35+" },
    ],
    link: "https://leetcode.com/XoXoHarsh/",
    gradient: "from-yellow-500 to-yellow-600",
    bgGradient: "from-yellow-500/20 to-yellow-600/20",
  },
  {
    platform: "GitHub",
    username: "HarshSharma20503",
    stats: [
      { label: "Contributions", value: "1,300+" },
      { label: "Repositories", value: "51" },
      { label: "Profile Views", value: "3,500+" },
      { label: "Followers", value: "29" },
    ],
    link: "https://github.com/HarshSharma20503",
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-500/20 to-purple-600/20",
  },
  {
    platform: "CodeForces",
    username: "XoXoHarsh",
    stats: [
      { label: "Max Rating", value: "1,556" },
      { label: "Max Rank", value: "Specialist" },
      { label: "Problems Solved", value: "550+" },
      { label: "Contests", value: "90+" },
    ],
    link: "https://codeforces.com/profile/XoXoHarsh",
    gradient: "from-red-500 to-red-600",
    bgGradient: "from-red-500/20 to-red-600/20",
  },
  {
    platform: "GeeksforGeeks",
    username: "harshsharma20503",
    stats: [
      { label: "Problems Solved", value: "250+" },
      { label: "Streak", value: "32" },
      { label: "Coding Score", value: "768" },
    ],
    link: "https://auth.geeksforgeeks.org/user/harshsharma20503",
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-500/20 to-green-600/20",
  },
  {
    platform: "HackerRank",
    username: "harshsharma20503",
    stats: [
      { label: "Problem Solving", value: "6 ⭐" },
      { label: "C++", value: "5 ⭐" },
      { label: "Badges", value: "6" },
      { label: "Certificates", value: "2" },
    ],
    link: "https://www.hackerrank.com/harshsharma20503",
    gradient: "from-emerald-500 to-emerald-600",
    bgGradient: "from-emerald-500/20 to-emerald-600/20",
  },
  {
    platform: "CodeChef",
    username: "xoxoharsh",
    stats: [
      { label: "Max Rating", value: "1872" },
      { label: "Level", value: "4 ⭐" },
      { label: "Best Contest Rank", value: "91" },
    ],
    link: "https://www.codechef.com/users/xoxoharsh",
    gradient: "from-orange-500 to-orange-600",
    bgGradient: "from-orange-500/20 to-orange-600/20",
  },
];

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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 mb-4">
            Coding Profiles
          </h2>
          <p className="text-muted-foreground text-lg">
            Check out my presence across different platforms
          </p>
        </div>

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
