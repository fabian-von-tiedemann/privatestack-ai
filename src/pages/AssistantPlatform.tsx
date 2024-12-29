import { Hero } from '@/components/ui/hero';
import { ContactButton } from '@/components/ui/contact-button';
import { motion } from 'framer-motion';
import { Brain, Database, Lock, Workflow, Activity, Shield, Server } from 'lucide-react';
import { Container } from '@/components/Container';

const components = [
  {
    title: 'Gränssnitt & Assistentramverk',
    description: 'Ger ett användarvänligt gränssnitt för att bygga och hantera AI-assistenter.',
    icon: Brain,
    tech: 'OpenWebUI'
  },
  {
    title: 'Kunskaps- & Vektordatabaser',
    description: 'Effektiv semantisk sökning och kontextuella svar.',
    icon: Database,
    tech: 'Chroma, LightRAG'
  },
  {
    title: 'Automation & Agenter',
    description: 'Skapa automatiserade arbetsflöden och agentdrivna processer.',
    icon: Workflow,
    tech: 'n8n, Dify, Flowwise'
  },
  {
    title: 'Modeller & Modellhantering',
    description: 'Välj fritt mellan privata, open source- och frontiermodeller för text, bild, video.',
    icon: Brain,
    tech: 'Ollama, Frontiermodeller'
  },
  {
    title: 'Observability & Metrics',
    description: 'Övervaka och förbättra AI-prestanda med detaljerad spårbarhet och mätetal.',
    icon: Activity,
    tech: 'Langfuse'
  },
  {
    title: 'Säkerhet & Compliance',
    description: 'Granulära rättigheter, sårbarhetsskanning och EU-infrastruktur för full datasuveränitet.',
    icon: Shield,
    tech: 'Keycloak, Detectify, ISO 27001'
  },
  {
    title: 'Infrastruktur & Drift',
    description: 'Skalbar och flexibel miljö anpassad för era föränderliga behov.',
    icon: Server,
    tech: 'Kubernetes'
  }
];

export function AssistantPlatform() {
  return (
    <main>
      <Hero
        title="Plattformen – din privata AI-stack"
        description="Skapa, drifta och utveckla AI-assistenter och AI-agenter på en frikopplad och säker infrastruktur, helt under er privata kontroll."
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      >
        <div className="mt-10 flex justify-center gap-x-6">
          <ContactButton 
            variant="default" 
            size="lg"
            title="Boka demo av plattformen"
            description="Fyll i formuläret så kontaktar vi dig för att boka en demo av plattformen"
            defaultMessage="Jag är intresserad av en demo av plattformen"
          >
            Be om demo
          </ContactButton>
        </div>
      </Hero>

      {/* Platform Overview */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                En frikopplad AI-stack för långsiktig flexibilitet
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Till skillnad från proprietära lösningar erbjuder vår plattform en modulär arkitektur där varje del – från 
                språkmodeller och vektordatabaser till autentisering och automationsmotorer – enkelt kan bytas ut, 
                uppgraderas eller tas bort. Ni äger er stack, ni styr över era data, och ni kan snabbt anpassa er när 
                behoven förändras.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl bg-gray-100 p-8"
            >
              <div className="aspect-[4/3] w-full bg-gray-200 rounded-lg" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Core Components */}
      <section className="py-24 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Byggstenar i plattformen
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Under huven använder vi beprövade open source-komponenter och etablerade lösningar, 
              alla noggrant säkerhetstestade och informationsklassificerade.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {components.map((component, index) => (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <component.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{component.title}</h3>
                <p className="mt-2 text-gray-600">{component.description}</p>
                <p className="mt-4 text-sm font-medium text-primary">{component.tech}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Byggd för säkerhet och efterlevnad
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Plattformen är utvecklad med säkerhet och integritet i centrum. Ni kan köra den on-prem, 
              i EU-moln eller i hybridmiljö, alltid med full kontroll över var och hur er data lagras. 
              Med ISO 27001-certifiering, GDPR-efterlevnad och möjligheten att köra offline säkerställs 
              att er data alltid är skyddad.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Adaptability Section */}
      <section className="py-24 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              En plattform som växer med er
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Era behov förändras över tid, och vår assistentplattform är byggd för att följa med utvecklingen. 
              Lägg till nya modeller, integrera fler system, eller anpassa arbetsflödena när affärsmålen skiftar. 
              Med en frikopplad arkitektur är det enkelt att ligga steget före utan att behöva byta plattform.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-900 w-full">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Redo att utforska nästa steg?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
              Kontakta oss för en demo eller gå med i vår waitlist. Upptäck hur vår assistentplattform 
              kan hjälpa er att skapa hållbara, säkra och anpassningsbara AI-lösningar.
            </p>
            <div className="mt-10 flex justify-center">
              <ContactButton 
                variant="default" 
                size="lg"
                className="w-full"
                title="Boka demo av plattformen"
                description="Fyll i formuläret så kontaktar vi dig för att boka en demo av plattformen"
                defaultMessage="Jag är intresserad av en demo av plattformen"
              >
                Boka en demo
              </ContactButton>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}