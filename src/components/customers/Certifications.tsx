import { motion } from 'framer-motion';
import { Container } from '../Container';
import { Shield, Check } from 'lucide-react';

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

export function Certifications() {
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
          <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Shield className="h-6 w-6 text-primary" />
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
              <div className="flex items-center gap-x-4">
                <Check className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
              </div>
              <p className="mt-4 text-gray-600">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}