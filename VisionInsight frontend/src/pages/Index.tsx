
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnalysisSection from "@/components/AnalysisSection";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const Index = () => {
  // Set page title
  useEffect(() => {
    document.title = "VisionInsight - Diabetic Retinopathy Assessment";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" />
      <Header />
      
      <main>
        <Hero />
        
        <section id="analyze" className="py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Analyze Your Retina Scan
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Upload your retina scan to get an instant assessment of diabetic retinopathy severity
              </p>
            </div>
            
            <AnalysisSection />
          </div>
        </section>
        
        <About />
        <HowItWorks />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
