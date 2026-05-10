import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold tracking-tighter">
              Pavan<span className="text-primary">.AI</span>
            </a>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
              Building intelligent systems since 2023.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/pavankumar-maker" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/pavan-chinnamarla-607a033b6" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:chinnamarlapavan@gmail.com" className="hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} C Pavan Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
