import { motion } from "motion/react";
import { usePortfolio } from "../context/PortfolioContext";
import { Mic2, Lightbulb, TrendingUp, Users, Code2, Brain } from "lucide-react";
import { FaLinkedin, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const passions = [
  { Icon: Brain, label: { fr: "Intelligence Artificielle", en: "Artificial Intelligence" } },
  { Icon: Mic2, label: { fr: "Slam & Prise de parole", en: "Slam & Public Speaking" } },
  { Icon: Code2, label: { fr: "Développement Full-Stack", en: "Full-Stack Development" } },
  { Icon: Lightbulb, label: { fr: "Entrepreneuriat", en: "Entrepreneurship" } },
];

const aboutPhotoUrl = new URL("./figma/im1.jpg", import.meta.url).href;

function SectionHeader({ title, subtitle, isDark }: { title: string; subtitle: string; isDark: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800 }} className={isDark ? "text-white" : "text-slate-900"}>
        {title}
      </h2>
      <p className={`mt-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}>{subtitle}</p>
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-700" />
    </motion.div>
  );
}

export function About() {
  const { t, theme, lang } = usePortfolio();
  const isDark = theme === "dark";

  return (
    <section id="about" className={`scroll-mt-24 py-24 ${isDark ? "bg-slate-900" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t("about.title")} subtitle={t("about.subtitle")} isDark={isDark} />

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-3xl p-8 ${isDark ? "bg-slate-800/80 border border-slate-700 shadow-xl shadow-slate-900/10" : "bg-white border border-slate-200 shadow-lg"}`}
          >
            <div className="flex flex-col items-center text-center gap-6">
              <img
                id="aboutPhoto"
                src={aboutPhotoUrl}
                className="w-72 h-72 sm:w-80 sm:h-80 rounded-full object-cover border-2 border-blue-500 shadow-xl"
                alt="André Eclésiaste Aka"
              />
              <div className="space-y-3">
                <p className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-600"}`}>{t("about.subtitle")}</p>
                <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>André Eclésiaste Aka</h3>
                <div className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-700" />
              </div>
            </div>

            <div className="mt-8">
              <div className="grid gap-3 sm:grid-cols-2">
                <a href="https://www.linkedin.com/in/andr%C3%A9-eccl%C3%A9siaste-aka" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition hover:border-blue-400 hover:bg-blue-50 ${isDark ? "bg-slate-900 border-slate-700 text-slate-100" : "bg-blue-50 border-blue-100 text-blue-700"}`}>
                  <FaLinkedin className="text-base" />
                  LinkedIn
                </a>
                <a href="mailto:akaandre53@gmail.com" aria-label="Email" className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition hover:border-slate-300 hover:bg-slate-100 ${isDark ? "bg-slate-900 border-slate-700 text-slate-100" : "bg-slate-50 border-slate-200 text-slate-700"}`}>
                  <FaEnvelope className="text-base" />
                  Email
                </a>
                <a href="https://web.facebook.com/AndreAkaOfficiel" target="_blank" rel="noreferrer" aria-label="Facebook" className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition hover:border-blue-400 hover:bg-blue-50 ${isDark ? "bg-slate-900 border-slate-700 text-slate-100" : "bg-blue-50 border-blue-100 text-blue-700"}`}>
                  <FaFacebookF className="text-base" />
                  Facebook
                </a>
                <a href="https://instagram.com/akaandre_officiel" target="_blank" rel="noreferrer" aria-label="Instagram" className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition hover:border-pink-400 hover:bg-pink-50 ${isDark ? "bg-slate-900 border-slate-700 text-slate-100" : "bg-gradient-to-r from-pink-500 to-yellow-500 text-white border-transparent"}`}>
                  <FaInstagram className="text-base" />
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`rounded-3xl p-8 ${isDark ? "bg-slate-900/80 border border-slate-700 shadow-xl shadow-slate-900/10" : "bg-white border border-slate-200 shadow-lg"}`}
          >
            {lang === "fr" ? (
              <div className={`text-base leading-relaxed mb-10 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                <p>
                  Curieux, créatif et résolument orienté solutions, je construis mon parcours à la croisée de
                  l’intelligence artificielle, du développement et de la communication. Je ne vois pas la
                  technologie comme une fin, mais comme un levier puissant pour résoudre des problèmes
                  concrets, simplifier le quotidien et créer de nouvelles opportunités.
                </p>
                <p className="mt-4">
                  Mon ambition est claire : concevoir des produits modernes, utiles et accessibles, capables
                  d’avoir un impact réel sur les entreprises comme sur les communautés. Chaque idée que
                  j’explore part d’une conviction simple : derrière chaque ligne de code, il y a une
                  opportunité d’aider, de connecter et de transformer.
                </p>
                <p className="mt-4">
                  C’est cette vision qui guide mon évolution et nourrit mon engagement dans l’IA, le
                  développement et la création de solutions à fort impact humain.
                </p>
              </div>
            ) : (
              <div className={`text-base leading-relaxed mb-10 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                <p>
                  Curious, creative and decidedly solution-oriented, I build my path at the intersection of
                  artificial intelligence, development and communication. I don’t see technology as an end in
                  itself, but as a powerful lever to solve real problems, simplify everyday life and create
                  new opportunities.
                </p>
                <p className="mt-4">
                  My ambition is clear: to design modern, useful and accessible products capable of having a
                  real impact on businesses and communities. Every idea I explore starts from a simple
                  conviction: behind every line of code there is an opportunity to help, to connect and to
                  transform.
                </p>
                <p className="mt-4">
                  This vision guides my growth and fuels my commitment to AI, development and creating
                  high-impact, human-centered solutions.
                </p>
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              {passions.map(({ Icon, label }) => (
                <motion.div
                  key={label.fr}
                  whileHover={{ y: -3 }}
                  className={`flex items-start gap-3 p-4 rounded-3xl border transition ${isDark ? "bg-slate-800 border-slate-700 hover:border-blue-500/40" : "bg-slate-50 border-slate-200 hover:border-blue-300"}`}
                >
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <span className={`text-sm font-medium ${isDark ? "text-slate-100" : "text-slate-800"}`}>
                    {lang === "fr" ? label.fr : label.en}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
