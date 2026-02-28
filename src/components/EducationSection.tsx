import { motion } from "framer-motion";
import { GraduationCap, School, Award } from "lucide-react";

const educationData = [
  {
    degree: "B.E ECE",
    institution: "Sri Eshwar College of Engineering",
    detail: "CGPA: 8.17 (Up to 3rd Semester)",
    year: "2024-2028",
    icon: GraduationCap,
    color: "blue",
    current: true,
  },
  {
    degree: "HSC",
    institution: "United Public School",
    detail: "Score: 77.6%",
    year: "2023-2024",
    icon: School,
    color: "green",
    current: false,
  },
  {
    degree: "SSLC",
    institution: "United Public School",
    detail: "Score: 75.6%",
    year: "2021-2022",
    icon: Award,
    color: "orange",
    current: false,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-28 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg">My academic journey and learning path</p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-orange-500 transform -translate-x-1/2 hidden md:block" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-20 last:mb-0"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content - alternates sides */}
                <div className={`${index % 2 === 0 ? "md:order-1 md:text-right" : "md:order-2"}`}>
                  <div className="bg-card border-2 border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <h3 className="font-heading text-2xl font-bold mb-2">{edu.degree}</h3>
                    <p className={`font-semibold mb-2 ${
                      edu.color === "blue" ? "text-blue-600" :
                      edu.color === "green" ? "text-green-600" : "text-orange-600"
                    }`}>
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground">{edu.detail}</p>
                  </div>
                </div>

                {/* Year badge - alternates sides */}
                <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1 md:text-right"}`}>
                  <span className={`inline-block px-5 py-2 rounded-full text-white text-sm font-semibold ${
                    edu.color === "blue" ? "bg-blue-600" :
                    edu.color === "green" ? "bg-green-600" : "bg-orange-600"
                  }`}>
                    {edu.year}
                  </span>
                </div>
              </div>

              {/* Center icon */}
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg hidden md:flex ${
                edu.color === "blue" ? "bg-blue-600" :
                edu.color === "green" ? "bg-green-600" : "bg-orange-600"
              }`}>
                <edu.icon size={28} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
