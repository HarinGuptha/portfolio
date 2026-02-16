import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";



export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50 z-0" />
      
      <div className="container px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-2xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary-foreground/80 mb-6 backdrop-blur-sm">
            Available for freelance & full-time roles
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] mb-6 text-gradient">
            I design interfaces people enjoy using <span className="text-muted-foreground font-light italic">&</span> engineer systems that think.
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            I'm Dwarakesh Gupta, a full-stack developer and UI/UX designer bridging the gap between artistic vision and technical precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
            <a 
              href="https://drive.google.com/file/d/1mjcTGhHLxVCeV5bJe8V2hHCTXV-1aTjF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)] hover:shadow-[0_0_25px_-5px_rgba(124,58,237,0.6)] active:scale-95 text-center"
            >
              View My Resume
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all active:scale-95 text-center"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 relative"
        >
          <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
}
