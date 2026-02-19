import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Doctor } from '@/components/Doctor';
import { FeaturesDark } from '@/components/FeaturesDark';
import { Contact } from '@/components/Contact';
import { CtaSection } from '@/components/CtaSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Doctor />
      <Services />
      <FeaturesDark />
      <Contact />
      <CtaSection />
    </>
  );
}


