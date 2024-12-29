import { Container } from '../components/Container';
import { motion } from 'framer-motion';
import { Hero } from '@/components/ui/hero';
import { Bot, FileSearch, Brain, MessageSquare, FileText, Code, Building2, Briefcase } from 'lucide-react';

const useCases = [
  {
    title: 'Kundtjänst & Support',
    description: 'Automatisera vanliga frågor och ärenden med AI-assistenter som har tillgång till er kunskapsbas.',
    icon: MessageSquare,
    examples: [
      'Automatisk kategorisering och prioritering av ärenden',
      'Intelligenta chatbottar med kontext från tidigare ärenden',
      'Proaktiv kundsupport baserad på användarbeteende'
    ]
  },
  {
    title: 'Dokumenthantering',
    description: 'Effektivisera hanteringen av dokument genom intelligent sökning och automatiserad bearbetning.',
    icon: FileText,
    examples: [
      'Automatisk dokumentklassificering',
      'Intelligent sökning i stora dokumentmängder',
      'Automatisk sammanfattning av dokument'
    ]
  },
  {
    title: 'Kunskapshantering',
    description: 'Gör företagets samlade kunskap sökbar och tillgänglig för alla medarbetare.',
    icon: Brain,
    examples: [
      'Intelligent FAQ-system',
      'Automatisk uppdatering av kunskapsbas',
      'Personaliserade lärandevägar'
    ]
  },
  {
    title: 'Utveckling & DevOps',
    description: 'Effektivisera utvecklingsprocessen med AI-assisterad kodgranskning och felsökning.',
    icon: Code,
    examples: [
      'AI-assisterad kodgranskning',
      'Automatisk dokumentation',
      'Intelligent felsökning'
    ]
  },
  {
    title: 'Juridisk Analys',
    description: 'Automatisera juridisk dokumentanalys och avtalshantering.',
    icon: FileSearch,
    examples: [
      'Automatisk avtalsanalys',
      'Compliance-kontroll',
      'Riskbedömning av dokument'
    ]
  },
  {
    title: 'HR & Rekrytering',
    description: 'Effektivisera HR-processer med AI-stöd för rekrytering och personalutveckling.',
    icon: Building2,
    examples: [
      'CV-screening och kandidatmatchning',
      'Automatiserad intervjuschemaläggning',
      'Personaliserade utvecklingsplaner'
    ]
  },
  {
    title: 'Säljstöd',
    description: 'Förbättra säljprocessen med AI-driven analys och automatisering.',
    icon: Briefcase,
    examples: [
      'Leadscoring och kvalificering',
      'Automatisk uppföljning',
      'Personaliserade säljpresentationer'
    ]
  },
  {
    title: 'Virtuella Assistenter',
    description: 'Skapa specialiserade AI-assistenter för olika roller och uppgifter.',
    icon: Bot,
    examples: [
      'Mötesassistenter',
      'Projektkoordinatorer',
      'Forskningsassistenter'
    ]
  }
];

export function UseCases() {
  return (
    <main>
      <Hero
        title="Användningsområden"
        description="Upptäck hur privatestack.ai kan anpassas för olika behov och branscher"
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <Container className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{useCase.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{useCase.description}</p>
              <div className="space-y-3">
                {useCase.examples.map((example, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <p className="text-sm text-gray-600">{example}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </main>
  );
}