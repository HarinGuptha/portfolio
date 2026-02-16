import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Brain, Lightbulb } from "lucide-react";

const stories = [
  {
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    title: "Who I Am",
    content: "I'm a developer who doesn't just write code—I craft experiences. My background spans full-stack engineering, where I thrive in solving complex logical problems while keeping the user journey seamless."
  },
  {
    icon: <Palette className="w-6 h-6 text-purple-400" />,
    title: "What I Love",
    content: "There's a special kind of magic in turning a Figma design into a pixel-perfect, interactive reality. I'm obsessed with micro-interactions, clean typography, and performance optimization."
  },
  {
    icon: <Brain className="w-6 h-6 text-pink-400" />,
    title: "How I Work",
    content: "I believe in iterative perfection. Whether it's architecting a scalable backend or refining a button's hover state, I apply the same level of rigorous attention to detail."
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    title: "Why It Matters",
    content: "Technology without humanity is just cold logic. My goal is to build software that feels human, intuitive, and maybe even a little bit magical."
  }
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Beyond the Code</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl">
            A glimpse into my philosophy, process, and the values that drive my work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/5">
                {story.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{story.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {story.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
