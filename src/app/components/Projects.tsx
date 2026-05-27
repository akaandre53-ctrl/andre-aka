import { motion } from "motion/react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

interface Project {
  id: number;
  title: string;
  description: { fr: string; en: string };
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
  status: { fr: string; en: string };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sentiment Analysis AI",
    description: {
      fr: "Modèle d'analyse de sentiment utilisant le NLP et le deep learning pour classifier automatiquement les avis et textes en catégories positives, négatives ou neutres.",
      en: "Sentiment analysis model using NLP and deep learning to automatically classify reviews and text as positive, negative, or neutral.",
    },
    tags: ["Python", "NLP", "Deep Learning", "Scikit-learn", "BERT"],
    image: "https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2UlMjBkYXJrJTIwbW9kZXJufGVufDF8fHx8MTc3OTc1ODg0OHww&ixlib=rb-4.1.0&q=80&w=800",
    github: "https://github.com/akaandre53-ctrl/Projet_analyse_de_sentiment",
    featured: true,
    status: { fr: "Complété", en: "Completed" },
  },
  {
    id: 2,
    title: "Assistant RAG IA",
    description: {
      fr: "Assistant intelligent basé sur l'architecture RAG (Retrieval-Augmented Generation) utilisant LangChain et OpenAI pour répondre à des questions en se basant sur des documents personnalisés.",
      en: "Intelligent assistant based on RAG (Retrieval-Augmented Generation) architecture using LangChain and OpenAI to answer questions from custom documents.",
    },
    tags: ["Python", "LangChain", "OpenAI", "RAG", "Vector DB", "LLM"],
    image: "https://images.unsplash.com/photo-1760670399462-f5e479452c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2UlMjBkYXJrJTIwbW9kZXJufGVufDF8fHx8MTc3OTc1ODg0OHww&ixlib=rb-4.1.0&q=80&w=800",
    github: "https://github.com/P-CIV/assistant-rag",
    featured: true,
    status: { fr: "Complété", en: "Completed" },
   // status: { fr: "En cours", en: "In Progress" },
  },
  {
    id: 3,
    title: "AI Dashboard Analytics",
    description: {
      fr: "Dashboard d'analyse de données propulsé par l'IA avec visualisations en temps réel, prédictions et insights automatiques.",
      en: "AI-powered data analytics dashboard with real-time visualizations, predictions, and automatic insights.",
    },
    tags: ["Python", "React", "Azure AI", "Machine Learning", "Data Viz"],
    image: "https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjB0ZWNobm9sb2d5JTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3Nzk3MDkxMjl8MA&ixlib=rb-4.1.0&q=80&w=800",
    featured: false,
    status: { fr: "Concept", en: "Concept" },
  },
  {
    id: 4,
    title: "Chatbot LLM Multimodal",
    description: {
      fr: "Interface de chatbot intelligente utilisant les LLMs pour des conversations naturelles avec support multimodal (texte, images).",
      en: "Intelligent chatbot interface using LLMs for natural conversations with multimodal support (text, images).",
    },
    tags: ["Python", "OpenAI", "LLM", "React", "FastAPI"],
    image: "https://images.unsplash.com/photo-1737644467636-6b0053476bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjB0ZWNobm9sb2d5JTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3Nzk3MDkxMjl8MA&ixlib=rb-4.1.0&q=80&w=800",
    featured: false,
    status: { fr: "Planifié", en: "Planned" },
  },
];

const statusColors: Record<string, string> = {
  Complété: "bg-green-500/10 text-green-400 border-green-500/20",
  Completed: "bg-green-500/10 text-green-400 border-green-500/20",
  "En cours": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "In Progress": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Concept: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Planifié: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Planned: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

export function Projects() {
  const { t, theme, lang } = usePortfolio();
  const isDark = theme === "dark";

  return (
    <section id="projects" className={`scroll-mt-24 py-24 ${isDark ? "bg-slate-950" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800 }} className={isDark ? "text-white" : "text-slate-900"}>
            {t("projects.title")}
          </h2>
          <p className={`mt-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}>{t("projects.subtitle")}</p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-700" />
        </motion.div>

        {/* Featured projects (large) */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {projects.filter(p => p.featured).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 ${
                isDark
                  ? "bg-slate-900 border-slate-700/50 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-900/20"
                  : "bg-white border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50"
              }`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${
                    statusColors[lang === "fr" ? project.status.fr : project.status.en] || "bg-slate-500/10 text-slate-400"
                  }`}>
                    {lang === "fr" ? project.status.fr : project.status.en}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {lang === "fr" ? project.description.fr : project.description.en}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                      isDark ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-600"
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        isDark
                          ? "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      <Github size={14} />
                      {t("projects.github")}
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={14} />
                      {t("projects.demo")}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects (smaller) */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className={`group flex gap-4 p-5 rounded-2xl border transition-all duration-300 ${
                isDark
                  ? "bg-slate-900 border-slate-700/50 hover:border-blue-500/30"
                  : "bg-white border-slate-100 hover:border-blue-200 hover:shadow-md"
              }`}
            >
              <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className={`text-sm font-bold truncate ${isDark ? "text-white" : "text-slate-900"}`}>
                    {project.title}
                  </h3>
                  <span className={`flex-shrink-0 px-2 py-0.5 rounded-full text-xs border ${
                    statusColors[lang === "fr" ? project.status.fr : project.status.en] || ""
                  }`}>
                    {lang === "fr" ? project.status.fr : project.status.en}
                  </span>
                </div>
                <p className={`text-xs leading-relaxed mb-2 line-clamp-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  {lang === "fr" ? project.description.fr : project.description.en}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className={`px-1.5 py-0.5 rounded text-xs ${
                      isDark ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-500"
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://github.com/akaandre53-ctrl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-medium transition-all hover:scale-105"
            style={isDark
              ? { background: "transparent", borderColor: "#334155", color: "#cbd5e1" }
              : { background: "white", borderColor: "#e2e8f0", color: "#475569" }
            }
          >
            <Github size={16} />
            {t("projects.viewall")}
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
