import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowDown, FileDown, Sparkles, Code2, Brain } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import profileImg from "@/assets/Profile.png";

const roles = ["Full Stack Developer", "AI Enthusiast", "YOLO Model Trainer", "Problem Solver"];

const Counter = ({ target, label }: { target: string; label: string }) => {
  const isNumber = /^[\d.]+/.test(target);
  const numericPart = parseFloat(target);
  const suffix = target.replace(/[\d.]+/, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    target.includes(".") ? v.toFixed(2) : Math.floor(v).toString()
  );
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isNumber) return;
    const controls = animate(count, numericPart, { duration: 2, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); unsub(); };
  }, []);

  return (
    <div className="text-center">
      <p className="text-3xl md:text-4xl font-heading font-bold text-primary">
        {isNumber ? display : target}{suffix}
      </p>
      <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
};

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const current = roles[roleIndex];
    if (!deleting && charIndex < current.length) {
      timeoutRef.current = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (!deleting && charIndex === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => setCharIndex((c) => c - 1), 30);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, deleting, roleIndex]);

  const typedText = roles[roleIndex].slice(0, charIndex);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary tracking-wide">Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6"
          >
            Sabareesh<span className="text-primary">waran</span> B
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary to-primary/0 origin-left rounded-full mt-2"
            />
          </motion.h1>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[2px] bg-primary" />
            <p className="text-lg md:text-xl text-muted-foreground font-light">
              {typedText}
              <span className="text-primary animate-pulse">|</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-muted-foreground max-w-md mb-8 leading-relaxed"
          >
            Building scalable web apps & intelligent AI systems. Passionate about
            turning ideas into elegant, production-ready solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-110"
            >
              View Projects
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/1Ltv7uxBKtlyeBoGwcmCCohO9gsY_M7is/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-0.5 bg-card/50 backdrop-blur-sm"
            >
              <FileDown size={16} /> Download Resume
            </a>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="text-center p-4 rounded-xl hover:bg-secondary/50 transition-all duration-300 cursor-pointer hover:scale-110">
              <p className="text-3xl md:text-4xl font-heading font-bold text-blue-600">300+</p>
              <p className="text-xs text-muted-foreground mt-1">LeetCode Problems</p>
            </div>
            <div className="text-center p-4 rounded-xl hover:bg-secondary/50 transition-all duration-300 cursor-pointer hover:scale-110">
              <p className="text-3xl md:text-4xl font-heading font-bold text-green-600">8.17</p>
              <p className="text-xs text-muted-foreground mt-1">CGPA</p>
            </div>
            <div className="text-center p-4 rounded-xl hover:bg-secondary/50 transition-all duration-300 cursor-pointer hover:scale-110">
              <p className="text-3xl md:text-4xl font-heading font-bold text-purple-600">5+</p>
              <p className="text-xs text-muted-foreground mt-1">Major Projects</p>
            </div>
          </div>
        </div>

        {/* Right - Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-xl" />

            {/* Main image container */}
            <div className="relative w-72 h-72 md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/10">
              <img
                src={profileImg}
                alt="Sabareeshwaran B"
                className="w-full h-full object-cover object-[center_20%]"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>

            {/* Orbiting ring */}
            <div
              className="absolute -inset-6 rounded-full border border-dashed border-primary/15 animate-spin"
              style={{ animationDuration: "25s" }}
            />
            <div
              className="absolute -inset-12 rounded-full border border-dashed border-primary/8 animate-spin"
              style={{ animationDuration: "40s", animationDirection: "reverse" }}
            />

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-1/4 flex items-center gap-2 px-3 py-2 rounded-xl bg-card border border-border shadow-lg backdrop-blur-sm"
            >
              <Code2 size={16} className="text-primary" />
              <span className="text-xs font-medium">Full Stack</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-4 top-2/3 flex items-center gap-2 px-3 py-2 rounded-xl bg-card border border-border shadow-lg backdrop-blur-sm"
            >
              <Brain size={16} className="text-primary" />
              <span className="text-xs font-medium">AI / ML</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-4 bottom-1/4 flex items-center gap-2 px-3 py-2 rounded-xl bg-card border border-border shadow-lg backdrop-blur-sm"
            >
              <Code2 size={16} className="text-primary" />
              <span className="text-xs font-medium">Web Dev</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -right-4 top-1/3 flex items-center gap-2 px-3 py-2 rounded-xl bg-card border border-border shadow-lg backdrop-blur-sm"
            >
              <Code2 size={16} className="text-primary" />
              <span className="text-xs font-medium">Java</span>
            </motion.div>

            {/* Dot accent */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[3px] text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
