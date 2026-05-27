import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const navLinks = [
  { key: "nav.about", href: "#about" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.experience", href: "#experience" },
  { key: "nav.education", href: "#education" },
  { key: "nav.certifications", href: "#certifications" },
  { key: "nav.contact", href: "#contact" },
];

const techStack = ["React", "TypeScript", "Tailwind CSS", "Motion", "Python", "LangChain"];

export function Footer() {
  const { t, theme, lang } = usePortfolio();
  const isDark = theme === "dark";

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={`pt-16 pb-8 border-t ${
      isDark ? "bg-slate-950 border-slate-800" : "bg-slate-900 border-slate-800"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white text-sm font-bold">AEA</span>
              </div>
              <span className="text-white font-semibold">André Eclésiaste Aka</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              {lang === "fr"
                ? "Étudiant AI Engineer passionné, basé à Abidjan. Construire l'avenir avec l'intelligence artificielle."
                : "Passionate AI Engineering student based in Abidjan. Building the future with artificial intelligence."
              }
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: "https://github.com/akaandre53-ctrl" },
                { Icon: Linkedin, href: "https://linkedin.com" },
                { Icon: Mail, href: "mailto:akaandre53@gmail.com" },
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Navigation</h4>
            <div className="space-y-2">
              {navLinks.map(({ key, href }) => (
                <a
                  key={key}
                  href={href}
                  onClick={e => {
                    e.preventDefault();
                    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {t(key)}
                </a>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map(tech => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-slate-800 text-slate-400 text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-slate-500 text-xs mt-4 leading-relaxed">
              {lang === "fr"
                ? "Ouvert aux opportunités de stage, collaboration et projets innovants."
                : "Open to internship opportunities, collaboration, and innovative projects."
              }
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs flex items-center gap-1.5">
            {t("footer.made")} <Heart size={12} className="text-red-500 fill-red-500" /> André Eclésiaste Aka. {new Date().getFullYear()} {t("footer.rights")}
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ArrowUp size={14} />
            {lang === "fr" ? "Retour en haut" : "Back to top"}
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
