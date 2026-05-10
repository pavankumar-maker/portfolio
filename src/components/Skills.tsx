import { motion } from 'motion/react';
import { Database, Layout, Terminal, Box, GitBranch, Cpu, MessageSquare, Globe } from 'lucide-react';

const Brain = ({ className }: { className?: string }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"/></svg>;
const Zap = ({ className }: { className?: string }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;

const skills = [
  { 
    category: "Programming Languages", 
    items: [
      { name: "Python", icon: <Terminal className="text-blue-500" /> },
      { name: "Java", icon: <Box className="text-orange-500" /> },
      { name: "C", icon: <Cpu className="text-slate-500" /> },
      { name: "JavaScript", icon: <Globe className="text-yellow-500" /> }
    ]
  },
  {
    category: "AI / Machine Learning",
    items: [
      { name: "Machine Learning", icon: <Brain className="text-purple-500" /> },
      { name: "Deep Learning", icon: <Zap className="text-red-500" /> },
      { name: "NLP", icon: <MessageSquare className="text-green-500" /> },
      { name: "Neural Networks", icon: <Cpu className="text-blue-400" /> }
    ]
  },
  {
    category: "Web & Tools",
    items: [
      { name: "React.js", icon: <Layout className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <Globe className="text-blue-400" /> },
      { name: "GitHub", icon: <GitBranch className="text-slate-700 dark:text-slate-200" /> },
      { name: "MySQL", icon: <Database className="text-blue-600" /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold mb-4"
          >
            Technical <span className="text-primary">Expertise</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto mb-4 rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1 }}
              className="p-1 rounded-3xl bg-gradient-to-b from-slate-200 to-transparent dark:from-slate-800 dark:to-transparent"
            >
              <div className="bg-white dark:bg-slate-950 p-8 rounded-[22px] h-full">
                <h3 className="text-lg font-bold mb-6 font-mono text-primary flex items-center gap-2">
                  <span className="opacity-50">#</span> {group.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {group.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all"
                    >
                      <span className="shrink-0">{skill.icon}</span>
                      <span className="text-xs font-semibold">{skill.name}</span>
                    </motion.div>
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
