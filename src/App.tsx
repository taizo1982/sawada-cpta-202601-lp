import { useEffect } from 'react';
import { EventHeader } from './components/event/EventHeader';
import { EventHero } from './components/event/EventHero';
import { TargetSection } from './components/event/TargetSection';
import { ConcernsSection } from './components/event/ConcernsSection';
import { ServiceSection } from './components/event/ServiceSection';
import { ReasonSection } from './components/event/ReasonSection';
import { BenefitsSection } from './components/event/BenefitsSection';
import { ProfileSection } from './components/event/ProfileSection';
import { FlowSection } from './components/event/FlowSection';
import { OverviewSection } from './components/event/OverviewSection';
import { FAQSection } from './components/event/FAQSection';
import { FinalCTASection } from './components/event/FinalCTASection';
import { Footer } from './components/Footer';
import { MobileCTA } from './components/event/MobileCTA';

export default function App() {
  useEffect(() => {
    // Scroll animations
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    animateElements.forEach((el) => scrollObserver.observe(el));

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            const headerHeight = 70;
            const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth',
            });
          }
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    return () => {
      scrollObserver.disconnect();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <>
      <EventHeader />
      <EventHero />
      <TargetSection />
      <ConcernsSection />
      <ServiceSection />
      <ReasonSection />
      <BenefitsSection />
      <ProfileSection />
      <FlowSection />
      <OverviewSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <MobileCTA />
    </>
  );
}
