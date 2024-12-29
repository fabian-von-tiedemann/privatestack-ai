import { motion } from 'framer-motion';
import { Container } from '../Container';
import { MessageSquare, BrainCircuit, Database } from 'lucide-react';

const integrations = [
  {
    name: 'Slack & Teams',
    description: 'Sömlös integration med era befintliga kommunikationsverktyg',
    icon: MessageSquare,
  },
  {
    name: 'Salesforce',
    description: 'Kraftfull AI-förstärkning av er CRM-plattform',
    icon: BrainCircuit,
  },
  {
    name: 'API-integration',
    description: 'Enkel anslutning till era egna system och databaser',
    icon: Database,
  },
];

export function Integrations() {
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
            Integrationer
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Anslut privatestack.ai till era befintliga system
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#005293]/10">
                <integration.icon className="h-10 w-10 text-[#005293]" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {integration.name}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {integration.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}