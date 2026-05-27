import { motion } from "motion/react";
import { MapPin, Download, ArrowRight, Sparkles, Brain, Code2, Database } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const techBadges = [
  { label: "Python", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { label: "LLMs", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  { label: "LangChain", color: "bg-green-500/10 text-green-400 border-green-500/20" },
  { label: "Azure AI", color: "bg-sky-500/10 text-sky-400 border-sky-500/20" },
  { label: "RAG", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  { label: "React", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
];

const floatingIcons = [
  { Icon: Brain, x: "10%", y: "20%", delay: 0 },
  { Icon: Code2, x: "85%", y: "15%", delay: 0.5 },
  { Icon: Database, x: "90%", y: "70%", delay: 1 },
  { Icon: Sparkles, x: "5%", y: "75%", delay: 1.5 },
];

const stats = [
  { value: "2+", key: "hero.stats.projects" },
  { value: "10+", key: "hero.stats.tech" },
  { value: "5+", key: "hero.stats.certs" },
  { value: "3+", key: "hero.stats.years" },
];

const heroAvatarUrl = new URL("./figma/im2.jpg", import.meta.url).href;

export function Hero() {
  const { t, theme } = usePortfolio();
  const isDark = theme === "dark";

  return (
    <section
      id="home"
      className={`scroll-mt-24 relative min-h-screen flex items-center overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"
          : "bg-gradient-to-br from-slate-50 via-white to-blue-50"
      }`}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: isDark
            ? "radial-gradient(circle at 1px 1px, rgba(59,130,246,0.15) 1px, transparent 0)"
            : "radial-gradient(circle at 1px 1px, rgba(59,130,246,0.08) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:flex items-center justify-center w-12 h-12 rounded-2xl border backdrop-blur-sm ${
            isDark
              ? "bg-slate-800/50 border-slate-700/50 text-blue-400"
              : "bg-white/70 border-blue-100 text-blue-500"
          }`}
          style={{ left: x, top: y }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3 + delay, repeat: Infinity, delay }}
        >
          <Icon size={22} />
        </motion.div>
      ))}

      {/* Hero image (background) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjB0ZWNobm9sb2d5JTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3Nzk3MDkxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="AI technology"
          initial={{ opacity: 0 }}
          animate={{ opacity: isDark ? 0.05 : 0.04 }}
          transition={{ duration: 1 }}
          className="absolute right-0 top-0 h-full w-1/2 object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 border ${
                isDark
                  ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                  : "bg-blue-50 border-blue-100 text-blue-600"
              }`}
            >
              <MapPin size={14} />
              <span>{t("hero.location")}</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className={isDark ? "text-green-400" : "text-green-600"}>Disponible</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-lg mb-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}
            >
              {t("hero.greeting")}
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="mb-4"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.1 }}
            >
              <span className={isDark ? "text-white" : "text-slate-900"}>André </span>
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Eclésiaste
              </span>
              <br />
              <span className={isDark ? "text-white" : "text-slate-900"}>Aka</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-sm font-medium mb-4 ${isDark ? "text-blue-400" : "text-blue-600"}`}
            >
              {t("hero.title")}
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-base leading-relaxed mb-8 max-w-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {techBadges.map(({ label, color }) => (
                <span
                  key={label}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${color}`}
                >
                  {label}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow text-sm"
              >
                {t("hero.cta.projects")}
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="https://github.com/akaandre53-ctrl/andre-aka/raw/main/src/app/components/figma/CV_2026-05-27_ANDRE%20ECLESIASTE_AKA.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium border text-sm transition-all ${
                  isDark
                    ? "bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
                    : "bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                <Download size={16} />
                {t("hero.cta.cv")}
              </motion.a>
            </motion.div>
          </div>

          {/* Right column - avatar + stats */}
          <div className="flex flex-col items-center gap-8">
            {/* Avatar card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="relative"
            >
              <div className={`relative w-64 h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden border-2 shadow-2xl ${
                isDark ? "border-blue-500/30 shadow-blue-500/20" : "border-blue-200 shadow-blue-100"
              }`}>
                <div className={`w-full h-full flex items-center justify-center ${
                  isDark
                    ? "bg-gradient-to-br from-slate-800 to-slate-900"
                    : "bg-gradient-to-br from-blue-50 to-slate-100"
                }`}>
                  <img
                    src={heroAvatarUrl}
                    alt="André Eclésiaste Aka"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Glassmorphism overlay */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 backdrop-blur-sm ${
                  isDark ? "bg-slate-900/60" : "bg-white/60"
                }`}>
                  <p className={`text-sm font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                    André Eclésiaste Aka
                  </p>
                  <p className={`text-xs ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                    Future AI Engineer
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className={`absolute -top-4 -right-4 px-3 py-2 rounded-xl text-xs font-bold border shadow-lg ${
                  isDark
                    ? "bg-slate-800 border-slate-700 text-blue-400"
                    : "bg-white border-blue-100 text-blue-600"
                }`}
              >
                AI Engineer
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 gap-3 w-full max-w-xs"
            >
              {stats.map(({ value, key }) => (
                <div
                  key={key}
                  className={`p-4 rounded-2xl border text-center ${
                    isDark
                      ? "bg-slate-800/60 border-slate-700/50 backdrop-blur-sm"
                      : "bg-white/80 border-slate-100 backdrop-blur-sm shadow-sm"
                  }`}
                >
                  <p
                    className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent"
                    style={{ fontSize: "1.75rem", fontWeight: 800, lineHeight: 1 }}
                  >
                    {value}
                  </p>
                  <p className={`text-xs mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {t(key)}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={`w-6 h-10 rounded-full border-2 flex justify-center pt-2 ${
          isDark ? "border-slate-600" : "border-slate-300"
        }`}>
          <div className="w-1 h-2 rounded-full bg-blue-500" />
        </div>
      </motion.div>
    </section>
  );
}
