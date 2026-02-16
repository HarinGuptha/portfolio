import { motion } from "framer-motion";
import { useSkills } from "@/hooks/use-portfolio";
import { Cpu, Layout, Server, Database, Brain, Globe } from "lucide-react";

export function Skills() {
  const { data: skills } = useSkills();

  const categories = [
    { id: "frontend", label: "Frontend", icon: <Layout className="w-5 h-5" /> },
    { id: "backend", label: "Backend", icon: <Server className="w-5 h-5" /> },
    { id: "ai", label: "AI & ML", icon: <Brain className="w-5 h-5" /> },
    { id: "design", label: "Design", icon: <Globe className="w-5 h-5" /> },
    { id: "tools", label: "Tools", icon: <Database className="w-5 h-5" /> },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Skill Ecosystem</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl">
            A dynamic network of technologies I leverage to build scalable, intelligent applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => {
            const categorySkills = skills?.filter(s => s.category.toLowerCase() === category.id) || [];
            
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl border-t border-white/10"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.label}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill) => (
                    <div 
                      key={skill.id}
                      className="group relative px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all cursor-default"
                    >
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      {/* Simple proficiency bar at bottom */}
                      {skill.proficiency && (
                        <div className="absolute bottom-0 left-0 h-0.5 bg-primary/50 transition-all w-0 group-hover:w-full rounded-b-lg" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
