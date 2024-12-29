import { motion } from 'framer-motion';
import { Container } from './Container';

import { COMPANIES } from '@/lib/constants';
import { Section } from './ui/section';
import { SectionHeader } from './ui/section-header';

export function LogoWall() {
  return (
    <Section className="py-12">
      <Container>
        <SectionHeader
          title="Företag som litar på privatestack.ai"
          className="mb-16"
        />

        <div className="mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {COMPANIES.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-100 rounded-lg h-16 flex items-center justify-center"
              >
                <span className="text-sm font-medium text-gray-900">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}