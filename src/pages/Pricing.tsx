import { Container } from '../components/Container';
import { Hero } from '@/components/ui/hero';
import { BasePlatform } from '../components/pricing/BasePlatform';
import { CostComparison } from '../components/pricing/CostComparison';
import { PricingCTA } from '../components/pricing/PricingCTA';

export function Pricing() {
  return (
    <main>
      <Hero
        title="Starta med en stark bas – skala i er egen takt"
        description="Vår basplattform ger er en trygg grund och inkluderar generösa resurser för att komma igång. 
          Ni betalar en fast månadsavgift och sedan baseras era löpande kostnader på den faktiska 
          tokenförbrukningen, inte antalet användare. Detta gör det lättare att budgetera och skala upp 
          när era behov ökar."
        image="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <Container className="pb-16">
        <div className="mt-16 space-y-16">
          <BasePlatform />
          <CostComparison />
        </div>
      </Container>
      <PricingCTA />
    </main>
  );
}