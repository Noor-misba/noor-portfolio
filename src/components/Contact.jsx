import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('noormisba.work@gmail.com'); // Mock portfolio email
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Mock network request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({ type: 'success', message: 'Thank you! Your message was sent successfully.' });
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl pointer-events-none glow-orb" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-2">Get In Touch</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Connect With <span className="text-gradient">Me</span>
          </h3>
          <p className="text-gray-400 font-inter mt-4 text-lg">
            Feel free to reach out for project proposals, questions, or just a quick chat.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Direct Info Card */}
            <div className="glass-card rounded-2xl border border-white/5 p-8 space-y-6">
              <h4 className="font-outfit font-bold text-xl text-white mb-6">Contact Channels</h4>
              
              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/20 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-inter">Email Address</p>
                    <p className="text-sm font-semibold font-outfit text-white">noormisba.work@gmail.com</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/noor-misba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/20 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className="p-2.5 bg-purple-500/10 rounded-lg text-purple-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-inter">LinkedIn Profile</p>
                  <p className="text-sm font-semibold font-outfit text-white">linkedin.com/in/noor-misba</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/NoorMisba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-pink-500/20 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className="p-2.5 bg-pink-500/10 rounded-lg text-pink-400">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-inter">GitHub Workspace</p>
                  <p className="text-sm font-semibold font-outfit text-white">github.com/NoorMisba</p>
                </div>
              </a>
            </div>

            {/* Quick status message */}
            <div className="p-6 rounded-2xl glass-card border border-white/5 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
              <p className="text-sm text-gray-400 font-inter leading-relaxed">
                🚀 Always excited to collaborate on data-driven projects, machine learning models, or web application dashboards. Let's make something amazing.
              </p>
            </div>
          </div>

          {/* Right: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl border border-white/5 p-8 h-full">
              <h4 className="font-outfit font-bold text-xl text-white mb-6">Drop a Message</h4>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold font-inter text-gray-400">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      placeholder="Noor Misba"
                      className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 font-inter text-sm"
                      required
                    />
                  </div>
                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold font-inter text-gray-400">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="name@domain.com"
                      className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 font-inter text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold font-inter text-gray-400">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleInputChange}
                    placeholder="Collaboration Opportunity"
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 font-inter text-sm"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold font-inter text-gray-400">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Hello, I would love to build a project with you..."
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 font-inter text-sm resize-none"
                    required
                  ></textarea>
                </div>

                {/* Status Bar */}
                <AnimatePresence>
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-xl flex items-start gap-2.5 text-sm ${
                        status.type === 'success' 
                          ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' 
                          : 'bg-rose-500/10 border border-rose-500/20 text-rose-400'
                      }`}
                    >
                      {status.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 shrink-0" />
                      )}
                      <span className="font-inter">{status.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glow-btn-primary py-4 rounded-xl flex items-center justify-center gap-2 font-inter font-semibold text-white text-sm cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
