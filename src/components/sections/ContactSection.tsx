import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/ui/Header";
import { socials, emailConfig } from "@/config/contact";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

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
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Header
          title="Get In Touch"
          subtitle="Let's create something amazing together"
          gradient={true}
          align="center"
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 bg-background/50 backdrop-blur-sm border-muted">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    {...register("name")}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    placeholder="Your Email"
                    type="email"
                    {...register("email")}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message"
                    {...register("message")}
                    className={`min-h-[150px] ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-red-700 via-red-500 to-orange-500"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="p-6 bg-background/50 backdrop-blur-sm border-muted">
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              <div className="grid gap-4">
                {socials.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    className="w-full justify-start gap-4"
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    <social.icon className="w-5 h-5" />
                    {social.name}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  className="w-full justify-start gap-4"
                  onClick={() =>
                    (window.location.href = "mailto:your@email.com")
                  }
                >
                  <Mail className="w-5 h-5" />
                  Email Me
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
