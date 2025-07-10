import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import CVSection from "@/components/cv-section";
import ConferencesSection from "@/components/conferences-section";
import TravelSection from "@/components/travel-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import LightboxModal from "@/components/lightbox-modal";

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  useEffect(() => {
    // Set page title and meta description
    document.title = "Saikat Chowdhury - Power Systems Engineer & Researcher";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'PhD Student in Electrical & Computer Engineering specializing in Power System Modeling, Simulation & Renewable Energy Integration');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'PhD Student in Electrical & Computer Engineering specializing in Power System Modeling, Simulation & Renewable Energy Integration';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CVSection />
      <ConferencesSection />
      <TravelSection onOpenLightbox={openLightbox} />
      <ContactSection />
      <Footer />
      <LightboxModal 
        isOpen={lightboxOpen} 
        imageSrc={lightboxImage} 
        onClose={closeLightbox} 
      />
    </div>
  );
}
