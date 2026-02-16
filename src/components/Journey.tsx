import { motion } from "framer-motion";
import { GitPullRequest, Users, Code2, Trees, Sparkles } from "lucide-react";

const journeySteps = [
  {
    title: "The Curiosity",
    description: "It began with a simple question: 'Let me try contributing once.' A spark that led to exploring the vast world of open-source.",
    icon: Sparkles,
    color: "text-blue-400",
  },
  {
    title: "Hacktoberfest 2025",
    description: "The turning point. Curiosity evolved into action, with multiple accepted pull requests in real-world production repositories.",
    icon: GitPullRequest,
    color: "text-orange-500",
  },
  {
    title: "Global Collaboration",
    description: "Collaborating with developers worldwide, understanding complex codebases, and writing clean, maintainable production-level code.",
    icon: Users,
    color: "text-purple-400",
  },
  {
    title: "Beyond Code",
    description: "Digital contributions creating real-world change. A tree was planted on my behalf, symbolizing growth and positive impact.",
    icon: Trees,
    color: "text-green-400",
  }
];

export function Journey() {
  return (
    <section id="journey" className="py-24 bg-secondary/10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Open-Source Milestone</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hacktoberfest 2025 was more than just a challenge—it was the moment I realized that code can build both software and communities.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 text-center md:text-left md:w-1/2">
                  <div className={`inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 mb-6 ${index % 2 === 0 ? "md:float-right" : "md:float-left"}`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <div className="clear-both" />
                  <div className={`${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <h3 className="text-2xl font-bold mb-4 font-display">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="relative z-10 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                <div className="flex-1 md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass-card p-8 md:p-12 rounded-3xl text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex p-4 rounded-full bg-primary/20 text-primary mb-6">
            <Code2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-4 font-display">Mindset Over Achievements</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            This journey taught me that open-source isn't just about PRs—it's about a culture of contribution, 
            continuous learning, and the confidence to dive into the unknown. Hacktoberfest 2025 was just the beginning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
