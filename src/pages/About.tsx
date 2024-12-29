import { Container } from '../components/Container';
import { CompanyOverview } from '../components/about/CompanyOverview';
import { Vision } from '../components/about/Vision';
import { Team } from '../components/about/Team';
import { Hero } from '@/components/ui/hero';
import { Section } from '@/components/ui/section';
import { FinalCTA } from '@/components/FinalCTA';

export function About() {
  return (
    <main>
      <Hero
        title="Om Oss"
        description="Vår vision är att stärka företag med öppen, säker och flexibel AI-infrastruktur"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <Section>
        <Container>
          <CompanyOverview />
        </Container>
      </Section>

      <Section background="gray">
        <Container>
          <Team />
        </Container>
      </Section>

      <Section>
        <Container>
          <Vision className="lg:col-span-2" />
        </Container>
      </Section>

      <FinalCTA />
    </main>
  );
}