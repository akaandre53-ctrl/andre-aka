import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Menu, X, Globe, MapPin } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const navLinks = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.experience", href: "#experience" },
  { key: "nav.education", href: "#education" },
  { key: "nav.certifications", href: "#certifications" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.contact", href: "#contact" },
];

export function Navbar() {
  const { t, theme, toggleTheme, lang, setLang } = usePortfolio();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = theme === "dark";

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-blue-900/10 border-b border-slate-700/50"
            : "bg-white/95 backdrop-blur-md shadow-lg shadow-blue-100/50 border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white text-sm font-bold">AEA</span>
            </div>
            <span className={`font-semibold text-sm hidden sm:block ${isDark ? "text-white" : "text-slate-900"}`}>
              André Aka
            </span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                  isDark
                    ? "text-slate-300 hover:text-white hover:bg-slate-800"
                    : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {t(key)}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Lang toggle */}
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isDark
                  ? "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <Globe size={14} />
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isDark
                  ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
                  : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isDark ? "text-slate-300 hover:bg-slate-800" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`lg:hidden border-t overflow-hidden ${
              isDark ? "bg-slate-900 border-slate-700" : "bg-white border-slate-100"
            }`}
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map(({ key, href }) => (
                <a
                  key={key}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    isDark
                      ? "text-slate-300 hover:text-white hover:bg-slate-800"
                      : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {t(key)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
