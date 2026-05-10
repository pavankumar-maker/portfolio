import { motion } from 'motion/react';
import { User, Code, Brain, Zap } from 'lucide-react';

export default function About() {
  const cards = [
    { icon: <Code className="text-primary" />, title: "Web Developer", desc: "Building responsive and performant web applications." },
    { icon: <Brain className="text-secondary" />, title: "AI/ML Enthusiast", desc: "Exploring neural networks and deep learning models." },
    { icon: <Zap className="text-accent" />, title: "Problem Solver", desc: "Transforming complex challenges into simple solutions." },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold mb-4"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto mb-8 rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            I am an AI and Machine Learning Engineer passionate about developing intelligent systems 
            and solving real-world problems using technology. Currently in my 2nd year of B.Tech at 
            Madanapalle Institute of Technology and Science, maintaining a solid CGPA of 8.77.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
