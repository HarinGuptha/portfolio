import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useSendMessage } from "@/hooks/use-portfolio";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send, Loader2, Linkedin, Github, Twitter } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const { mutate, isPending } = useSendMessage();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values, {
      onSuccess: () => {
        form.reset();
      }
    });
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Footer Ambient Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                Let's Build Something <span className="text-gradient-primary">Amazing.</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                Whether you have a project in mind, a question about my work, or just want to connect—I'd love to hear from you.
              </p>
              
              <div className="space-y-6 mb-12">
                <a href="mailto:hello@dwarakesh.dev" className="flex items-center gap-4 text-lg hover:text-primary transition-colors group">
                  <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  dwarakeshgupta06@gmail.com
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Connect Socially</h4>
              <div className="flex gap-4">
                <SocialLink href="https://github.com/Dwarakesh2006" icon={<Github className="w-5 h-5" />} />
                <SocialLink href="https://www.linkedin.com/in/dwarakesh-gupta-383115306/" icon={<Linkedin className="w-5 h-5" />} />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-3xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            className="bg-white/5 border-white/10 focus:border-primary/50 h-12 rounded-xl" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            className="bg-white/5 border-white/10 focus:border-primary/50 h-12 rounded-xl" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          className="bg-white/5 border-white/10 focus:border-primary/50 min-h-[150px] resize-none rounded-xl" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full h-14 rounded-xl text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
                >
                  {isPending ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 mt-16 border-t border-white/5 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Dwarakesh Gupta. All rights reserved.
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="p-3 rounded-full bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-white/20"
    >
      {icon}
    </a>
  );
}
