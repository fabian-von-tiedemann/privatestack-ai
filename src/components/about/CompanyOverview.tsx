import { motion } from 'framer-motion';
import { Container } from '../Container';
import { Brain, Users, Rocket, Target } from 'lucide-react';
import { SectionHeader } from '../ui/section-header';

const milestones = [
  {
    year: '2022',
    title: 'AI-resan börjar',
    description: 'När ChatGPT lanserades tog vi steget att integrera AI som en naturlig del av vår organisation.'
  },
  {
    year: '2023',
    title: 'Utforskning & Innovation',
    description: 'Vi testade över 20 AI-verktyg och utvecklade best practices för säker AI-användning.'
  },
  {
    year: '2024',
    title: 'privatestack.ai lanseras',
    description: 'Vår erfarenhet blir en plattform som hjälper andra företag att lyckas med sin AI-resa.'
  }
];

const principles = [
  {
    icon: Brain,
    title: 'AI som kollega',
    description: 'Vi ser AI som ett verktyg för att förstärka, inte ersätta, mänsklig kompetens.'
  },
  {
    icon: Users,
    title: 'Inkluderande kultur',
    description: 'Vi uppmuntrar alla att experimentera och hitta nya sätt att använda AI.'
  },
  {
    icon: Target,
    title: 'Värdedriven utveckling',
    description: 'Varje funktion utvecklas med fokus på konkret affärsnytta.'
  },
  {
    icon: Rocket,
    title: 'Kontinuerlig innovation',
    description: 'Vi ligger steget före genom att ständigt utforska nya möjligheter.'
  }
];

export function CompanyOverview() {
  return (
    <>
      <SectionHeader
        title="Vår Historia"
        description="privatestack.ai föddes ur vår egen AI-resa. Vi har gått från att vara early adopters till att hjälpa andra företag lyckas med sin AI-transformation."
        className="mb-16"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative rounded-2xl bg-gray-50 p-8"
          >
            <div className="absolute -top-4 left-4">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                {milestone.year}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{milestone.title}</h3>
            <p className="mt-2 text-gray-600">{milestone.description}</p>
          </motion.div>
        ))}
      </div>

      <SectionHeader
        title="Våra Principer"
        description="Vår approach till AI bygger på några grundläggande principer som genomsyrar allt vi gör."
        className="mt-24 mb-16"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((principle, index) => (
          <motion.div
            key={principle.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <principle.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              {principle.title}
            </h3>
            <p className="mt-2 text-base text-gray-600">
              {principle.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}