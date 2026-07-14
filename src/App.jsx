import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Lightweight canvas floating particle background
function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    // Control density to prevent lag
    const particleCount = Math.min(50, Math.floor((width * height) / 30000));

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.speedY = (Math.random() - 0.5) * 0.25;
        // 50% purple nodes, 50% blue nodes
        this.color = Math.random() > 0.5 
          ? `rgba(139, 92, 246, ${Math.random() * 0.35 + 0.1})` 
          : `rgba(59, 130, 246, ${Math.random() * 0.35 + 0.1})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030014] text-[#f5f5f7] font-inter overflow-hidden select-none">
      
      {/* Background Gradients & Grid Overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0 opacity-40" />
      <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[160px] pointer-events-none glow-orb z-0" />
      <div className="absolute top-[45%] right-[-15%] w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[200px] pointer-events-none glow-orb z-0" />
      <div className="absolute bottom-[5%] left-[-10%] w-[500px] h-[500px] rounded-full bg-pink-500/5 blur-[150px] pointer-events-none glow-orb z-0" />
      
      {/* Dynamic Canvas Particles */}
      <ParticleBackground />

      {/* Main Layout Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
      
    </div>
  );
}
