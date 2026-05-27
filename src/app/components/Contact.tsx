import { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, Linkedin, Github, CheckCircle2, MapPin, MessageSquare } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

export function Contact() {
  const { t, theme, lang } = usePortfolio();
  const isDark = theme === "dark";
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  const socials = [
    {
      Icon: Mail,
      label: "Email",
      value: "akaandre53@gmail.com",
      href: "mailto:akaandre53@gmail.com",
      color: "from-blue-500 to-blue-700",
    },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      value: "André Eclésiaste Aka",
      href: "https://linkedin.com",
      color: "from-sky-500 to-blue-600",
    },
    {
      Icon: Github,
      label: "GitHub",
      value: "@akaandre53-ctrl",
      href: "https://github.com/akaandre53-ctrl",
      color: "from-slate-600 to-slate-800",
    },
  ];

  return (
    <section id="contact" className={`scroll-mt-24 py-24 ${isDark ? "bg-slate-900" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800 }} className={isDark ? "text-white" : "text-slate-900"}>
            {t("contact.title")}
          </h2>
          <p className={`mt-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}>{t("contact.subtitle")}</p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-700" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left - info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* CTA card */}
            <div className={`p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white`}>
              <MessageSquare size={28} className="mb-3" />
              <h3 className="text-lg font-bold mb-2">{t("contact.cta")}</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                {lang === "fr"
                  ? "Je suis ouvert aux opportunités de stage, collaboration et projets IA. Contactez-moi !"
                  : "I'm open to internship opportunities, collaboration, and AI projects. Get in touch!"
                }
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-blue-100">
                <MapPin size={14} />
                <span>Abidjan, Côte d'Ivoire</span>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse ml-1" />
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socials.map(({ Icon, label, value, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                    isDark
                      ? "bg-slate-800/60 border-slate-700/50 hover:border-blue-500/30"
                      : "bg-slate-50 border-slate-100 hover:border-blue-200 hover:shadow-sm"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shadow-sm`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className={`text-xs font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}>{label}</p>
                    <p className={`text-sm font-medium ${isDark ? "text-white" : "text-slate-900"}`}>{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`lg:col-span-3 p-8 rounded-2xl border ${
              isDark ? "bg-slate-800/50 border-slate-700/50" : "bg-slate-50 border-slate-100"
            }`}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-green-500" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                  {lang === "fr" ? "Message envoyé !" : "Message sent!"}
                </h3>
                <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  {t("contact.sent")}
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-6 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-medium"
                >
                  {lang === "fr" ? "Envoyer un autre" : "Send another"}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={`block text-sm font-medium mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder={lang === "fr" ? "Votre nom complet" : "Your full name"}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none focus:ring-2 focus:ring-blue-500/30 ${
                      isDark
                        ? "bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500"
                        : "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-400"
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="votre@email.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none focus:ring-2 focus:ring-blue-500/30 ${
                      isDark
                        ? "bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500"
                        : "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-400"
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    {t("contact.message")}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder={lang === "fr" ? "Votre message..." : "Your message..."}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none focus:ring-2 focus:ring-blue-500/30 resize-none ${
                      isDark
                        ? "bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500"
                        : "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-400"
                    }`}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow disabled:opacity-70"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  {t("contact.send")}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
