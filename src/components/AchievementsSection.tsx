import { motion } from "framer-motion";
import { Trophy, Award, Code2, ShieldCheck, Star, Target, ExternalLink } from "lucide-react";
import { useState } from "react";

const achievements = [
  { icon: Trophy, text: "Winner – Anokha'26 Process Warzone", sub: "₹20,000 prize", highlight: true },
  { icon: Target, text: "HackWithUttarPradesh", sub: "Top 300 Teams – Shortlisted", highlight: false },
  { icon: Award, text: "GDG Hacks", sub: "Final Round – Shortlisted", highlight: false },
];

const codingProfiles = [
  { label: "LeetCode", stat: "300+", sub: "Problems Solved", extra: "25+ Contests" },
  { label: "HackerRank", stat: "3★", sub: "Python & C", extra: "2★ SQL" },
  { label: "CodeChef", stat: "400+", sub: "Rating", extra: "" },
  { label: "SkillRack", stat: "1000+", sub: "Problems Solved", extra: "" },
];

const certifications = [
  { name: "Mastering DSA using C & C++", org: "Udemy", year: "2025" },
  { name: "Java Programming Masterclass", org: "Udemy", year: "2025" },
  { name: "SQL (Intermediate)", org: "HackerRank", year: "2025" },
];

const AnimatedNumber = ({ target }: { target: string }) => {
  const isNum = /^\d+/.test(target);
  const num = parseInt(target);
  const suffix = target.replace(/\d+/, "");
  const [display, setDisplay] = useState(isNum ? "0" : target);
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        if (!isNum || hasAnimated) return;
        setHasAnimated(true);
        let current = 0;
        const increment = num / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= num) {
            setDisplay(num.toString());
            clearInterval(timer);
          } else {
            setDisplay(Math.floor(current).toString());
          }
        }, 30);
        return () => clearInterval(timer);
      }}
    >
      {display}{suffix}
    </motion.span>
  );
};

const AchievementsSection = () => (
  <section id="achievements" className="py-28 relative">
    <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary tracking-wide mb-4">
          Recognition
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold">
          Achievements & <span className="text-primary">Profiles</span>
        </h2>
      </motion.div>

      {/* Achievements row */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {achievements.map((a, i) => (
          <motion.div
            key={a.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative bg-card/50 backdrop-blur-sm rounded-3xl p-6 border transition-all duration-500 hover:-translate-y-1 ${
              a.highlight ? "border-primary/40 hover:border-primary/60" : "border-border hover:border-primary/30"
            }`}
          >
            {a.highlight && (
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider">
                Winner
              </div>
            )}
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                a.highlight ? "bg-primary/20" : "bg-primary/10"
              }`}>
                <a.icon size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">{a.text}</p>
                <p className="text-xs text-muted-foreground">{a.sub}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coding profiles + certs */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Coding profiles - larger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-500"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Code2 size={18} className="text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold">Coding Profiles</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {codingProfiles.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary/50 rounded-2xl p-5 hover:bg-secondary/80 transition-colors group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{p.label}</span>
                  <ExternalLink size={12} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-2xl font-heading font-bold text-primary mb-0.5">
                  <AnimatedNumber target={p.stat} />
                </p>
                <p className="text-xs text-muted-foreground">{p.sub}</p>
                {p.extra && <p className="text-[10px] text-primary/70 mt-1">{p.extra}</p>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-500"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <ShieldCheck size={18} className="text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold">Certifications</h3>
          </div>
          <div className="space-y-4">
            {certifications.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-secondary/50 rounded-2xl p-4 hover:bg-secondary/80 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Star size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-snug">{c.name}</p>
                    <p className="text-[10px] text-muted-foreground mt-1">{c.org} • {c.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
