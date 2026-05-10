import { motion } from 'motion/react';
import { ExternalLink, Github, Code2, Layers, Cpu } from 'lucide-react';

const projects = [
  {
    title: "AI Image Vision",
    desc: "A deep learning model for real-time object detection and classification using CNN architecture.",
    tags: ["TensorFlow", "Python", "Keras"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/pavankumar-maker",
    icon: <Cpu size={20} />
  },
  {
    title: "Smart Chat Assistant",
    desc: "NLP-based conversational AI developed to assist users with real-time data queries and assistance.",
    tags: ["NLP", "React", "OpenAI"],
    image: "https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/pavankumar-maker",
    icon: <Code2 size={20} />
  },
  {
    title: "Portfolio Website",
    desc: "A modern, high-performance portfolio website built with React and Tailwind CSS featuring dark mode.",
    tags: ["React", "Tailwind", "Motion"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/pavankumar-maker",
    icon: <Layers size={20} />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold mb-4"
          >
            Recent <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto mb-4 rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-3xl overflow-hidden hover:border-primary/50 transition-all flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <div className="flex gap-4">
                     <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors">
                       <Github size={20} />
                     </a>
                     <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors">
                       <ExternalLink size={20} />
                     </a>
                   </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  {project.icon}
                  <span className="text-xs font-mono font-bold tracking-widest uppercase">System Design</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-grow">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md tracking-wider uppercase opacity-70">
                      {tag}
                    </span>
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
