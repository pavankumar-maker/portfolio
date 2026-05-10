import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    college: "Madanapalle Institute of Technology and Science",
    degree: "B.Tech - Computer Science and Engineering (AI & ML)",
    period: "2023 - 2027",
    location: "Chittoor, Andhra Pradesh",
    achievements: [
      "Currently in 2nd Year Pursuing",
      "Academic Performance: 8.77 CGPA",
      "Member of AI Innovations Club",
      "Specializing in Neural Networks and Intelligent Systems"
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold mb-4"
          >
            Educational <span className="text-primary">Journey</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto mb-4 rounded-full"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-slate-200 dark:border-slate-800"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center glow">
                 <GraduationCap size={14} className="text-white" />
              </div>
              
              <div className="glass p-8 rounded-3xl ml-4 hover:border-primary/30 transition-all">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.college}</h3>
                    <p className="text-primary font-medium flex items-center gap-2">
                       <Award size={18} /> {item.degree}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2 text-sm text-slate-500 dark:text-slate-400 font-mono">
                    <span className="flex items-center gap-2"><Calendar size={14} /> {item.period}</span>
                    <span className="flex items-center gap-2"><MapPin size={14} /> {item.location}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {item.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <p className="text-slate-600 dark:text-slate-300">{ach}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
