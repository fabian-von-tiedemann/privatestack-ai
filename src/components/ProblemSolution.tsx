import { motion } from 'framer-motion';
import { Container } from './Container';
import { Lock, Unlock, Shield, Database } from 'lucide-react';
import { SectionHeader } from './ui/section-header';

const features = [
  {
    icon: Lock,
    title: 'Problem',
    description: 'Proprietära AI-verktyg låser in er data och begränsar er kontroll. Ni tvingas anpassa er efter leverantörernas villkor och har begränsad insyn i hur er data hanteras.',
  },
  {
    icon: Unlock,
    title: 'Lösning',
    description: 'privatestack.ai ger er en flexibel, öppen och säker plattform där ni har full kontroll över er AI-infrastruktur. Ni bestämmer var data lagras och hur den används.',
  },
];

export function ProblemSolution() {
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
          <SectionHeader
            title="Problem & Lösning"
            description="Varför traditionella AI-lösningar inte räcker till och hur privatestack.ai löser utmaningarna"
            className="mb-16"
          />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-white rounded-2xl shadow-lg p-8"
            > 
              <div className="flex items-center gap-x-4"> 
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold leading-7 text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}