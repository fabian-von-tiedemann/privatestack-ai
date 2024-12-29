import { motion } from 'framer-motion';
import { Container } from '../Container';
import { ContactButton } from '@/components/ui/contact-button';
import { Users, Shield, Rocket } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'AI för alla',
    description: 'Ge varje medarbetare möjlighet att utvecklas med AI som kollega'
  },
  {
    icon: Shield,
    title: 'Säkert & kontrollerat',
    description: 'Full kontroll över data och användning med centraliserad styrning'
  },
  {
    icon: Rocket,
    title: 'Snabb start',
    description: 'Kom igång på några minuter med er egen privata AI-hub'
  }
];

export function PricingCTA() {
  return (
    <section className="py-24 bg-gray-900 w-full">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Redo att demokratisera AI i er organisation?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Gå från att betala per användare till att ge alla medarbetare möjlighet att 
            utvecklas med AI som kollega – på ett säkert och kontrollerat sätt.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-white/5 p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{benefit.title}</h3>
              <p className="mt-2 text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <ContactButton 
            variant="default"
            size="lg"
            className="inline-flex"
            title="Boka demo"
            description="Fyll i formuläret så kontaktar vi dig för att boka en demo"
            defaultMessage="Jag är intresserad av en demo av privatestack.ai"
          >
            Boka en demo
          </ContactButton>
        </div>
      </Container>
    </section>
  );
}