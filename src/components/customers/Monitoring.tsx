import { motion } from 'framer-motion';
import { Container } from '../Container';
import { ContactButton } from '../ui/contact-button';
import { AlertCircle, RefreshCw } from 'lucide-react';

const features = [
  {
    name: 'Regelbunden revision',
    description: 'Vi genomför löpande interna och externa revisioner för att identifiera förbättringsområden.',
    icon: RefreshCw,
  },
  {
    name: 'Incidenthantering',
    description: 'Vår incidentresponsplan säkerställer snabba åtgärder och transparent kommunikation om något oförutsett skulle inträffa.',
    icon: AlertCircle,
  },
];

export function Monitoring() {
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
            Proaktiv hållning till säkerhet
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Vi nöjer oss inte med att bara uppfylla dagens standarder – vi vill ligga 
            steget före. Vårt team bevakar nya hotbilder, uppdaterar kontinuerligt vår 
            stack med sårbarhetsskanning (Detectify) och förbättrar våra processer 
            allteftersom AI-landskapet förändras.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-white p-8 shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900">Vill ni veta mer?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Kontakta oss gärna för att diskutera era unika säkerhets- och efterlevnadskrav. 
            Vi hjälper er att bygga en AI-miljö ni kan lita på.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <ContactButton 
              size="lg"
              title="Kontakta oss"
              description="Fyll i formuläret så återkommer vi för att diskutera era säkerhetskrav"
              defaultMessage="Jag vill diskutera säkerhetskrav för vår AI-miljö"
            >
              Kontakta oss
            </ContactButton>
            <ContactButton 
              size="lg" 
              variant="outline"
              title="Boka demo"
              description="Fyll i formuläret så kontaktar vi dig för att boka en demo"
              defaultMessage="Jag är intresserad av en demo med fokus på säkerhet och compliance"
            >
              Be om en demo
            </ContactButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}