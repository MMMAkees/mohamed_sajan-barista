import CoffeeBackground3D from '@/components/3d/CoffeeBackground3D';
import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import InteractiveBrewSimulator from '@/components/sections/InteractiveBrewSimulator';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import LatteArtGallery from '@/components/sections/LatteArtGallery';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0B0705] text-[#F5EAE0] overflow-x-hidden selection:bg-[#C89D66] selection:text-[#0B0705]">
      {/* 3D Floating Coffee Beans & Steam Background */}
      <CoffeeBackground3D />

      {/* Website Sections */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <InteractiveBrewSimulator />
        <ExperienceSection />
        <SkillsSection />
        <LatteArtGallery />
        <EducationSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
