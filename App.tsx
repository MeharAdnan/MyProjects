import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  ChevronDown, 
  Download,
  CheckCircle2,
  Github,
  Mail,
  Linkedin,
  Globe,
  Layout,
  ShoppingCart,
  Search,
  Zap
} from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';
// Import the AIAssistant component
import AIAssistant from './components/AIAssistant';
import { PROJECTS, EXPERIENCES, SKILLS, SOCIAL_LINKS, FEATURES } from './constants';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen selection:bg-brand-primary/30 selection:text-white" id="home">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-brand-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass border-brand-primary/20 text-xs font-bold text-brand-primary uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              <span>Open for Technical Consultations</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-[1.1] md:leading-[1.05] tracking-tighter mb-8">
              Architecting <span className="gradient-text">WordPress</span> at Scale.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              I'm Adnan, a Senior WordPress Engineer. I build enterprise-grade WooCommerce stores 
              and custom theme architectures focused on 99+ Core Web Vitals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-2xl bg-brand-primary text-white font-bold flex items-center space-x-3 hover:bg-brand-primary/90 transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/20"
              >
                <span>Browse Engineering Works</span>
                <ArrowRight size={20} />
              </a>
              <div className="flex items-center space-x-4">
                {SOCIAL_LINKS.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all border-white/5"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-slate-500 animate-bounce cursor-pointer" onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-[10px] uppercase tracking-widest font-bold">Details</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 glass border-y border-white/5 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="flex space-x-5 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center transition-all group-hover:bg-brand-primary/10">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="Philosophy" subtitle="Engineering clarity into complex CMS requirements.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden aspect-square md:aspect-auto md:h-[600px] border-2 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800" 
                alt="Adnan" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass p-6 rounded-3xl border-white/10 text-center">
                  <p className="font-display font-bold text-brand-primary">Senior Engineering Specialist</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-display font-bold">Bridging Business Goals with Technical Excellence</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              I specialize in custom WordPress ecosystems where performance isn't an afterthought. 
              My approach combines modern frontend methodologies with robust backend PHP engineering 
              to deliver sites that scale without compromise.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl glass border-white/10">
                <div className="text-4xl font-display font-bold text-brand-primary mb-1">99+</div>
                <div className="text-sm text-slate-400 uppercase tracking-widest font-bold">Core Web Vitals</div>
              </div>
              <div className="p-6 rounded-3xl glass border-white/10">
                <div className="text-4xl font-display font-bold text-brand-secondary mb-1">Custom</div>
                <div className="text-sm text-slate-400 uppercase tracking-widest font-bold">Theme Frameworks</div>
              </div>
            </div>

            <div className="pt-4 flex space-x-4">
              <button className="px-6 py-3 rounded-xl bg-white/10 text-white text-sm font-bold flex items-center space-x-2 hover:bg-white/20 transition-all border border-white/10">
                <Download size={18} />
                <span>Technical CV</span>
              </button>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="px-6 py-3 rounded-xl border border-brand-primary/50 text-brand-primary text-sm font-bold hover:bg-brand-primary hover:text-white transition-all">
                Project Discussion
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Selected Projects" subtitle="Custom-engineered solutions for high-traffic environments." dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group glass rounded-[2rem] overflow-hidden border-white/5 flex flex-col hover:border-brand-primary/30 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a href={project.link} className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center">
                    <Globe size={20} />
                  </a>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-brand-primary py-1 px-2 rounded-md bg-brand-primary/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
                <a href={project.link} className="inline-flex items-center space-x-2 text-sm font-bold text-white">
                  <span>View Case Study</span>
                  <ArrowRight size={16} className="text-brand-primary" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Work History" subtitle="Leading technical teams and delivering complex CMS architectures.">
        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="glass p-8 rounded-[2rem] border-white/10 hover:border-brand-primary/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-display font-bold">{exp.role}</h3>
                  <p className="text-brand-secondary font-medium">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 px-3 py-1 rounded-lg bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-widest h-fit">
                  {exp.period}
                </div>
              </div>
              <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-brand-primary mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get in Touch" subtitle="Available for freelance consultations and high-impact project collaborations." dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <h3 className="text-3xl font-display font-bold">Let's discuss your next build.</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary"><Mail size={24} /></div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Direct Contact</p>
                  <a href="mailto:contact@adnan.com" className="text-xl font-display font-bold hover:text-brand-primary transition-colors">contact@adnan.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary"><Linkedin size={24} /></div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">LinkedIn Professional</p>
                  <a href="https://linkedin.com/in/adnan" target="_blank" rel="noopener noreferrer" className="text-xl font-display font-bold hover:text-brand-secondary transition-colors">linkedin.com/in/adnan</a>
                </div>
              </div>
            </div>
          </div>
          <form className="glass p-10 rounded-[2.5rem] border-white/10 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all" />
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all" />
            </div>
            <textarea rows={5} placeholder="Describe your project goals..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all resize-none"></textarea>
            <button type="submit" className="w-full py-5 rounded-2xl bg-brand-primary text-white font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20">
              Submit Inquiry
            </button>
          </form>
        </div>
      </Section>

      <footer className="py-12 border-t border-white/5 relative z-10 text-center md:text-left">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="text-2xl font-display font-bold tracking-tighter">ADNAN<span className="text-brand-primary">.</span></a>
            <p className="text-sm text-slate-500 mt-2">© {new Date().getFullYear()} Adnan. All technical rights reserved.</p>
          </div>
          <div className="flex items-center space-x-6">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.name} href={link.url} className="text-slate-400 hover:text-white transition-colors">{link.icon}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* Include the AIAssistant here */}
      <AIAssistant />
    </div>
  );
};

export default App;