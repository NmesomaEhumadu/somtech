import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct mailto link
    const subject = `New Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:nmesomafaithful@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    toast({
      title: "Opening Email Client",
      description: "Please send the pre-filled email to contact us.",
    });

    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-glow-magenta">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to bring your website vision to life?
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">nmesomafaithful@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">09155809969</p>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">Owerri, Imo State</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            action="https://formsubmit.co/nmesomafaithful@gmail.com"
            method="POST"
            className="glass-effect rounded-xl p-8 space-y-4"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Inquiry from SomTech Portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:5173" />

            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/20 focus:border-primary outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/20 focus:border-primary outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                required
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/20 focus:border-primary outline-none transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/20 focus:border-primary outline-none transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-magenta text-background font-semibold rounded-lg hover:scale-105 transition-all flex items-center justify-center gap-2 box-glow-cyan"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
