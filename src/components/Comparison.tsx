import { motion } from 'framer-motion';
import { Container } from './Container';
import { SectionHeader } from './ui/section-header';

const features = [
  {
    name: 'Arkitektur',
    privatestack: 'Frikopplad och modulär. Välj och byt ut komponenter fritt.',
    chatgpt: 'Proprietär och molnbaserad. Integrerad i Microsoft Teams men beroende av OpenAIs infrastruktur.',
    sana: 'Proprietär plattform för AI-assistenter.'
  },
  {
    name: 'Datasuveränitet',
    privatestack: 'Full kontroll. Kan köras on-prem, i EU-moln eller offline.',
    chatgpt: 'Körs i molnet (OpenAIs infrastruktur). Data kan vara skyddad men ligger utanför full lokal kontroll.',
    sana: 'Hostad miljö, begränsad insyn i databehandling.'
  },
  {
    name: 'Modellval',
    privatestack: 'Fritt val av modeller: egna, open source, externa "frontier"-modeller.',
    chatgpt: 'Begränsat till OpenAIs modeller (t.ex. GPT-4, GPT-3.5). Inga egna modeller.',
    sana: 'Eget begränsat modellutbud, styrt av Sana Labs.'
  },
  {
    name: 'Anpassningsförmåga',
    privatestack: 'Lägg till nya funktioner istället för nya verktyg. Snabb anpassning.',
    chatgpt: 'Främst anpassningar via prompt-strategi. Modellsidan är begränsad, nya funktioner beroende av OpenAI/Microsoft.',
    sana: 'Bygg lätt assistenter, men funktionaliteten styrs av Sana Labs roadmap.'
  },
  {
    name: 'Rättigheter & Rollstyrning',
    privatestack: 'Granulär kontroll (Keycloak, ISO 27001, GDPR), full åtkomstkontroll.',
    chatgpt: 'Microsoft/Teams-baserad åtkomstkontroll. Rollhantering finns men är inte lika granular för AI-interna funktioner.',
    sana: 'Grundläggande rättigheter, inte lika granulär som privatestack.ai.'
  },
  {
    name: 'Prisstruktur',
    privatestack: 'Betala för verklig förbrukning (tokens), ingen per användare-avgift.',
    chatgpt: 'Vanligen prenumerationsmodell och/eller användarbaserad licens. Kostnad per seat/plan.',
    sana: 'Ofta per användare/funktion, begränsad flexibilitet.'
  },
  {
    name: 'Möjlighet till Offlinekörning',
    privatestack: 'Ja, kan köras helt offline.',
    chatgpt: 'Nej, kräver internet och molnåtkomst.',
    sana: 'Nej, molnbaserad och hostad av leverantör.'
  },
  {
    name: 'Integrationer',
    privatestack: 'Öppen API, stöd för CRM/ERP, Slack, Teams, etc.',
    chatgpt: 'Integreras i Microsoft Teams-miljö, stöd för Microsoft 365-ekosystem, men begränsad anpassning utanför det.',
    sana: 'Integrationer med populära verktyg, men begränsat urval.'
  },
  {
    name: 'Vektordatabaser / RAG',
    privatestack: 'Anpassad RAG (t.ex. Chroma), full kontroll över dataindexering.',
    chatgpt: 'ChatGPT Enterprise har context injection via prompt, men ingen native RAG med full datakontroll.',
    sana: 'Ingen avancerad RAG-funktion, främst Q&A mot uppladdad dokumentation.'
  },
  {
    name: 'EU-infrastruktur',
    privatestack: 'Kan enbart använda EU-baserad infrastruktur om så önskas.',
    chatgpt: 'OpenAI erbjuder vissa löften om datahantering, men ingen fullständig infrastrukturkontroll på EU-nivå.',
    sana: 'Europeiskt företag, men hostad lösning utan fullständig datakontroll.'
  },
  {
    name: 'Säkerhet & Compliance',
    privatestack: 'ISO 27001, GDPR, sårbarhetsskanning, full spårbarhet.',
    chatgpt: 'ChatGPT Enterprise hävdar ingen användning av kunddata för träning, SOC 2 etc., men molnbaserat utanför full egen kontroll.',
    sana: 'SOC 2 Type 1, ISO 27001 men hostad i leverantörsmiljö med begränsad insyn.'
  },
  {
    name: 'Finetuning & Egna Modeller',
    privatestack: 'Möjligt att finetuna och lägga till egna modeller utan leverantörsberoende.',
    chatgpt: 'Ingen direkt finetuning av egna modeller på kundens infrastruktur. Man förlitar sig på OpenAIs modellutbud.',
    sana: 'Begränsad möjlighet, mest Sana Labs interna modeller.'
  },
  {
    name: 'Agentflöden & Automation',
    privatestack: 'Stöd för agentflöden (n8n, Dify, Flowwise) lokalt och kontrollerat.',
    chatgpt: 'Ingen inbyggd agentmotor. Möjligheter beror på tredjepartsintegreringar, men ej full lokal kontroll.',
    sana: 'Vissa agentflöden finns, men begränsat och styrt av plattformen.'
  }
];

export function Comparison() {
  return (
    <section className="pt-8 pb-24 bg-white">
      <Container>
        <SectionHeader
          title="Jämförelse"
          description="Se hur privatestack.ai skiljer sig från traditionella AI-plattformar"
          className="mb-16"
        />

        <div className="mt-16 flow-root">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Egenskap
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      privatestack.ai
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      ChatGPT (Teams-integration)
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Sana Labs
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {features.map((feature) => (
                    <tr key={feature.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {feature.name}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {feature.privatestack}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {feature.chatgpt}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {feature.sana}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}