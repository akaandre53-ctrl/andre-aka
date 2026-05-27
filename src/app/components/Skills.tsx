import { motion } from "motion/react";
import { Brain, Code2, Cloud, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { usePortfolio } from "../context/PortfolioContext";

const categories = [
  {
    title: "AI & Data",
    description: "Conception de solutions IA modernes orientées impact réel.",
    icon: Brain,
    items: [
      "Machine Learning",
      "Deep Learning",
      "LLM & RAG",
      "Prompt Engineering",
      "NLP",
      "Data Analysis",
      "Python • Scikit-learn • TensorFlow • LangChain • OpenAI API...",
    ],
  },
  {
    title: "Development",
    description: "Développement d’applications modernes, rapides et évolutives.",
    icon: Code2,
    items: [
      "React & Next.js",
      "APIs",
      "UI modernes",
      "Intégration IA",
      "Responsive Design",
      "React • TypeScript • Tailwind CSS • GitHub",
    ],
  },
  {
    title: "Cloud & Deployment",
    description: "Déploiement et intégration de solutions IA dans des environnements réels.",
    icon: Cloud,
    items: [
      "Azure AI",
      "AWS Basics",
      "Docker Basics",
      "API Integration",
      "Azure • AWS • Docker • FastAPI",
    ],
  },
  {
    title: "Communication & Leadership",
    description: "Communication claire et pédagogie pour transformer des idées complexes.",
    icon: Users,
    items: [
      "Public Speaking",
      "Storytelling",
      "Formation",
      "Leadership",
      "Team Collaboration",
      "Public Speaking Trainer",
    ],
  },
];

export function Skills() {
  const { t, theme } = usePortfolio();
  const isDark = theme === "dark";

  return (
    <section id="skills" className={`scroll-mt-24 py-24 ${isDark ? "bg-slate-950" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className={`text-sm uppercase tracking-[0.28em] mb-4 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            Une combinaison entre IA, développement moderne et communication professionnelle
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 3.25vw, 3rem)", fontWeight: 800 }} className={isDark ? "text-white" : "text-slate-900"}>
            {t("skills.title")}
          </h2>
          <p className={`mx-auto mt-4 max-w-2xl text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Si vous souhaitez transformer une idée en produit concret à fort impact, discutons-en.
            J’accompagne les projets de la stratégie jusqu’à la réalisation.          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {categories.map(({ title, description, icon: Icon, items }, index) => (
              <AccordionItem
                key={title}
                value={`category-${index}`}
                className={`overflow-hidden rounded-[1.75rem] border transition-all duration-300 ${isDark ? "border-slate-800 bg-slate-900/85 hover:border-blue-500/30 hover:shadow-lg" : "border-slate-200 bg-white/90 hover:border-blue-200 hover:shadow-lg"}`}
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline">
                  <div className="flex w-full items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`rounded-3xl p-3 ${isDark ? "bg-slate-800" : "bg-slate-100"}`}>
                        <Icon size={20} className={isDark ? "text-slate-100" : "text-slate-700"} />
                      </div>
                      <div className="text-left">
                        <p className={`text-base font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{title}</p>
                        <p className={`mt-1 text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>{description}</p>
                      </div>
                    </div>
                    <span className={`text-sm font-semibold ${isDark ? "text-slate-300" : "text-slate-500"}`}>Outils</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="border-t px-6 pt-0 pb-6 border-slate-200 dark:border-slate-700/80">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {items.map(skill => (
                      <div
                        key={skill}
                        className={`rounded-2xl border p-4 transition-all duration-300 ${isDark ? "bg-slate-800/60 border-slate-700/50 hover:border-blue-500/30 hover:shadow-lg" : "bg-white border-slate-100 hover:border-blue-200 hover:shadow-lg"}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`inline-block h-2.5 w-2.5 rounded-full ${isDark ? "bg-cyan-400" : "bg-slate-700"}`} />
                          <span className={`text-sm font-medium no-underline hover:no-underline ${isDark ? "text-slate-100" : "text-slate-900"}`}>{skill}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
