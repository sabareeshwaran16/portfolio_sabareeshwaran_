import { motion } from "framer-motion";
import { Code2, Server, Database, Brain, Wrench, LayoutGrid } from "lucide-react";

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "C", level: 80 },
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: Server,
    skills: [
      { name: "Spring Boot", level: 70 },
      { name: "Django", level: 75 },
      { name: "React", level: 80 },
      { name: "Git/GitHub", level: 85 },
      { name: "Postman", level: 80 },
      { name: "VS Code", level: 90 },
    ],
  },
  {
    title: "Core Concepts",
    icon: LayoutGrid,
    skills: [
      { name: "DSA", level: 75 },
      { name: "DBMS", level: 70 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "AI & Tools",
    icon: Brain,
    skills: [
      { name: "YOLOv8", level: 80 },
      { name: "OpenCV", level: 75 },
      { name: "Ultralytics", level: 80 },
    ],
  },
  {
    title: "Other Tools",
    icon: Wrench,
    skills: [
      { name: "Excel", level: 70 },
      { name: "PowerPoint", level: 75 },
      { name: "Canva", level: 80 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-28 relative">
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary tracking-wide mb-4">
          Skills
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold">
          My <span className="text-primary">Expertise</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-card/50 backdrop-blur-sm rounded-3xl p-6 border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <group.icon size={18} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold">{group.title}</h3>
            </div>
            <div className="space-y-4">
              {group.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm">{s.name}</span>
                    <span className="text-xs text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
