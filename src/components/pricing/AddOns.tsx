import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const addOns = [
  'Fler användare',
  'Privata modeller',
  'Avancerad bildgenerering',
  'Videogenerering',
  'SSO',
  'Automatisering och integrationsmotor (n8n)',
  'AI Desk',
  'AI Developer/tim',
  'LDAP',
  'Databeredskap',
  'Finetuning av modeller',
  'Förhöjd säkerhet',
  'Bring your own API key',
  'Custom URL',
  'Custom interface',
  'Custom image styles',
  'Agentflöden',
  'Datascraping',
];

export function AddOns() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-8"
    >
      <h2 className="text-2xl font-bold text-gray-900">
        Utöka er lösning efter behov
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Anpassa er miljö ytterligare med våra tillval. Varje tillägg prissätts separat.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {addOns.map((addon) => (
          <div
            key={addon}
            className="flex items-center gap-x-3 rounded-lg border border-gray-200 p-4"
          >
            <Check className="h-5 w-5 text-blue-600 flex-shrink-0" />
            <span className="text-sm text-gray-900">{addon}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}