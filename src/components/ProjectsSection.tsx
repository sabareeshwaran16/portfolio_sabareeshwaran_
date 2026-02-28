import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Cpu, Landmark, Flame } from "lucide-react";

const projects = [
  {
    title: "Railway Track Damage Detection",
    year: "2024",
    icon: Cpu,
    desc: "Used ultrasonic guided wave technology for crack detection. Non-destructive long-range monitoring system.",
    tech: ["HTML", "CSS", "JavaScript", "Arduino UNO", "Ultrasonic Sensors"],
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    title: "Online Banking Management System",
    year: "2025",
    icon: Landmark,
    desc: "Implemented authentication, deposits, withdrawals, fund transfer. REST API architecture with structured service layers.",
    tech: ["Java", "Spring Boot", "MySQL", "Gradle", "Postman", "Git/GitHub"],
    color: "from-green-500/20 to-green-600/5",
  },
  {
    title: "Fire & Smoke Detection System",
    year: "2025",
    icon: Flame,
    desc: "Live camera stream inference. Integrated deep learning model with REST APIs for real-time detection.",
    tech: ["Python", "YOLOv8", "OpenCV", "Django", "HTML/CSS/JS"],
    color: "from-primary/20 to-primary/5",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-28 relative">
    <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary tracking-wide mb-4">
          Portfolio
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold">
          Featured <span className="text-primary">Projects</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group relative bg-card/50 backdrop-blur-sm rounded-3xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Header gradient */}
            <div className={`h-32 bg-gradient-to-br ${p.color} relative flex items-center justify-center`}>
              <div className="w-16 h-16 rounded-2xl bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <p.icon size={28} className="text-primary" />
              </div>
              <span className="absolute top-4 right-4 text-[10px] font-medium text-muted-foreground bg-card/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-border">
                {p.year}
              </span>
            </div>

            <div className="p-6">
              <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full bg-secondary/80 text-muted-foreground text-[10px] font-medium border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <button className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline transition">
                  <Github size={14} /> View Code
                </button>
                <button className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition ml-auto">
                  Live Demo <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
