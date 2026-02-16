import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, X } from "lucide-react";
import { useProjects } from "@/hooks/use-portfolio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import type { Project } from "@/types/portfolio";

export function Projects() {
  const { data: projects, isLoading } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (isLoading) {
    return (
      <section id="work" className="py-24">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-12 w-48 bg-white/5 rounded-lg" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-white/5 rounded-3xl" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Selected Work</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-muted-foreground max-w-sm text-lg">
            A collection of projects that challenge boundaries and solve real problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="group relative bg-card rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-primary/50 transition-colors duration-500"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted relative">
        {/* Abstract/Tech placeholder gradient if image fails or is loading */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50" />
        
        {/* Use the provided image URL or a fallback */}
        <img 
          src={project.imageUrl || "#"} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
          <span className="px-6 py-3 rounded-full bg-white text-black font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Case Study <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold tracking-wider uppercase text-primary">
            {project.category}
          </span>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors" onClick={e => e.stopPropagation()}>
                <Github className="w-4 h-4 text-muted-foreground hover:text-white" />
              </a>
            )}
            {project.projectUrl && (
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors" onClick={e => e.stopPropagation()}>
                <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-white" />
              </a>
            )}
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground line-clamp-2 mb-6">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full bg-white/5 text-xs text-muted-foreground border border-white/5">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-muted-foreground border border-white/5">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  // Prevent body scroll when modal is open
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden';
  }

  const handleClose = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    document.body.style.overflow = 'unset';
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => handleClose(e)}
        className="absolute inset-0 bg-background/90 backdrop-blur-xl"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-5xl h-full md:h-auto max-h-[90vh] bg-card border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
      >

        <div className="overflow-y-auto h-full custom-scrollbar">
          <div className="relative h-64 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/20 text-sm font-semibold mb-4">
                {project.category}
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">{project.title}</h2>
              <div className="flex gap-4 mt-6">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors flex items-center gap-2 backdrop-blur-sm border border-white/10"
                    onClick={e => e.stopPropagation()}
                  >
                    View Code <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 font-display">The Problem</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.problem}
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 font-display">My Approach</h3>
                <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                  {project.approach}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 font-display">Key Impact</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-md bg-white/5 text-sm border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" /> Full Description
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
