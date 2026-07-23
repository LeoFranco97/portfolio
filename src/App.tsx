import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import ResultsSection from './sections/ResultsSection'
import ServicesSection from './sections/ServicesSection'
import ProjectsSection from './sections/ProjectsSection'
import BrandingSection from './sections/BrandingSection'
import PresentationsSection from './sections/PresentationsSection'
import ContactSection from './sections/ContactSection'
import { LightboxProvider } from './components/Lightbox'

export default function App() {
  return (
    <LightboxProvider>
      <main className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ResultsSection />
        <ServicesSection />
        <BrandingSection />
        <ProjectsSection />
        <PresentationsSection />
        <ContactSection />
      </main>
    </LightboxProvider>
  )
}
