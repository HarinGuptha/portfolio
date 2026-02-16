import { motion } from "framer-motion";
import { useExperience } from "@/hooks/use-portfolio";
import { Briefcase, GraduationCap, Users } from "lucide-react";

export function Experience() {
  const { data: experiences } = useExperience();

  const getIcon = (type: string) => {
    switch(type) {
      case 'education': return <GraduationCap className="w-5 h-5" />;
      case 'community': return <Users className="w-5 h-5" />;
      default: return <Briefcase className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Career & Education</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-muted-foreground max-w-sm text-lg">
            My professional path, education, and community involvement over the years.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences?.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Connector - Hidden on Mobile */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />
              
              <div className={`md:flex items-center justify-between gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Date Side */}
                <div className={`hidden md:block w-1/2 text-right ${index % 2 === 0 ? 'text-left' : ''}`}>
                  <span className="font-mono text-sm text-primary/80">{item.duration}</span>
                </div>

                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-card border-4 border-secondary flex items-center justify-center z-10 -translate-x-1/2 md:-translate-x-1/2 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <div className="glass-card p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-colors group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${
                        item.type === 'work' ? 'bg-blue-500/20 text-blue-400' : 
                        item.type === 'education' ? 'bg-purple-500/20 text-purple-400' : 'bg-green-500/20 text-green-400'
                      }`}>
                        {getIcon(item.type)}
                      </div>
                      <span className="md:hidden font-mono text-xs text-muted-foreground">{item.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{item.role}</h3>
                    <div className="text-sm font-medium text-white/80 mb-4">{item.company}</div>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
