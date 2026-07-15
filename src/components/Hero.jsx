import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download,
  MessageSquare,
  ArrowDown,
  Cpu,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";

const phrases = [
  "Artificial Intelligence Student",
  "Machine Learning Enthusiast",
  "Deep Learning Developer",
  "Natural Language Processing Explorer",
  "Cloud Computing Learner",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && displayText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentPhrase.substring(0, displayText.length - 1)
            : currentPhrase.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  const handleDownloadResume = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#3b82f6", "#8b5cf6", "#ec4899"],
    });

    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}Resume.pdf`;
    link.download = "Noor_Misba_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();

    const contactSection = document.getElementById("contact");

    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-sm shadow-black/5 backdrop-blur">
            <Cpu className="h-4 w-4 text-blue-400" />
            AI student building polished web experiences
          </span>

          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Noor Misba
          </h1>

          <p className="mt-4 text-lg text-slate-300 sm:text-xl lg:max-w-3xl">
            {displayText}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
            I build modern, responsive portfolios and interactive web apps with React, Tailwind, and motion-driven UI.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </button>
            <button
              onClick={handleScrollToContact}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Me
            </button>
          </div>

          <div className="mt-12 flex items-center gap-3 text-sm text-slate-400">
            <Sparkles className="h-5 w-5 text-amber-400" />
            <span>Looking for an intern-friendly developer with strong AI and frontend fundamentals.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm rounded-[32px] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -right-10 bottom-10 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="relative rounded-3xl border border-white/5 bg-white/5 p-6 text-slate-200 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Featured Project</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">AI Portfolio Interface</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                A clean, animated developer portfolio built with React, Vite, and Tailwind CSS.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                  <ArrowDown className="h-4 w-4" />
                  Smooth interaction
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
