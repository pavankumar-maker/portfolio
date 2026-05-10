import { motion } from 'motion/react';
import { Github, Linkedin, Phone, Mail, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = ["AI & ML Engineer", "Web Developer", "Problem Solver"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono font-medium tracking-widest text-sm mb-4 block uppercase">
              // Future of AI
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-none mb-6">
              I'm <span className="text-primary">C Pavan Kumar</span>
            </h1>
            <div className="h-10 mb-8">
              <span className="text-2xl md:text-3xl font-medium text-slate-500 dark:text-slate-400">
                {displayText}
                <span className="animate-pulse bg-primary inline-block w-1 h-8 ml-1 align-middle" />
              </span>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-10 leading-relaxed">
              I am an AI and Machine Learning Engineer passionate about developing intelligent systems 
              that solve real-world problems. Currently pushing boundaries in CSE (AI & ML).
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-colors glow"
              >
                Hire Me <ChevronRight size={20} />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://www.linkedin.com/in/pavan-chinnamarla-607a033b6', '_blank')}
                className="glass px-8 py-4 rounded-xl font-semibold hover:border-primary/50 transition-colors"
                id="resume-download"
              >
                Download Resume
              </motion.button>
            </div>

            <div className="flex items-center gap-6">
              {[
                { icon: <Github size={24} />, href: 'https://github.com/pavankumar-maker' },
                { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/pavan-chinnamarla-607a033b6' },
                { icon: <Phone size={24} />, href: 'tel:7093447332' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5, color: '#0ea5e9' }}
                  className="text-slate-500 dark:text-slate-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden border-2 border-primary/20 glow">
              {/* Using a placeholder since I can't guarantee artifact location, but with a comment to user */}
              <img 
                src="https://raw.githubusercontent.com/pavankumar-maker/portfolio/main/Pavan.jpeg" 
                alt="C Pavan Kumar" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                }}
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decors */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/30 rounded-full blur-2xl animate-bounce" />
            <div className="absolute -bottom-10 -left-10 p-6 glass rounded-2xl glow z-20">
              <p className="text-primary font-bold text-2xl">8.77</p>
              <p className="text-xs uppercase tracking-widest font-mono">Current CGPA</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
