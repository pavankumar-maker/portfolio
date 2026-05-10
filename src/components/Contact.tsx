import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    alert('Thank you for your message! This is a demo form.');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold mb-4"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto mb-4 rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's build something <span className="text-primary">extraordinary</span> together.</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities 
              to be part of your visions. Feel free to reach out via any of the channels!
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail className="text-primary" />, label: "Email", value: "chinnamarlapavan@gmail.com", href: "mailto:chinnamarlapavan@gmail.com" },
                { icon: <Phone className="text-primary" />, label: "Phone", value: "+91 7093447332", href: "tel:7093447332" },
                { icon: <MapPin className="text-primary" />, label: "Location", value: "MITS, Chittoor, AP", href: "#" },
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  className="flex items-center gap-6 p-4 glass rounded-2xl hover:border-primary/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500 font-mono mb-1">{item.label}</p>
                    <p className="font-bold">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass p-8 rounded-3xl"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none resize-none"
                  placeholder="How can I help you?"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all glow shadow-lg"
              >
                Send Message <Send size={20} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
