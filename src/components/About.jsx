import React from 'react';
import { Code, Database, Brain, Terminal, Cloud } from 'lucide-react';

const stats = [
  { label: 'Specialization', value: 'AI & Data Science' },
  { label: 'Core Language', value: 'Python & SQL' },
  { label: 'Interests', value: 'ML / DL / NLP' },
  { label: 'Status', value: 'BE Student (MIT)' }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-2">About Me</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Engineering Smarter <span className="text-gradient">Solutions</span>
          </h3>
          <p className="text-gray-400 font-inter mt-4 text-lg">
            A look into my journey as an Artificial Intelligence & Data Science student.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="glass-card rounded-2xl p-8 border border-white/10 h-full flex flex-col justify-center">
              <h4 className="text-2xl font-bold font-outfit text-white mb-6 flex items-center gap-2">
                <Terminal className="w-6 h-6 text-blue-400" /> Professional Overview
              </h4>
              <p className="text-gray-300 font-inter leading-relaxed mb-6">
                I am Noor Misba, a Bachelor of Engineering student specializing in <strong>Artificial Intelligence and Data Science</strong> at Maharaja Institute of Technology, Thandavapura (Expected Graduation: 2027). With a strong academic foundation reflected in my CGPA of <strong>8.9/10.0</strong>, I focus on engineering intelligent, data-driven systems.
              </p>
              <p className="text-gray-300 font-inter leading-relaxed mb-8">
                Equipped with deep proficiency in <strong>Python</strong> and <strong>SQL</strong>, I specialize in applying machine learning and natural language processing (NLP) to build real-world models. My portfolio ranges from developing web-based fake review classifiers and financial risk models to crop auction database systems and AI research simplifiers.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-left">
                    <p className="text-xs text-gray-500 font-inter uppercase tracking-wider">{stat.label}</p>
                    <p className="text-sm font-semibold font-outfit text-white mt-1">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Areas Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            
            {/* ML & DL Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 flex gap-4 items-start hover:border-purple-500/30 transition-all duration-300">
              <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400 shrink-0">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-outfit font-bold text-lg text-white mb-2">Machine & Deep Learning</h5>
                <p className="text-sm text-gray-400 font-inter leading-relaxed">
                  Building classification, regression, and convolutional neural networks using libraries like Scikit-learn, TensorFlow, and Pandas.
                </p>
              </div>
            </div>

            {/* Data Science Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 flex gap-4 items-start hover:border-blue-500/30 transition-all duration-300">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400 shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-outfit font-bold text-lg text-white mb-2">Data Analytics & SQL</h5>
                <p className="text-sm text-gray-400 font-inter leading-relaxed">
                  Executing statistical analysis, data cleaning, features modeling, exploratory analysis, and managing relational databases.
                </p>
              </div>
            </div>

            {/* Cloud & Big Data Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 flex gap-4 items-start hover:border-pink-500/30 transition-all duration-300">
              <div className="p-3 bg-pink-500/10 rounded-xl border border-pink-500/20 text-pink-400 shrink-0">
                <Cloud className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-outfit font-bold text-lg text-white mb-2">Cloud & Big Data Analytics</h5>
                <p className="text-sm text-gray-400 font-inter leading-relaxed">
                  Experienced with Cloud Computing, Big Data Analytics, Database Management Systems (DBMS), and Operating Systems.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
