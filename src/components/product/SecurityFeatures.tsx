import { motion } from 'framer-motion';
import { Container } from '../Container';
import { Lock, Shield, Activity } from 'lucide-react';

const certifications = [
  {
    title: 'ISO 27001',
    description: 'Vi är ISO 27001-certifierade, vilket innebär att vi har etablerade rutiner för informationssäkerhet, riskhantering och kontinuerlig förbättring.',
  },
  {
    title: 'GDPR-efterlevnad',
    description: 'Våra lösningar är utformade för att efterleva GDPR. Era data lagras och bearbetas inom EU, och ni har full kontroll över hur era uppgifter hanteras.',
  },
  {
    title: 'Branschspecifika regelverk',
    description: 'Behöver ni möta andra specifika branschstandarder? Kontakta oss så diskuterar vi hur vi kan uppfylla era krav.',
  },
];

const securityFeatures = [
  {
    name: 'Åtkomstkontroll',
    description: 'Granulära roller och rättigheter säkerställer att endast behörig personal kan komma åt känslig information.',
    icon: Lock,
  },
  {
    name: 'Kryptering',
    description: 'Data krypteras både i vila och under överföring.',
    icon: Shield,
  },
  {
    name: 'Spårbarhet och loggning',
    description: 'Full insyn i vilka prompts som ställs, vilka modeller som används och vilket resultat som genereras.',
    icon: Activity,
  },
];

const monitoringFeatures = [
  {
    name: 'Regelbunden revision',
    description: 'Vi genomför löpande interna och externa revisioner för att identifiera förbättringsområden.',
    icon: Activity,
  },
  {
    name: 'Incidenthantering',
    description: 'Vår incidentresponsplan säkerställer snabba åtgärder och transparent kommunikation om något oförutsett skulle inträffa.',
    icon: Shield,
  },
];

export function SecurityFeatures() {
  return (
    <>
      <section className="py-24 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Certifierade och anpassade efter era regelverk
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Vi vet att datasäkerhet och regelefterlevnad är avgörande. Därför är vår 
              infrastruktur och våra processer utformade för att uppfylla strikta krav.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl bg-white p-8 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
                <p className="mt-4 text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

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
              Total kontroll över era data
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Med privatestack.ai är ni aldrig osäkra på var era data tar vägen. Vår 
              plattform gör det enkelt att hålla data on-prem eller i EU-baserad 
              infrastruktur, helt isolerat från externa aktörers insyn.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

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
            {monitoringFeatures.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl bg-white p-8 shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}