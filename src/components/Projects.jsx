import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Home, Gem, MailCheck, Flower, Ship } from 'lucide-react';
import { Github } from './Icons';

const projects = [
  {
    id: 1,
    title: 'House Price Prediction',
    icon: Home,
    description: 'A regression-based machine learning model that predicts real estate prices based on geographical, structural, and socio-economic features. Utilizes exploratory data analysis (EDA) to map outliers and multi-collinearity.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    github: 'https://github.com/NoorMisba/house-price-prediction',
    demo: '#',
    color: 'from-blue-500/10 to-cyan-500/10 hover:border-blue-500/30'
  },
  {
    id: 2,
    title: 'Diamond Price Prediction',
    icon: Gem,
    description: 'Predictive analytics application that estimates the price of diamonds based on the 4Cs (Carat, Cut, Color, Clarity). Implements advanced feature engineering and compares linear vs. ensemble model performance.',
    tech: ['Python', 'NumPy', 'Scikit-learn', 'Seaborn'],
    github: 'https://github.com/NoorMisba/diamond-price-prediction',
    demo: '#',
    color: 'from-purple-500/10 to-pink-500/10 hover:border-purple-500/30'
  },
  {
    id: 3,
    title: 'Spam Email Detection',
    icon: MailCheck,
    description: 'Natural Language Processing (NLP) classifier that filters incoming emails into spam or ham. Features text tokenization, stop-word removal, TF-IDF vectorization, and Naive Bayes probability scoring.',
    tech: ['Python', 'NLTK', 'Scikit-learn', 'NLP'],
    github: 'https://github.com/NoorMisba/spam-email-detection',
    demo: '#',
    color: 'from-pink-500/10 to-rose-500/10 hover:border-rose-500/30'
  },
  {
    id: 4,
    title: 'Iris Flower Classification',
    icon: Flower,
    description: 'The classic classification project implementing supervised machine learning algorithms (KNN, SVM, Decision Trees) to categorize flower species based on sepal and petal measurements.',
    tech: ['Python', 'Scikit-learn', 'Matplotlib', 'Classification'],
    github: 'https://github.com/NoorMisba/iris-classification',
    demo: '#',
    color: 'from-emerald-500/10 to-teal-500/10 hover:border-emerald-500/30'
  },
  {
    id: 5,
    title: 'Titanic Survival Prediction',
    icon: Ship,
    description: 'Predictive binary classification project utilizing passenger logs to forecast survival rates. Implements deep exploratory data cleaning, handles missing values, and evaluates random forest models.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Ensemble ML'],
    github: 'https://github.com/NoorMisba/titanic-survival',
    demo: '#',
    color: 'from-amber-500/10 to-orange-500/10 hover:border-orange-500/30'
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 15
    }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-2">Showcase</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h3>
          <p className="text-gray-400 font-inter mt-4 text-lg">
            Practical applications of machine learning, classification, and statistical models.
          </p>
        </div>

        {/* Project Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className={`glass-card rounded-3xl border border-white/5 p-6 flex flex-col justify-between glow-border bg-gradient-to-br ${project.color}`}
              >
                <div>
                  {/* Card Header Icon & Glow */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white relative overflow-hidden group-hover:border-purple-500/30">
                      <ProjectIcon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold font-outfit text-gray-500 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
                      Project 0{project.id}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h4 className="font-outfit font-bold text-xl text-white tracking-tight mb-3">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-400 font-inter leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Badges & Action Buttons */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[10px] uppercase font-semibold tracking-wider font-inter text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-btn-secondary py-2.5 rounded-xl flex items-center justify-center gap-1.5 font-inter text-xs text-white cursor-pointer"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Codebase
                    </a>
                    <a
                      href={project.demo}
                      className="glow-btn-primary py-2.5 rounded-xl flex items-center justify-center gap-1.5 font-inter text-xs text-white cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
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
