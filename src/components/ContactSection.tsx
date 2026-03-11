import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const contactInfo = [
  { icon: Phone, label: "Phone", text: "+91 78452 24089", href: "tel:+917845224089" },
  { icon: Mail, label: "Email", text: "sabareeshwaran.b2024ece@sece.ac.in", href: "mailto:sabareeshwaran.b2024ece@sece.ac.in" },
  { icon: MapPin, label: "Location", text: "Coimbatore", href: "#" },
  { icon: Github, label: "GitHub", text: "github.com/sabareeshwaran16", href: "https://github.com/sabareeshwaran16" },
  { icon: Linkedin, label: "LinkedIn", text: "linkedin.com/in/sabareeshwaranb", href: "https://www.linkedin.com/in/sabareeshwaranb" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    emailjs.send(
      'service_r8iel4h',
      'template_fae4ugv',
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: 'sabareeshwaran.b2024ece@sece.ac.in'
      },
      'EBWDeoJkOqawG8umR'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      setForm({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send message: ' + error.text);
    })
    .finally(() => {
      setSending(false);
    });
  };

  const inputClasses = (field: string) =>
    `w-full px-5 py-3.5 rounded-xl bg-secondary/50 text-foreground placeholder:text-muted-foreground border transition-all duration-300 text-sm outline-none ${
      focused === field ? "border-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]" : "border-border hover:border-primary/30"
    }`;

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary tracking-wide mb-4">
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Contact <span className="text-primary">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Feel free to reach out for collaborations, opportunities, or just a friendly hello! I'm always open to new connections.
            </p>
            {contactInfo.map((item, i) => {
              const isExternal = item.href.startsWith('http');
              const isDisabled = item.href === '#';
              
              return (
                <motion.a
                  key={item.label}
                  href={isDisabled ? undefined : item.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`group flex items-center gap-4 p-3 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-x-1 ${isDisabled ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm truncate">{item.text}</p>
                  </div>
                  <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={inputClasses("name")}
                  required
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className={inputClasses("email")}
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className={`${inputClasses("message")} resize-none`}
                required
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? 'Sending...' : 'Send Message'}
              <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
