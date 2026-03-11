import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2, Code2, Server, Brain } from "lucide-react";

const education = [
  { degree: "B.E ECE", place: "Sri Eshwar College of Engineering", year: "2024–2028", score: "CGPA: 8.17", current: true },
  { degree: "HSC", place: "United Public School", year: "2023–2024", score: "77.6%", current: false },
  { degree: "SSLC", place: "United Public School", year: "2021–2022", score: "75.6%", current: false },
];

const internshipSkills = [
  "Data Processing & Analysis",
  "ML/DL Model Building",
  "REST API Integration",
  "Database Management",
  "Responsive UI Integration",
];

const AboutSection = () => (
  <section id="about" className="py-28 relative">
    {/* Subtle bg accent */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary tracking-wide mb-4">
          About Me
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold">
          Know Who <span className="text-primary">I Am</span>
        </h2>
      </motion.div>

      {/* Bio card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-primary/5 via-card/50 to-primary/5 backdrop-blur-sm rounded-3xl p-10 md:p-12 border-2 border-primary/20 mb-12 max-w-5xl mx-auto relative overflow-hidden shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-500"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-[80px]" />
        <p className="text-foreground text-lg md:text-xl leading-relaxed relative z-10 font-medium">
          I am <span className="text-primary font-bold">Sabareeshwaran B</span>, an ECE undergraduate at <span className="text-primary">Sri Eshwar College of Engineering</span> with a strong passion for Full Stack and Web Development. I enjoy building scalable web applications and intelligent AI-powered systems. I have hands-on experience in training computer vision models using YOLO and developing complete end-to-end applications integrating backend, frontend, and AI solutions.
        </p>
      </motion.div>

      {/* Expertise Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
            <Code2 size={20} className="text-cyan-500" />
          </div>
          <h3 className="font-semibold text-base mb-2">MERN Stack</h3>
          <p className="text-muted-foreground text-xs">
            MongoDB, Express, React, Node.js
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-3">
            <Server size={20} className="text-green-500" />
          </div>
          <h3 className="font-semibold text-base mb-2">Spring Boot</h3>
          <p className="text-muted-foreground text-xs">
            Java enterprise applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
            <Server size={20} className="text-blue-500" />
          </div>
          <h3 className="font-semibold text-base mb-2">Backend APIs</h3>
          <p className="text-muted-foreground text-xs">
            REST APIs & databases
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
            <Brain size={20} className="text-purple-500" />
          </div>
          <h3 className="font-semibold text-base mb-2">AI & ML</h3>
          <p className="text-muted-foreground text-xs">
            Machine learning models
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
