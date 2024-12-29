import { Container } from '@/components/Container';
import { Hero } from '@/components/ui/hero';
import { FAQSection } from '@/components/faq/FAQSection';
import { FAQSearch } from '@/components/faq/FAQSearch';
import { FAQCategories } from '@/components/faq/FAQCategories';
import { useState } from 'react';

const categories = [
  { id: 'all', name: 'Alla frågor' },
  { id: 'platform', name: 'Plattformen' },
  { id: 'security', name: 'Säkerhet' },
  { id: 'pricing', name: 'Priser' },
  { id: 'technical', name: 'Tekniskt' },
  { id: 'support', name: 'Support' },
];

const faqs = [
  {
    question: 'Vad är privatestack.ai?',
    answer: 'privatestack.ai är en privat, frikopplad AI-stack som ger er full kontroll över datakedjan, val av språkmodeller och infrastruktur, samtidigt som ni kan skala och anpassa lösningen utefter era föränderliga behov.',
    category: 'platform'
  },
  {
    question: 'Hur skiljer sig privatestack.ai från proprietära AI-lösningar?',
    answer: 'Till skillnad från proprietära plattformar är privatestack.ai modulär, frikopplad och ekosystem-agnostisk. Ni kan välja egna eller open source-modeller, integrera med befintliga system och köra lösningen i egen regi, på on-prem, i EU-baserad infrastruktur eller helt offline.',
    category: 'platform'
  },
  {
    question: 'Kan vi köra privatestack.ai på vår egen infrastruktur?',
    answer: 'Ja. Plattformen kan köras on-prem, i ert eget datacenter eller i ett EU-baserat moln. Ni kan till och med köra den helt offline för maximal datasuveränitet.',
    category: 'technical'
  },
  {
    question: 'Hur ser prismodellen ut?',
    answer: 'Ni betalar en fast månadsavgift för basplattformen (t.ex. 10 000 kr/mån) som inkluderar upp till 100 användare och 100 GB vektordatabas. Utöver det betalar ni för faktisk tokenförbrukning, inte per användare, vilket ger större kostnadskontroll.',
    category: 'pricing'
  },
  {
    question: 'Kan vi använda egna språkmodeller och finetuna dem?',
    answer: 'Ja. Plattformen stöder privata modeller, open source-varianter och extern åtkomst till frontiermodeller. Ni kan även finetuna modeller för att möta era specifika behov.',
    category: 'technical'
  },
  {
    question: 'Vilken typ av data kan vi arbeta med?',
    answer: 'Ni kan arbeta med både strukturerad och ostrukturerad data. Plattformen erbjuder integrationsmöjligheter för att indexera och hämta relevant information i realtid.',
    category: 'technical'
  },
  {
    question: 'Är plattformen säker och compliant med GDPR?',
    answer: 'Ja. privatestack.ai är byggd med fokus på säkerhet och efterlevnad. Ni har full kontroll över er data, plattformen kan köras i EU och uppfyller krav enligt ISO 27001 och GDPR.',
    category: 'security'
  },
  {
    question: 'Kan vi integrera privatestack.ai med våra befintliga system och verktyg?',
    answer: 'Absolut. Plattformen erbjuder API:er, stöd för CRM/ERP-integrationer, Slack, Teams med mera. Ni kan enkelt koppla ihop den med ert ekosystem för sömlösa arbetsflöden.',
    category: 'technical'
  },
  {
    question: 'Hur snabbt kan vi komma igång?',
    answer: 'Med basplattformen kan ni komma igång på relativt kort tid. Installations- och konfigurationsprocessen varierar beroende på er infrastruktur, men målbilden är att snabbt få ett grundflöde på plats.',
    category: 'platform'
  },
  {
    question: 'Hur hanterar ni säkerhetsuppdateringar och sårbarheter?',
    answer: 'Plattformen kör sårbarhetsskanning med verktyg som Detectify och har rutiner för kontinuerlig säkerhetsuppdatering. Ni får löpande uppdateringar och kan själva kontrollera ert säkerhetsarbete i plattformen.',
    category: 'security'
  },
  {
    question: 'Hur skiljer sig er prismodell från licensmodeller med per-användare-avgifter?',
    answer: 'Istället för att betala för varje användare betalar ni för den faktiska användningen (antal tokens). Detta ger er möjlighet att växa utan att licenskostnaderna skenar när fler personer börjar använda AI-lösningen.',
    category: 'pricing'
  },
  {
    question: 'Kan vi bygga anpassade agenter och arbetsflöden?',
    answer: 'Ja. Plattformen integrerar med automationsverktyg som n8n, Dify och Flowwise, vilket möjliggör anpassade agentflöden och arbetsflödesautomation helt under er kontroll.',
    category: 'technical'
  },
  {
    question: 'Är det möjligt att köra plattformen endast med open source-komponenter?',
    answer: 'Ja. privatestack.ai bygger på open source-komponenter och ni kan välja att enbart använda dessa för att undvika leverantörslåsning och behålla maximal flexibilitet.',
    category: 'platform'
  },
  {
    question: 'Stödjer ni multi-step agenter och RAG (Retrieval Augmented Generation)?',
    answer: 'Ja, plattformen stödjer multi-step agenter och användning av vektordatabaser för RAG. Ni kan anpassa er kunskapshantering för att få mer relevanta och kontextuella svar.',
    category: 'technical'
  },
  {
    question: 'Hur ser supporten ut?',
    answer: 'Ni får tillgång till en supportportal med e-postsupport och i högre nivåer även dedikerad support och SLA:er. Dessutom finns community-resurser och dokumentation för att snabbt få hjälp.',
    category: 'support'
  },
  {
    question: 'Vilka språkmodeller kan vi använda?',
    answer: 'Ni kan använda modeller från OpenAI, Claude, Mistral (EU) och egna finetunade modeller. Ni är inte begränsade till ett specifikt modellutbud.',
    category: 'technical'
  },
  {
    question: 'Kan vi använda vårt eget API-nyckelstöd för modeller?',
    answer: 'Ja, Bring Your Own API Key (BYOAK) är möjligt, vilket ger er frihet att använda era befintliga avtal med modellleverantörer.',
    category: 'technical'
  },
  {
    question: 'Hur hanterar ni framtida utveckling och teknikskiften?',
    answer: 'Plattformen är byggd för att vara framtidssäker och frikopplad, vilket innebär att ni kan lägga till nya modeller, byta ut komponenter eller integrera nya tekniker utan att starta om från noll.',
    category: 'platform'
  },
  {
    question: 'Kan vi använda plattformen för att stödja en helt lokal, intern AI-lösning utan extern molnaccess?',
    answer: 'Ja, det går att köra plattformen helt offline, vilket ger er maximal datakontroll och säkerhet, särskilt om ni har höga regulatoriska krav.',
    category: 'security'
  },
  {
    question: 'Har ni stöd för Enterprise-sökning och källhänvisningar i svaren?',
    answer: 'Ja, genom RAG och vektordatabaser kan ni indexera ert företags interna kunskapsbas och få relevanta källhänvisningar. Detta ger ökad tillförlitlighet i de svar AI:n genererar.',
    category: 'technical'
  },
];

export function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      <Hero
        title="Vanliga frågor"
        description="Hitta svar på vanliga frågor om privatestack.ai"
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <Container className="py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <FAQSearch 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          
          <FAQCategories
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <FAQSection faqs={filteredFaqs} />
        </div>
      </Container>
    </main>
  );
}