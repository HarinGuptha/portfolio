import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { PROJECTS_DATA } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { EXPERIENCE_DATA } from "@/data/experience";
import type { Project, Skill, Experience } from "@/types/portfolio";

// === PROJECTS HOOKS ===
export function useProjects() {
  return {
    data: PROJECTS_DATA as Project[],
    isLoading: false,
    error: null,
  };
}

export function useProject(id: number) {
  return {
    data: (PROJECTS_DATA as Project[]).find((p) => p.id === id) || null,
    isLoading: false,
    error: null,
  };
}

// === SKILLS HOOKS ===
export function useSkills() {
  return {
    data: SKILLS_DATA as Skill[],
    isLoading: false,
    error: null,
  };
}

// === EXPERIENCE HOOKS ===
export function useExperience() {
  return {
    data: EXPERIENCE_DATA as Experience[],
    isLoading: false,
    error: null,
  };
}

// === CONTACT HOOKS ===
interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export function useSendMessage() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactMessage) => {
      // Open email client with pre-filled data
      const mailtoLink = `mailto:hello@dwarakesh.dev?subject=Portfolio Contact: ${encodeURIComponent(data.name)}&body=${encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      )}`;
      window.location.href = mailtoLink;
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Opening Email",
        description: "Your email client will open with the message ready to send.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Unable to open email client. Please email directly to hello@dwarakesh.dev",
        variant: "destructive",
      });
    },
  });
}
