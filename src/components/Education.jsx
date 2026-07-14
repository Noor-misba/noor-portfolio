import React from 'react';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

const education = [
  {
    institution: 'Maharaja Institute of Technology',
    location: 'Thandavapura, Karnataka',
    degree: 'Bachelor of Engineering in Artificial Intelligence and Data Science',
    duration: 'Expected Graduation: 2027',
    grade: 'CGPA: 8.9 / 10.0',
    details: 'Focusing on foundations of Artificial Intelligence, Machine Learning models, Deep Learning, Natural Language Processing, relational database design (DBMS), and statistical analytics.'
  },
  {
    institution: 'Anweshana PU College',
    location: 'Biligere, Karnataka',
    degree: 'Pre-University Course (PUC)',
    duration: 'Graduated: 2023',
    grade: 'Percentage: 90.5 / 100.0',
    details: 'Completed higher secondary education specializing in Physics, Chemistry, Mathematics, and Computer Science streams.'
  },
  {
    institution: 'Lions Vidya Samasthe',
    location: 'Hunsur Road, K R Nagar',
    degree: 'School (SSLC)',
    duration: 'Graduated: 2021',
    grade: 'Percentage: 90.8 / 100.0',
    details: 'Secondary School Leaving Certificate with strong grounding in foundational sciences and mathematics.'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden grid-bg">
      <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none glow-orb" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">My Journey</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Academic <span className="text-gradient">Education</span>
          </h3>
          <p className="text-gray-400 font-inter mt-4 text-lg">
            Details of my formal academic qualifications and grades.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="border-l-2 border-white/10 pl-6 md:pl-10 space-y-12 relative ml-4 md:ml-8">
            {education.map((edu, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline bullet dot */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#030014] border-2 border-blue-500 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400 group-hover:scale-125 transition-all duration-300" />
                </div>

                <div className="glass-card rounded-2xl border border-white/5 p-6 md:p-8 hover:border-blue-500/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h4 className="font-outfit font-bold text-xl text-white group-hover:text-blue-300 transition-colors">
                        {edu.institution}
                      </h4>
                      <p className="text-xs text-gray-500 font-inter mt-0.5">{edu.location}</p>
                    </div>
                    <div className="flex flex-col md:items-end">
                      <span className="text-xs font-semibold font-inter text-blue-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.duration}
                      </span>
                      <span className="text-xs font-bold font-outfit text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full mt-1.5 w-fit">
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold font-outfit text-gray-300 mb-3">
                    {edu.degree}
                  </p>
                  
                  <p className="text-sm text-gray-400 font-inter leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
