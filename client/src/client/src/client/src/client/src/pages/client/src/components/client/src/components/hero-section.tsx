import { ArrowRight, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald via-teal-600 to-blue-700 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <User className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Saikat Chowdhury
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-6">
            PhD Student in Electrical & Computer Engineering
          </p>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Specializing in Power System Modeling, Simulation & Renewable Energy Integration
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection("cv")}
            className="bg-white text-navy hover:bg-gray-100 px-8 py-3 text-base font-semibold shadow-lg"
          >
            View CV
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-3 text-base font-semibold bg-transparent"
          >
            Get in Touch
            <Mail className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
