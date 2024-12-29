import { motion } from 'framer-motion';
import { Container } from '../Container';
import { Button } from '../Button';
import { TrendingUp, Zap, Shield } from 'lucide-react';

const features = [
  {
    name: 'Framtidssäkrad',
    description: 'Lägg enkelt till nya modeller och funktioner när behoven växer',
    icon: TrendingUp,
  },
  {
    name: 'Hög prestanda',
    description: 'Optimerad för snabb respons och effektiv resursanvändning',
    icon: Zap,
  },
  {
    name: 'Enterprise-ready',
    description: 'Byggd för att möta de högsta kraven på säkerhet och tillförlitlighet',
    icon: Shield,
  },
];

export function Scalability() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Skalbarhet
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              En plattform som växer med era behov och alltid ligger steget före
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 lg:col-span-7 lg:mt-0"
          >
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <dt className="mt-4 text-lg font-semibold text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}