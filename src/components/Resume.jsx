import React from 'react';
import { Download, GraduationCap, Award, Calendar, FileText, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const education = [
  {
    degree: 'Bachelor of Engineering (B.E.)',
    institution: 'Maharaja Institute of Technology, Thandavapura',
    duration: '2023 - Present',
    details: 'Artificial Intelligence and Data Science',
  },
  {
    degree: 'Pre-University Course (PUC)',
    institution: 'Anweshana PU College, Biligere',
    duration: '2021 - 2023',
    details: 'Science Stream',
  },
  {
    degree: 'SSLC',
    institution: 'Lions Vidya Samasthe, K.R. Nagar',
    duration: '2020 - 2021',
    details: 'Karnataka State Board',
  }
];
const certifications = [
  'Google Cloud Career Launchpad',
  'Deep Learning Specialization',
  'Fundamentals of Natural Language Processing',
  'Machine Learning (NPTEL)',
  'Python Training (IIT Bombay)'
];

export default function Resume() {
  const handleDownload = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.65 },
      colors: ['#3b82f6', '#8b5cf6', '#ec4899']
    });

    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Noor_Misba_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden grid-bg">
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-purple-600/5 blur-3xl pointer-events-none glow-orb" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-2">Qualifications</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Academic <span className="text-gradient">Timeline</span>
          </h3>
          <p className="text-gray-400 font-inter mt-4 text-lg">
            A history of my education, academic milestones, and core credentials.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <h4 className="text-2xl font-bold font-outfit text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-400" /> Education History
            </h4>

            <div className="border-l border-white/10 pl-6 space-y-10 relative ml-3">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#030014] border border-blue-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold font-inter text-blue-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </span>
                    <h5 className="font-outfit font-bold text-lg text-white group-hover:text-blue-300 transition-colors mt-1">
                      {edu.degree}
                    </h5>
                    <p className="text-sm font-medium text-gray-500 font-inter">{edu.institution}</p>
                    <p className="text-sm text-gray-400 font-inter mt-3 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications Card */}
          <div className="lg:col-span-5 space-y-8">
            <h4 className="text-2xl font-bold font-outfit text-white mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-purple-400" /> Certifications & Achievements
            </h4>

            <div className="glass-card rounded-2xl border border-white/5 p-8 space-y-6">
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300 font-inter leading-relaxed">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                <p className="text-xs text-gray-500 font-inter uppercase tracking-wider">Research Focus</p>
                <p className="text-sm text-gray-300 font-outfit mt-1.5 leading-relaxed">
                  Deep Neural Networks, Natural Language Processing, Statistical Modelling, and Dimensionality Reduction algorithms.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Download Block */}
        <div className="flex flex-col items-center justify-center p-8 rounded-3xl glass-card border border-white/10 max-w-2xl mx-auto text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 pointer-events-none" />
          <FileText className="w-10 h-10 text-blue-400 mb-4" />
          <h4 className="font-outfit font-bold text-xl text-white mb-2">Need a offline copy?</h4>
          <p className="text-sm text-gray-400 font-inter max-w-sm mb-6">
            Get the full details of my technical skill matrix and curriculum vitae in a neat printable PDF.
          </p>
          <button
            onClick={handleDownload}
            className="glow-btn-primary px-8 py-4 rounded-xl flex items-center justify-center gap-2 font-inter font-semibold text-white text-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download Complete Resume
          </button>
        </div>

      </div>
    </section>
  );
}
