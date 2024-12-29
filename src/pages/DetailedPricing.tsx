import { Container } from '@/components/Container';
import { Hero } from '@/components/ui/hero';
import { ConsumptionCalculator } from '@/components/pricing/ConsumptionCalculator';
import { TokenPricing } from '@/components/pricing/TokenPricing';
import { CostComparison } from '@/components/pricing/CostComparison';

export function DetailedPricing() {
  return (
    <main>
      <Hero
        title="Detaljerad kostnadskalkyl"
        description="Beräkna er månadskostnad baserat på användarmönster och modellval. Anpassa beräkningen efter era specifika behov och få en tydlig bild av kostnadsfördelningen."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      
      <Container className="py-16">
        <div className="space-y-16">
          <ConsumptionCalculator />
          <TokenPricing />
          <CostComparison />
        </div>
      </Container>
    </main>
  );
}