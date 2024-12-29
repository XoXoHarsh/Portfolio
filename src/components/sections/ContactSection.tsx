import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/ui/Header";
import { SparklesCore } from "@/components/ui/sparkles";
import { socials, emailConfig } from "@/config/contact";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, MessageSquare } from "lucide-react";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        emailConfig.publicKey
      );
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-background/90 z-10" />
        <SparklesCore
          id="contactSparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleColor="#fff"
          className="w-full h-full"
          particleDensity={25}
        />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto">
        <Header
          title="Get In Touch"
          subtitle="Let's create something amazing together"
          gradient={true}
          align="center"
          className="mb-2"
        />

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12">
          {/* Contact Form - Comes first in mobile view */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:order-2"
          >
            <Card className="relative p-8 bg-background/40 backdrop-blur-md border-muted/50 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-slate-700/20 group">
              {/* Ambient light effect */}
              <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-b from-slate-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl justify-center" />

              <div className="flex items-center gap-3 mb-8 justify-center">
                <MessageSquare className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Input
                    placeholder="Your Name"
                    {...register("name")}
                    className={`py-6 bg-background/50 border-muted/50 transition-all duration-300 ease-in-out
                    ${
                      errors.name
                        ? "border-red-500"
                        : "focus:border-white focus:ring-1 focus:ring-white focus:shadow-[0_10px_40px_-15px_rgba(255,255,255,0.2)] focus:translate-y-[-2px]"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Input
                    placeholder="Your Email"
                    type="email"
                    {...register("email")}
                    className={`py-6 bg-background/50 border-muted/50 transition-all duration-300 ease-in-out
                      ${
                        errors.email
                          ? "border-red-500"
                          : "focus:border-white focus:ring-1 focus:ring-white focus:shadow-[0_10px_40px_-15px_rgba(255,255,255,0.2)] focus:translate-y-[-2px]"
                      }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Textarea
                    placeholder="Your Message"
                    {...register("message")}
                    className={`min-h-[200px] bg-background/50 border-muted/50 transition-all duration-300 ease-in-out
                    ${
                      errors.message
                        ? "border-red-500"
                        : "focus:border-white focus:ring-1 focus:ring-white focus:shadow-[0_10px_40px_-15px_rgba(255,255,255,0.2)] focus:translate-y-[-2px]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 bg-gradient-to-r from-red-700 via-red-500 to-orange-500 hover:opacity-90 transition-opacity"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:order-1"
          >
            <Card className="relative p-8 bg-background/40 backdrop-blur-md border-muted/50 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-slate-700/20 group">
              {/* Ambient light effect */}
              <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-b from-slate-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 mb-8 text-center">
                Let's Connect
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.3,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <Button
                      variant="outline"
                      className={`w-full h-32 flex-col gap-4 group relative overflow-hidden bg-background/50
        ${
          social.name === "GitHub" &&
          "hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-950/50 hover:via-purple-900/50 hover:to-fuchsia-900/50"
        }
        ${
          social.name === "LinkedIn" &&
          "hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-950/50 hover:via-blue-900/50 hover:to-cyan-900/50"
        }
        ${
          social.name === "Instagram" &&
          "hover:border-pink-500/50 hover:bg-gradient-to-br hover:from-pink-950/50 hover:via-fuchsia-900/50 hover:to-purple-900/50"
        }
      `}
                      onClick={() => window.open(social.url, "_blank")}
                    >
                      <div className="relative z-10 flex flex-col items-center gap-3">
                        <motion.div
                          className={`p-3 rounded-xl bg-background/50 group-hover:bg-background/20 transition-colors
            ${social.name === "GitHub" && "group-hover:text-purple-400"}
            ${social.name === "LinkedIn" && "group-hover:text-blue-400"}
            ${social.name === "Instagram" && "group-hover:text-pink-400"}
          `}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                        </motion.div>
                        <span className="font-medium text-sm text-center">
                          {social.name}
                        </span>
                      </div>
                    </Button>
                  </motion.div>
                ))}

                {/* Email button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: socials.length * 0.1,
                    duration: 0.3,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  <Button
                    variant="outline"
                    className="w-full h-32 flex-col gap-4 group relative overflow-hidden bg-background/50 hover:border-emerald-500/50 hover:bg-gradient-to-br hover:from-emerald-950/50 hover:via-emerald-900/50 hover:to-teal-900/50"
                    onClick={() =>
                      (window.location.href = "mailto:your@email.com")
                    }
                  >
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <motion.div
                        className="p-3 rounded-xl bg-background/50 group-hover:bg-background/20 group-hover:text-emerald-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                      </motion.div>
                      <span className="font-medium text-sm text-center">
                        Email Me
                      </span>
                    </div>
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
