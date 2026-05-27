import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Lang = "fr" | "en";
type Theme = "light" | "dark";

interface PortfolioContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (key: string) => string;
}

const tr: Record<string, Record<Lang, string>> = {
  // Nav
  "nav.home": { fr: "Accueil", en: "Home" },
  "nav.about": { fr: "À Propos", en: "About" },
  "nav.projects": { fr: "Projets", en: "Projects" },
  "nav.experience": { fr: "Expérience", en: "Experience" },
  "nav.education": { fr: "Formation", en: "Education" },
  "nav.certifications": { fr: "Certifications", en: "Certifications" },
  "nav.skills": { fr: "Compétences", en: "Skills" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  // Hero
  "hero.greeting": { fr: "Bonjour, je suis", en: "Hello, I am" },
  "hero.title": { fr: "AI Engineering en Formation | Informatique | Innovation | Entrepreneuriat | Communication ", en: "AI Engineering in Training | Computer Science | Innovation | Entrepreneurship | Communication" },
  "hero.subtitle": { fr: "Construire des solutions intelligentes avec l'IA, les données, les LLMs et les technologies web modernes.", en: "Building intelligent solutions with AI, Data, LLMs and modern web technologies." },
  "hero.cta.projects": { fr: "Voir mes projets", en: "View my projects" },
  "hero.cta.cv": { fr: "Télécharger CV", en: "Download CV" },
  "hero.location": { fr: "Abidjan, Côte d'Ivoire", en: "Abidjan, Côte d'Ivoire" },
  "hero.stats.projects": { fr: "Projets IA", en: "AI Projects" },
  "hero.stats.tech": { fr: "Technologies", en: "Technologies" },
  "hero.stats.certs": { fr: "Certifications", en: "Certifications" },
  "hero.stats.years": { fr: "Années d'étude", en: "Years of study" },
  // About
  "about.title": { fr: "À Propos", en: "About Me" },
  "about.subtitle": { fr: "Passionné d'IA, d'innovation et de communication", en: "Passionate about AI, innovation and communication" },
  "about.bio": { fr: "Étudiant en informatique et futur AI Engineer basé à Abidjan, je combine une solide formation en mathématiques et informatique avec une passion profonde pour l'intelligence artificielle. Je crois en la puissance de l'IA pour transformer le continent africain et résoudre des problèmes réels.", en: "Computer science student and future AI Engineer based in Abidjan, I combine a solid foundation in mathematics and computer science with a deep passion for artificial intelligence. I believe in the power of AI to transform the African continent and solve real-world problems." },
  "about.skills.tech": { fr: "Compétences Techniques", en: "Technical Skills" },
  "about.skills.soft": { fr: "Compétences Humaines", en: "Soft Skills" },
  "skills.title": { fr: "Compétences", en: "Skills" },
  "edu.timeline.title": { fr: "Mon Parcours", en: "My Journey" },
  // Projects
  "projects.title": { fr: "Projets", en: "Projects" },
  "projects.subtitle": { fr: "Solutions IA innovantes que j'ai construites", en: "Innovative AI solutions I've built" },
  "projects.github": { fr: "GitHub", en: "GitHub" },
  "projects.demo": { fr: "Démo", en: "Demo" },
  "projects.viewall": { fr: "Voir tous les projets", en: "View all projects" },
  // Experience
  "exp.title": { fr: "Expérience", en: "Experience" },
  "exp.subtitle": { fr: "Mon parcours professionnel", en: "My professional journey" },
  // Education
  "edu.title": { fr: "Formation", en: "Education" },
  "edu.subtitle": { fr: "Mon parcours académique et mes certifications", en: "My academic path and learning journey" },
  // Certifications
  "cert.title": { fr: "Certifications", en: "Certifications" },
  "cert.subtitle": { fr: "Mes qualifications et accréditations", en: "My qualifications and credentials" },
  "cert.all": { fr: "Toutes", en: "All" },
  "cert.ai": { fr: "IA / Informatique", en: "AI / Tech" },
  "cert.other": { fr: "Autres", en: "Others" },
  // Contact
  "contact.title": { fr: "Contact", en: "Contact" },
  "contact.subtitle": { fr: "Travaillons ensemble sur votre prochain projet IA", en: "Let's work together on your next AI project" },
  "contact.name": { fr: "Nom complet", en: "Full name" },
  "contact.email": { fr: "Email", en: "Email" },
  "contact.message": { fr: "Message", en: "Message" },
  "contact.send": { fr: "Envoyer le message", en: "Send message" },
  "contact.sent": { fr: "Message envoyé ! Je vous répondrai bientôt.", en: "Message sent! I'll get back to you soon." },
  "contact.cta": { fr: "Prêt à collaborer ?", en: "Ready to collaborate?" },
  // Footer
  "footer.rights": { fr: "Tous droits réservés.", en: "All rights reserved." },
  "footer.made": { fr: "Conçu avec passion", en: "Crafted with passion" },
};

const PortfolioContext = createContext<PortfolioContextType | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  }, []);

  const t = useCallback((key: string) => {
    return tr[key]?.[lang] ?? key;
  }, [lang]);

  return (
    <PortfolioContext.Provider value={{ lang, setLang, theme, toggleTheme, t }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be used within PortfolioProvider");
  return ctx;
}
