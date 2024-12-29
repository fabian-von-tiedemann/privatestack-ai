import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const services = [
  'Förändringsledning',
  'AI-expertsupport (AI Desk)',
  'Utvecklingstjänster för AI',
  'Finjustering av modeller',
  'Datauttag & förädling (scraping etc)',
  'Databeredskap',
  'Uppsättning av virtuella assistenter och agentflöden',
  'Integrationer mot äldre system',
];

export function ProfessionalServices() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 rounded-2xl p-8 w-full"
    >
      <h2 className="text-2xl font-bold text-gray-900">Tjänsteleverans (Professional Services)</h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service}
            className="flex items-center gap-x-3 rounded-lg border border-gray-200 bg-white p-4"
          >
            <Check className="h-5 w-5 text-blue-600 flex-shrink-0" />
            <span className="text-sm text-gray-900">{service}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}