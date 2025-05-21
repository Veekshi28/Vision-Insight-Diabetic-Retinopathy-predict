import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  const handleScrollToAnalyze = () => {
    const analyzeSection = document.getElementById('analyze');
    analyzeSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16">
      <div className="absolute inset-0 bg-gradient z-0" />

      {/* Animated dots background */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute rounded-full bg-blue-500/20",
              "animate-pulse-gentle"
            )}
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 text-center px-6 py-16">
        <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Early Detection Saves Vision
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 max-w-4xl mx-auto leading-tight">
          <span className="text-gradient">AI-Powered</span> Assessment of
          <br className="hidden md:block" /> Diabetic Retinopathy
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10">
          Upload your retina scan to get an instant assessment of diabetic retinopathy severity, 
          complete with personalized recommendations and next steps.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={handleScrollToAnalyze}>
            Start Analysis
          </Button>
          <Button size="lg" variant="outline" onClick={handleScrollToAbout}>
            Learn More
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={handleScrollToAnalyze}
          className="flex flex-col items-center text-foreground/60 hover:text-foreground transition-colors"
        >
          <span className="text-sm mb-2">Scroll to start</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
