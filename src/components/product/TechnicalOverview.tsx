import { motion } from 'framer-motion';
import { Container } from '../Container';
import { Layout, Database, Shield, Workflow, Monitor, Lock, Server, Users } from 'lucide-react';

const sections = [
  {
    title: 'Gränssnitt och Assistentramverk',
    icon: Layout,
    items: [
      'OpenWebUI: Användarvänligt och anpassningsbart webbgränssnitt',
      'Assistentramverk för snabb utveckling av AI-flöden',
    ],
  },
  {
    title: 'Kunskap och Vektordatabaser',
    icon: Database,
    items: [
      'Chroma: Lättviktig och kraftfull vektordatabas',
      'LightRAG: Effektiv Retrieval Augmented Generation',
    ],
  },
  {
    title: 'Automation och Agenter',
    icon: Workflow,
    items: [
      'n8n: No-code workflowsystem',
      'Dify och Flowwise: Visuella flöden och agentstyrda processer',
    ],
  },
  {
    title: 'Modeller och Modellhantering',
    icon: Monitor,
    items: [
      'Privata och Open Source-modeller via Ollama',
      'Frontiermodeller för bild och video via API',
    ],
  },
  {
    title: 'Metrics och Observability',
    icon: Server,
    items: [
      'Langfuse: Övervakning av modellprestanda',
      'Insyn i promptar och resultatoptimering',
    ],
  },
  {
    title: 'Säkerhet och Compliance',
    icon: Shield,
    items: [
      'Detectify: Sårbarhetsskanning och SBOM',
      'ISO 27001-kompatibel grundarkitektur',
    ],
  },
  {
    title: 'Drift och Infrastruktur',
    icon: Lock,
    items: [
      'Kubernetes: Flexibel och skalbar orkestreringsplattform',
      'Containeriserade miljöer för enkel skalning',
    ],
  },
  {
    title: 'Autentisering och Access',
    icon: Users,
    items: [
      'Keycloak: Centraliserad identitets- och åtkomsthantering',
      'SAML/SSO-stöd för enhetlig användarupplevelse',
    ],
  },
];

export function TechnicalOverview() {
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
            Under huven – vår nuvarande tech-stack
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            privatestack.ai är byggt på en modern och flexibel grund av open source-lösningar 
            och beprövade verktyg. Vi har valt varje komponent med omsorg för att säkerställa 
            prestanda, säkerhet, skalbarhet och anpassningsbarhet.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <section.icon className="h-6 w-6 text-primary" />
              </div>
              <ul className="mt-6 space-y-4">
                {section.items.map((item) => (
                  <li key={item} className="text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}