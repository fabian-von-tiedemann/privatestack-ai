import { motion } from 'framer-motion';
import { Container } from '../Container';
import { Database, Workflow, Shield, Brain } from 'lucide-react';

const features = [
  {
    title: 'Data Pipeline',
    description: 'Hantera era interna data lokalt eller i EU-baserad infrastruktur. Möjliggör strömlinjeformad databehandling, indexering och versionering.',
    icon: Database,
  },
  {
    title: 'Model Manager',
    description: 'Välj bland marknadens främsta språkmodeller – open source eller kommersiella. Uppgradera när ni vill, utan beroende av leverantörens roadmap.',
    icon: Brain,
  },
  {
    title: 'Rättigheter & Roller',
    description: 'Finkornig åtkomststyrning ger kontroll över vem som får träna, testa och använda olika AI-funktioner.',
    icon: Shield,
  },
  {
    title: 'RAG Komponent',
    description: 'Anslut egna vektordatabaser för att skapa minnesfunktioner, skräddarsydd sökning och korrekt informationsåtervinning i realtid.',
    icon: Workflow,
  },
];

export function ArchitectureOverview() {
  return (
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
            Byggd för flexibilitet, skalbarhet och full kontroll
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            privatestack.ai är inte en monolitisk, låst produkt. Det är en modulär plattform 
            konstruerad för att passa ert unika ekosystem. Med vår öppna arkitektur kan ni 
            kombinera olika komponenter i en konfiguration som bäst stöder ert företags mål och krav.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-white p-8 shadow-lg"
            >
            <div className="flex items-center gap-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
            </div>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-2xl bg-gray-50 p-8 aspect-[16/9]"
        >
          {/* Placeholder for architecture diagram */}
          <div className="w-full h-full bg-gray-200 rounded-lg" />
        </motion.div>
      </Container>
    </section>
  );
}