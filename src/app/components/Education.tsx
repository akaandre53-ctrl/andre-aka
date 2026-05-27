import { motion } from "motion/react";
import { GraduationCap, BookOpen, Cloud, Award, ChevronRight } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const educations = [
  {
    Icon: GraduationCap,
    school: { fr: "Université Nangui Abrogoua", en: "Nangui Abrogoua University" },
    degree: { fr: "Licence Informatique", en: "Bachelor in Computer Science" },
    period: "2021 - 2024",
    description: {
      fr: "Formation académique complète en informatique couvrant les algorithmes, les structures de données, les bases de données et le développement logiciel.",
      en: "Comprehensive academic training in computer science covering algorithms, data structures, databases, and software development.",
    },
    topics: ["Algorithmique", "POO", "Bases de données", "Réseaux", "Mathématiques", "Systèmes"],
    color: "from-blue-500 to-blue-700",
    badge: "Licence",
  },
  {
    Icon: BookOpen,
    school: "CEDITECH",
    degree: { fr: "Formation IA Intensive", en: "Intensive AI Training" },
    period: "2025 - Présent",
    description: {
      fr: "Programme intensif axé sur l'intelligence artificielle moderne : machine learning, deep learning, LLMs, RAG et déploiement cloud.",
      en: "Intensive program focused on modern artificial intelligence: machine learning, deep learning, LLMs, RAG, and cloud deployment.",
    },
    topics: ["Machine Learning", "Deep Learning", "LLMs", "LangChain", "RAG", "Azure AI"],
    color: "from-purple-500 to-blue-600",
    badge: "Certification",
  },
  {
    Icon: Cloud,
    school: "Microsoft Azure",
    degree: { fr: "Azure AI Engineer Associate (AI-102)", en: "Azure AI Engineer Associate (AI-102)" },
    period: "2026 - présent",
    description: {
      fr: "Préparation à la certification Microsoft Azure AI Engineer Associate, couvrant la conception et l'implémentation de solutions IA sur Azure.",
      en: "Preparation for the Microsoft Azure AI Engineer Associate certification, covering the design and implementation of AI solutions on Azure.",
    },
    topics: ["Azure Cognitive Services", "Azure OpenAI", "Computer Vision", "Speech AI", "NLP", "Bot Service"],
    color: "from-sky-500 to-blue-600",
    badge: "En cours",
  },
];

const roadmapSteps = [
  { label: { fr: "Fondamentaux IA", en: "AI Fundamentals" }, done: true },
  { label: { fr: "Machine Learning", en: "Machine Learning" }, done: true },
  { label: { fr: "Deep Learning", en: "Deep Learning" }, done: true },
  { label: { fr: "LLMs & RAG", en: "LLMs & RAG" }, done: true },
  { label: { fr: "Azure AI-102", en: "Azure AI-102" }, done: false },
  { label: { fr: "AI Engineer", en: "AI Engineer" }, done: false },
];

const timeline = [
  { year: "2021 - 2024", event: { fr: "Etudes en Mathématiques-Informatique", en: "Started Mathematics-Computer Science studies" } },
  { year: "2022", event: { fr: "Première découverte de l'intelligence artificielle", en: "First discovery of artificial intelligence" } },
  { year: "2024 - 2025", event: { fr: "Expérience professionnelle chez Concentrix", en: "Professional experience at Concentrix" } },
  { year: "2025 - 2026", event: { fr: "Formation intensive en IA à CEDITECH", en: "Intensive AI training at CEDITECH" } },
  { year: "2026", event: { fr: "Premiers projets IA (Sentiment Analysis, RAG)", en: "First AI projects (Sentiment Analysis, RAG)" } },
  { year: "2026", event: { fr: "Préparation certification Azure AI-102", en: "Preparing Azure AI-102 certification" } },
];

export function Education() {
  const { t, theme, lang } = usePortfolio();
  const isDark = theme === "dark";

  return (
    <section id="education" className={`scroll-mt-24 py-24 ${isDark ? "bg-slate-950" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800 }} className={isDark ? "text-white" : "text-slate-900"}>
            {t("edu.title")}
          </h2>
          <p className={`mt-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}>{t("edu.subtitle")}</p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-700" />
        </motion.div>

        {/* Education cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {educations.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                isDark
                  ? "bg-slate-900 border-slate-700/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-900/20"
                  : "bg-white border-slate-100 hover:border-blue-200 hover:shadow-lg"
              }`}
            >
              {/* Badge */}
              <span className={`absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r ${edu.color} text-white`}>
                {edu.badge}
              </span>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center mb-4 shadow-md`}>
                <edu.Icon size={22} className="text-white" />
              </div>

              <p className={`text-xs font-medium mb-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {typeof edu.school === "string" ? edu.school : (lang === "fr" ? edu.school.fr : edu.school.en)}
              </p>
              <h3 className={`text-base font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                {lang === "fr" ? edu.degree.fr : edu.degree.en}
              </h3>
              <p className={`text-xs mb-3 ${isDark ? "text-blue-400" : "text-blue-600"}`}>{edu.period}</p>
              <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {lang === "fr" ? edu.description.fr : edu.description.en}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-1.5">
                {edu.topics.map(topic => (
                  <span key={topic} className={`px-2 py-0.5 rounded-md text-xs ${
                    isDark ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-500"
                  }`}>
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-xl font-semibold text-center mb-10 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            {t("edu.timeline.title")}
          </motion.h3>

          <div className="relative">
            <div className={`absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 ${isDark ? "bg-slate-700" : "bg-slate-200"}`} />
            <div className="space-y-8">
              {timeline.map(({ year, event }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${i % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className={`inline-block p-4 rounded-2xl border ${
                      isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100 shadow-sm"
                    }`}>
                      <span className="text-sm font-bold text-blue-500">{year}</span>
                      <p className={`text-sm mt-1 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        {lang === "fr" ? event.fr : event.en}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-4 border-white dark:border-slate-900 shadow-md" />
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`p-8 rounded-2xl border ${
            isDark ? "bg-slate-900 border-slate-700/50" : "bg-white border-slate-100 shadow-sm"
          }`}
        >
          <h3 className={`text-lg font-bold mb-6 text-center ${isDark ? "text-white" : "text-slate-900"}`}>
            {lang === "fr" ? "Roadmap IA" : "AI Roadmap"}
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 flex-wrap">
            {roadmapSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium ${
                    step.done
                      ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white border-transparent shadow-md shadow-blue-500/20"
                      : isDark
                        ? "bg-slate-800 border-slate-700 text-slate-400"
                        : "bg-slate-100 border-slate-200 text-slate-500"
                  }`}
                >
                  {step.done && <Award size={14} />}
                  {lang === "fr" ? step.label.fr : step.label.en}
                </motion.div>
                {i < roadmapSteps.length - 1 && (
                  <ChevronRight size={16} className={isDark ? "text-slate-600" : "text-slate-300"} />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
