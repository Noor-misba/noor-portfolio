import { Mail, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left: Branding & Copyright */}
        <div className="text-center md:text-left">
          <p className="font-outfit font-bold text-lg text-white mb-1.5">
            Noor<span className="text-blue-400">.Misba</span>
          </p>
          <p className="text-xs text-gray-500 font-inter">
            Copyright © 2026 Noor Misba. All rights reserved.
          </p>
        </div>

        {/* Center: Dedicated Tech tag */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-inter">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>using React & Tailwind</span>
        </div>

        {/* Right: Socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/NoorMisba"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/20 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/noor-misba"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/20 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:noormisba.work@gmail.com"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:border-pink-500/20 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
