import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, MessageSquare, ArrowDown, Cpu, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const phrases = [
  'Artificial Intelligence Student',
  'Machine Learning Enthusiast',
  'Deep Learning Developer',
  'Natural Language Processing Explorer',
  'Cloud Computing Learner'
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && displayText === currentPhrase) {
      // Pause at the end of typing
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
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
    // Confetti effect
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#8b5cf6', '#ec4899']
    });

    // Download action
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Noor_Misba_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-200">Welcome to my space</span>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold font-outfit text-white tracking-tight mb-4"
          >
            Hi, I'm <span className="text-gradient">Noor Misba</span>
          </motion.h1>

          {/* Typewriter text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 md:h-12 flex items-center mb-6"
          >
            <p className="text-xl md:text-3xl font-medium font-outfit text-gray-300">
              I am a <span className="text-blue-400 font-bold border-r-2 border-blue-400 pr-1 animate-pulse">{displayText}</span>
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-300 font-inter font-light leading-relaxed max-w-xl mb-10"
          >
            Passionate Artificial Intelligence & Data Science student at Maharaja Institute of Technology, Thandavapura with a strong foundation in Machine Learning, Deep Learning, Natural Language Processing, and Cloud Computing. I enjoy building intelligent applications that solve real-world problems through data-driven solutions.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={handleDownloadResume}
              className="glow-btn-primary px-8 py-4 rounded-xl flex items-center justify-center gap-2 font-inter font-semibold text-white text-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
            <button
              onClick={handleScrollToContact}
              className="glow-btn-secondary px-8 py-4 rounded-xl flex items-center justify-center gap-2 font-inter font-semibold text-white text-sm cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-purple-400" />
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right Column: Profile Image Placeholder */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            {/* Ambient Background Glow behind profile */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />
            
            {/* Glassmorphic border container */}
            <div className="w-full h-full rounded-2xl p-3 glass-card flex items-center justify-center border border-white/10 shadow-2xl relative overflow-hidden group">
              <img 
                src="/profile.jpg" 
                alt="Noor Misba Profile" 
                className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              
              {/* Interactive neural network overlays (visual effect) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 pointer-events-none transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs text-blue-400 font-semibold flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5" /> AI & Data Science
                </span>
                <span className="text-xs text-gray-400">Noor Misba</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-gray-500 hover:text-white cursor-pointer transition-colors"
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              window.scrollTo({
                top: aboutSection.offsetTop - 80,
                behavior: 'smooth'
              });
            }
          }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.span>
      </div>
    </section>
  );
}
