import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Tech Enthusiast • MCA Student';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background animate-gradient-shift opacity-60" />
      
      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground">
              Abhilash Roy
            </h1>
            
            <div className="h-12 flex items-center justify-center lg:justify-start">
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary">
                {typedText}
                {showCursor && <span className="animate-typing-cursor ml-1">|</span>}
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              I build web apps, IoT projects, and explore fintech technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                onClick={scrollToProjects}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg rounded-2xl hover-glow"
              >
                View Projects
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                asChild
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg rounded-2xl transition-all"
              >
                <a href="/resume">
                  View Resume
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Profile image */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary glow-yellow bg-card">
                <img 
                  src={profilePhoto} 
                  alt="Abhilash Roy - Tech Enthusiast and MCA Student" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
