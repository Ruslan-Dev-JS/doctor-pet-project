import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Doctor } from '@/components/Doctor';
import { Contact } from '@/components/Contact';
import { CtaSection } from '@/components/CtaSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Doctor />
      <Contact />
      <CtaSection />
    </>
  );
}
