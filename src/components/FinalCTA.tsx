import { Container } from './Container';
import { ContactButton } from './ui/contact-button';
import { SectionHeader } from './ui/section-header';
import { Section } from './ui/section';

export function FinalCTA() {
  return (
    <Section className="relative isolate overflow-hidden bg-gray-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),theme(colors.gray.900))] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl shadow-blue-600/10 ring-1 ring-white/10" />
      
      <Container className="relative">
        <SectionHeader
          title="Framtiden inom AI är här – och den är privat, säker och helt under er kontroll"
          variant="light"
          className="mb-16"
        />
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <ContactButton 
            variant="default" 
            size="lg"
            title="Boka demo"
            description="Fyll i dina uppgifter så kontaktar vi dig för att boka en demo"
            defaultMessage="Jag är intresserad av en demo av privatestack.ai"
          >
            Be om demo
          </ContactButton>
        </div>
      </Container>
    </Section>
  );
}