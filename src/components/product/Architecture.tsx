import { motion } from 'framer-motion';
import { Container } from '../Container';
import { Database, Shield, Workflow } from 'lucide-react';

const architectureSteps = [
  {
    icon: Database,
    title: 'Data Pipeline',
    description: 'Säker datahantering med full kontroll över dataflöden och lagring.',
  },
  {
    icon: Workflow,
    title: 'AI Processing',
    description: 'Flexibel integration av AI-modeller och anpassad RAG-implementation.',
  },
  {
    icon: Shield,
    title: 'Security Layer',
    description: 'Omfattande säkerhet med rollbaserad åtkomstkontroll och kryptering.',
  },
];

export function Architecture() {
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
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Arkitektur
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            En flexibel och modulär AI-stack med kontrollerbara dataflöden
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {architectureSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute left-0 top-0 -z-10 h-full w-full bg-primary/5 rounded-2xl" />
              <div className="relative p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 rounded-2xl bg-gray-50 p-8"
        >
          <div className="aspect-[16/9] w-full bg-gray-200 rounded-lg" />
        </motion.div>
      </Container>
    </section>
  );
}