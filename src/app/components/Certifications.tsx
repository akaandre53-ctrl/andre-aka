import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

type Category = "all" | "ai" | "other"; 

interface Cert {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: "ai" | "other";
  description: { fr: string; en: string };
  color: string;
  icon: string;
  placeholder?: boolean;
}

const certs: Cert[] = [
  {
    id: 1,
    title: "Azure AI Engineer Associate (AI-102)",
    issuer: "Microsoft",
    date: "2026 - En préparation",
    category: "ai",
    description: {
      fr: "Certification officielle Microsoft pour concevoir et implémenter des solutions IA sur Azure.",
      en: "Official Microsoft certification for designing and implementing AI solutions on Azure.",
    },
    color: "from-sky-500 to-blue-600",
    icon: "☁️",
  },
  {
    id: 2,
    title: "Introduction to Machine Learning",
    issuer: "CEDITECH",
    date: "2024",
    category: "ai",
    description: {
      fr: "Formation complète aux fondamentaux du machine learning : régression, classification, clustering.",
      en: "Complete training in machine learning fundamentals: regression, classification, clustering.",
    },
    color: "from-purple-500 to-blue-600",
    icon: "🤖",
  },
  {
    id: 3,
    title: "LLMs & Generative AI",
    issuer: "CEDITECH",
    date: "2024",
    category: "ai",
    description: {
      fr: "Maîtrise des grands modèles de langage, fine-tuning, prompt engineering et IA générative.",
      en: "Mastery of large language models, fine-tuning, prompt engineering, and generative AI.",
    },
    color: "from-indigo-500 to-purple-600",
    icon: "🧠",
  },
  {
    id: 4,
    title: "Python for Data Science",
    issuer: "En ligne",
    date: "2023",
    category: "ai",
    description: {
      fr: "Maîtrise de Python pour l'analyse de données, NumPy, Pandas et visualisation.",
      en: "Mastery of Python for data analysis, NumPy, Pandas, and visualization.",
    },
    color: "from-green-500 to-teal-600",
    icon: "🐍",
  },
  {
    id: 5,
    title: "Communication & Public Speaking",
    issuer: "Formation professionnelle",
    date: "2023",
    category: "other",
    description: {
      fr: "Formation avancée en communication, prise de parole en public et art oratoire.",
      en: "Advanced training in communication, public speaking, and oratory.",
    },
    color: "from-orange-500 to-red-500",
    icon: "🎤",
  },
  {
    id: 6,
    title: "Entrepreneurship & Innovation",
    issuer: "Programme entrepreneuriat",
    date: "2024",
    category: "other",
    description: {
      fr: "Programme d'entrepreneuriat couvrant la création d'entreprise, l'innovation et le business model.",
      en: "Entrepreneurship program covering business creation, innovation, and business models.",
    },
    color: "from-yellow-500 to-orange-500",
    icon: "🚀",
  },
  {
    id: 7,
    title: "Spoken-English Skills (1500 Minutes Engagement) - Carnegie Speech",
    issuer: "Carnegie Speech",
    date: "2025",
    category: "other",
    description: {
      fr: "Certification attestant de plus de 1500 minutes d'apprentissage actif et intensif de l'anglais oral avec la technologie NativeAccent de Carnegie Speech.",
      en: "Certification demonstrating more than 1500 minutes of active, intensive spoken English learning using Carnegie Speech's NativeAccent technology.",
    },
    color: "from-cyan-500 to-sky-600",
    icon: "🗣️",
  },
  {
    id: 8,
    title: "Votre prochain certificat",
    issuer: "À ajouter",
    date: "-",
    category: "ai",
    description: {
      fr: "Espace réservé pour votre prochain certificat. Ajoutez vos nouvelles certifications ici.",
      en: "Placeholder for your next certificate. Add your new certifications here.",
    },
    color: "from-slate-500 to-slate-600",
    icon: "➕",
    placeholder: true,
  },
];

export function Certifications() {
  const { t, theme, lang } = usePortfolio();
  const isDark = theme === "dark";
  // const [activeCategory, setActiveCategory] = useState<Category>("all");

  // const categories: { id: Category; label: string }[] = [
  //   { id: "all", label: t("cert.all") },
  //   { id: "ai", label: t("cert.ai") },
  //   { id: "other", label: t("cert.other") },
  // ];

  const carouselItems = [
    {
      id: "cisco",
      img: new URL("./figma/py1.png", import.meta.url).href,
      title: "Python Essentials 1 - Cisco Networking Academy",
      desc:
        "Conception, développement, débogage et exécution de programmes informatiques simples en Python 3. Analyse algorithmique de problèmes.",
    },
    {
      id: "ceditech",
      img: new URL("./figma/Bootcamp_Certificate.jpeg", import.meta.url).href,
      title: "Bootcamp - Fondation Informatique - CEDITECH",
      desc:
        "Programme intensif de renforcement de capacités d'une durée de 1 mois, démontrant la maîtrise des connaissances de base en informatique et la capacité à les appliquer dans des contextes réels et innovants.",
    },
    {
      id: "udemy",
      img: new URL("./figma/Udemy_certif.jpg", import.meta.url).href,
      title: "Recrutement IA : automatiser et optimiser l'embauche",
      desc:
        "Formation sur l'automatisation et l'optimisation des processus de recrutement grâce aux outils d'Intelligence Artificielle.",
    },
    {
      id: "carnegie",
      img: new URL("./figma/english.png", import.meta.url).href,
      title: "Spoken-English Skills (1500 Minutes Engagement) - Carnegie Speech",
      desc:
        "Certification attestant de plus de 1500 minutes d'apprentissage actif et intensif de l'anglais oral avec la technologie NativeAccent de Carnegie Speech.",
    },
  ];

  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + carouselItems.length) % carouselItems.length);
  const next = () => setIdx((i) => (i + 1) % carouselItems.length);

  return (
    <section id="certifications" className={`scroll-mt-24 py-24 ${isDark ? "bg-slate-900" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800 }} className={isDark ? "text-white" : "text-slate-900"}>
            {t("cert.title")}
          </h2>
          <p className={`mt-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}>{t("cert.subtitle")}</p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-700" />
        </motion.div>

        {/* Filter tabs */}
        {/*
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className={`inline-flex p-1 rounded-xl gap-1 ${isDark ? "bg-slate-800" : "bg-slate-100"}`}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md shadow-blue-500/20"
                    : isDark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>
        */}

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className={`rounded-2xl overflow-hidden shadow-md ${isDark ? "bg-slate-800" : "bg-white"}`}>
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={carouselItems[idx].id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col sm:flex-row items-center"
              >
                <div className="w-full sm:w-1/2 p-4 flex items-center justify-center">
                  <img
                    src={carouselItems[idx].img}
                    alt={carouselItems[idx].title}
                    className="max-h-64 sm:max-h-80 w-full object-contain rounded-md"
                  />
                </div>

                <div className="w-full sm:w-1/2 p-6">
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                    {carouselItems[idx].title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {carouselItems[idx].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            aria-label="Précédent"
            className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full border bg-white/80 backdrop-blur transition hover:scale-105 ${isDark ? "border-slate-700 bg-slate-800/60" : "border-slate-200"}`}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            aria-label="Suivant"
            className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full border bg-white/80 backdrop-blur transition hover:scale-105 ${isDark ? "border-slate-700 bg-slate-800/60" : "border-slate-200"}`}
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex items-center justify-center gap-2 mt-4">
            {carouselItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Aller à ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-colors ${i === idx ? "bg-blue-500" : isDark ? "bg-slate-600" : "bg-slate-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
