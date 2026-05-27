import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const experiences = [
  {
    company: "Concentrix",
    role: { fr: "Agent Télévente", en: "Telesales Agent" },
    period: { fr: "2024 - 2025", en: "2024 - 2025" },
    location: "Abidjan, Côte d'Ivoire",
    type: { fr: "Expérience professionnelle", en: "Professional Experience" },
    description: {
      fr: "Gestion de la relation client et télévente dans un environnement multiculturel et dynamique, développement de solides compétences en communication et en persuasion.",
      en: "Client relationship management and telesales in a multicultural and dynamic environment, developing strong communication and persuasion skills.",
    },
    achievements: [
      { fr: "Communication client efficace et persuasive", en: "Effective and persuasive client communication" },
      { fr: "Écoute active et résolution de problèmes", en: "Active listening and problem solving" },
      { fr: "Gestion de situations difficiles avec calme", en: "Handling difficult situations calmly" },
      { fr: "Travail en équipe dans un environnement exigeant", en: "Team collaboration in a demanding environment" },
    ],
    skills: ["Communication", "Télévente", "CRM", "Relation client", "Persuasion"],
    color: "from-blue-500 to-blue-700",
    current: false,
  },
  {
    company: "CEDITECH",
    role: { fr: "Étudiant IA - Formation intensive", en: "AI Student - Intensive Training" },
    period: { fr: "2025 - Présent", en: "2024 - Present" },
    location: "Abidjan, Côte d'Ivoire",
    type: { fr: "Formation", en: "Training" },
    description: {
      fr: "Formation intensive en intelligence artificielle couvrant le machine learning, le deep learning, les LLMs et les technologies cloud pour préparer une carrière d'AI Engineer.",
      en: "Intensive AI training covering machine learning, deep learning, LLMs and cloud technologies to prepare for an AI Engineer career.",
    },
    achievements: [
      { fr: "Machine Learning et Deep Learning avancé", en: "Advanced Machine Learning and Deep Learning" },
      { fr: "LLMs et IA générative (LangChain, OpenAI)", en: "LLMs and Generative AI (LangChain, OpenAI)" },
      { fr: "Projets pratiques IA (NLP, RAG)", en: "Practical AI projects (NLP, RAG)" },
      { fr: "Préparation certification Azure AI-102", en: "Azure AI-102 certification preparation" },
    ],
    skills: ["Python", "TensorFlow", "LangChain", "Azure AI", "LLMs", "RAG"],
    color: "from-purple-500 to-blue-600",
    current: true,
  },
];

export function Experience() {
  const { t, theme, lang } = usePortfolio();
  const isDark = theme === "dark";

  return (
    <section id="experience" className={`scroll-mt-24 py-24 ${isDark ? "bg-slate-900" : "bg-white"}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800 }} className={isDark ? "text-white" : "text-slate-900"}>
            {t("exp.title")}
          </h2>
          <p className={`mt-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}>{t("exp.subtitle")}</p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-700" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-8 top-0 bottom-0 w-px ${isDark ? "bg-slate-700" : "bg-slate-200"}`} />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-20"
              >
                {/* Icon dot */}
                <div className={`absolute left-0 top-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                  <Briefcase size={24} className="text-white" />
                </div>
                {exp.current && (
                  <div className="absolute left-0 -top-2 -right-0 flex justify-start pl-14">
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-green-500 text-white">Live</span>
                  </div>
                )}

                {/* Card */}
                <div className={`ml-4 p-6 rounded-2xl border transition-all ${
                  isDark
                    ? "bg-slate-800/50 border-slate-700/50 hover:border-blue-500/30"
                    : "bg-white border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100"
                }`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                        {lang === "fr" ? exp.role.fr : exp.role.en}
                      </h3>
                      <p className="text-blue-500 font-semibold">{exp.company}</p>
                    </div>
                    <div className={`flex flex-col items-end gap-1 text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {lang === "fr" ? exp.period.fr : exp.period.en}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {lang === "fr" ? exp.description.fr : exp.description.en}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-1.5 mb-4">
                    {exp.achievements.map((ach, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                          {lang === "fr" ? ach.fr : ach.en}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                        isDark ? "bg-slate-700 text-slate-300" : "bg-slate-100 text-slate-600"
                      }`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
