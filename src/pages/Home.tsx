import { ContactButton } from '../components/ui/contact-button';
import { Hero } from '../components/ui/hero';
import { ProblemSolution } from '../components/ProblemSolution';
import { LogoWall } from '../components/LogoSlider';
import { KeyFeatures } from '../components/KeyFeatures';
import { LatestPosts } from '../components/LatestPosts';
import { Comparison } from '../components/Comparison';
import { Testimonials } from '../components/Testimonials';
import { FinalCTA } from '../components/FinalCTA';

export function Home() {
  return (
    <main>
      <Hero
        title="Din privata AI-hub"
        description="Säker, flexibel och helt under din kontroll. Bygg, utveckla och förvalta era egna AI-lösningar med total datasuveränitet."
        image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      >
        <div className="mt-10 flex justify-center gap-x-6">
          <ContactButton 
            variant="default" 
            size="lg"
            title="Boka demo"
            description="Fyll i formuläret så kontaktar vi dig för att boka en demo"
            defaultMessage="Jag är intresserad av en demo av privatestack.ai"
            variant="default"
          >
            Boka en demo
          </ContactButton>
        </div>
      </Hero>
      <ProblemSolution />
      <LogoWall />
      <KeyFeatures />
      <LatestPosts />
      <Comparison />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}