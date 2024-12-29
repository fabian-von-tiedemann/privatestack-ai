import { motion } from 'framer-motion';
import { Container } from '../Container';
import { CheckCircle } from 'lucide-react';

const components = [
  {
    name: 'OpenWebUI',
    description: 'Modern och anpassningsbar användargränssnitt',
  },
  {
    name: 'Chroma & LightRAG',
    description: 'Effektiv vektorbaserad datahantering och RAG-implementation',
  },
  {
    name: 'n8n & Flowwise',
    description: 'Kraftfulla automationsverktyg för AI-arbetsflöden',
  },
  {
    name: 'Ollama',
    description: 'Lokal körning av AI-modeller',
  },
  {
    name: 'Langfuse',
    description: 'Omfattande övervakning och spårning',
  },
  {
    name: 'Kubernetes & Keycloak',
    description: 'Skalbar infrastruktur och säker autentisering',
  },
];

export function OpenSource() {
  return (
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
            Open Source komponenter
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Beprövade och säkra komponenter som tillsammans skapar en komplett AI-plattform
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((component, index) => (
            <motion.div
              key={component.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5"
            >
              <div className="flex items-center gap-x-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {component.name}
                </h3>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                {component.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}