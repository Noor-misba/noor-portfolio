import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, PenTool, Database, Layers, CheckCircle } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Terminal,
    color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 85 }
    ]
  },
  {
    title: 'Libraries & Frameworks',
    icon: Cpu,
    color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400',
    skills: [
      { name: 'Scikit-learn', level: 85 },
      { name: 'TensorFlow', level: 80 },
      { name: 'PyTorch', level: 75 },
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 85 }
    ]
  },
  {
    title: 'Tools & Databases',
    icon: Database,
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
    skills: [
      { name: 'Power BI', level: 80 },
      { name: 'Tableau', level: 75 },
      { name: 'Excel', level: 85 },
      { name: 'SQL Database', level: 85 },
      { name: 'MongoDB', level: 75 }
    ]
  },
  {
    title: 'Platforms & Concepts',
    icon: Layers,
    color: 'from-orange-500/20 to-red-500/20 border-orange-500/30 text-orange-400',
    skills: [
      { name: 'Google Colab & Kaggle', level: 90 },
      { name: 'GitHub & Git', level: 85 },
      { name: 'Natural Language Processing (NLP)', level: 85 },
      { name: 'Cloud Computing & Big Data', level: 75 },
      { name: 'DBMS & Operating Systems', level: 80 },
      { name: 'Data Structures & Algorithms', level: 80 }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15
    }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden grid-bg">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none glow-orb" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl pointer-events-none glow-orb" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">My Toolkit</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Technical <span className="text-gradient">Proficiencies</span>
          </h3>
          <p className="text-gray-400 font-inter mt-4 text-lg">
            Languages, libraries, and developer tools that fuel my workflow.
          </p>
        </div>

        {/* Skill Category Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="glass-card rounded-2xl border border-white/5 p-8 flex flex-col justify-between glow-border"
              >
                <div>
                  {/* Category Title bar */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`p-3 rounded-xl bg-gradient-to-tr ${category.color} border shrink-0`}>
                      <Icon className="w-6 h-6 text-inherit" />
                    </div>
                    <h4 className="font-outfit font-bold text-xl text-white tracking-tight">{category.title}</h4>
                  </div>

                  {/* Skills List with custom gauges */}
                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium font-inter text-gray-300 group-hover:text-white transition-colors flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-500/60" />
                            {skill.name}
                          </span>
                          <span className="text-xs font-semibold font-outfit text-gray-500 group-hover:text-blue-400 transition-colors">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Apple-style thin level bar */}
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
