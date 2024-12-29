import { Container } from './Container';
import { Database, Lock, Settings, Activity } from 'lucide-react';
import { ModelSlider } from './ModelSlider';
import { Section } from './ui/section';
import { SectionHeader } from './ui/section-header';
import { FeatureCard } from './ui/feature-card';

const features = [
  {
    name: 'Full datakontroll',
    description: 'Bestäm själva var och hur er data lagras och hanteras.',
    icon: Database,
  },
  {
    name: 'Egna modeller',
    description: 'Integrera och använd de AI-modeller som passar era behov.',
    icon: Settings,
  },
  {
    name: 'Anpassad RAG',
    description: 'Skräddarsy Retrieval-Augmented Generation för era specifika användningsfall.',
    icon: Activity,
  },
  {
    name: 'Säkerhet',
    description: 'Omfattande säkerhetsfunktioner och full spårbarhet.',
    icon: Lock,
  },
];

export function KeyFeatures() {
  return (
    <Section className="pb-12">
      <Container>
        <SectionHeader
          title="Nyckelfunktioner"
          description="Allt ni behöver för att bygga en säker och skalbar AI-infrastruktur"
          className="mb-16"
        />

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.name}
              title={feature.name}
              description={feature.description}
              icon={feature.icon}
              className="text-center"
            />
          ))}
        </div>
      </Container>
      <ModelSlider />
    </Section>
  );
}