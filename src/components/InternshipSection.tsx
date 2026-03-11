import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const skills = ["Python", "NumPy", "Scikit-learn", "Django", "React", "MongoDB", "PostgreSQL"];

const responsibilities = [
  "Data processing and analysis",
  "Built ML/DL models for real-world tasks",
  "Developed Django-based web applications",
  "API development & database operations",
  "Dataset preparation, model training, evaluation",
  "Full-stack integration with responsive UI"
];

const InternshipSection = () => {
  return (
    <section id="internship" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary tracking-wide mb-4">
            Professional Journey
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Internship <span className="text-primary">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
            
            <div className="grid md:grid-cols-[auto_1fr] gap-8 relative">
              {/* Left side - Icon */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/25 relative z-10"
                >
                  <Briefcase className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Right side - Content */}
              <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-3xl p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                      AI & Web Development Intern
                    </h3>
                    <p className="text-primary font-semibold text-lg flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      NIELIT Calicut
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                      <Calendar className="w-4 h-4" />
                      2025
                    </span>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-muted-foreground text-sm font-medium">
                      <MapPin className="w-4 h-4" />
                      Calicut
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Key Responsibilities</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {responsibilities.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-xl text-sm font-medium border border-primary/20 cursor-default shadow-sm hover:shadow-md hover:shadow-primary/20 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
