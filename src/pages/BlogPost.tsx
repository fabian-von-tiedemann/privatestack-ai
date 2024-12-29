import { useParams } from 'react-router-dom';
import { Container } from '@/components/Container';
import { BlogPost } from '@/components/blog/BlogPost';
import { markdownToHtml } from '@/lib/markdown';
import { ContactButton } from '@/components/ui/contact-button';
import { formatDate } from '@/lib/utils';
import { motion } from 'framer-motion';

// This would typically come from a CMS or API
const post = {
  slug: 'framtiden-med-privat-ai',
  title: 'Framtiden med privat AI',
  description: 'En djupgående analys av hur företag kan säkra sin AI-infrastruktur samtidigt som de maximerar värdet av sina AI-investeringar.',
  date: '2024-03-15',
  category: 'Strategi',
  readingTime: '5 min',
  image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  content: `
    ## Introduktion

    I takt med att AI-teknologin blir allt mer sofistikerad och tillgänglig står företag inför ett kritiskt vägval: Hur kan de dra nytta av AI:s potential samtidigt som de behåller kontrollen över sin data och infrastruktur?

    ## Utmaningen med proprietära AI-lösningar

    Traditionella, proprietära AI-lösningar erbjuder ofta en snabb väg till implementation, men kommer med betydande begränsningar:

    - **Datakontroll**: Företag förlorar ofta direkt kontroll över hur deras data hanteras och används
    - **Vendor Lock-in**: Svårt att byta leverantör eller modeller när behoven förändras
    - **Kostnadskontroll**: Per-användare-licenser kan göra det dyrt att skala användningen

    ## Den privata AI-stackens fördelar

    En privat AI-stack, som privatestack.ai, erbjuder en mer hållbar och flexibel approach:

    1. **Full datasuveränitet**
       - Välj var data lagras (on-prem, EU-moln, hybrid)
       - Kontrollera exakt hur data används och delas

    2. **Flexibel modellhantering**
       - Integrera valfria språkmodeller
       - Byt eller uppdatera modeller efter behov
       - Kör egna finetunade versioner

    3. **Kostnadseffektiv skalning**
       - Betala för faktisk användning, inte per användare
       - Optimera kostnader genom smart modellval
       - Undvik onödiga licensavgifter

    ## Framtidssäkrad AI-strategi

    För att bygga en framtidssäkrad AI-strategi behöver företag:

    1. **Utvärdera nuvarande behov**
       - Kartlägg användningsområden
       - Identifiera säkerhetskrav
       - Analysera datakänslighet

    2. **Planera för tillväxt**
       - Säkerställ skalbarhet
       - Möjliggör enkel integration av nya modeller
       - Bygg för förändring

    3. **Implementera rätt infrastruktur**
       - Välj flexibla, modulära lösningar
       - Säkerställ regelefterlevnad
       - Etablera tydliga processer

    ## Slutsats

    Framtidens AI-landskap kommer att präglas av ökade krav på kontroll, transparens och flexibilitet. Genom att välja en privat AI-stack kan företag säkra sin position i denna utveckling och bygga en hållbar grund för sin AI-transformation.
  `,
  author: {
    name: 'David Holmlund',
    role: 'Chief AI Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
  }
};

// Related posts would typically be fetched based on category or tags
const relatedPosts = [
  {
    slug: 'rag-vs-fine-tuning',
    title: 'RAG vs. Fine-tuning',
    description: 'En teknisk jämförelse mellan Retrieval-Augmented Generation och fine-tuning som hjälper dig välja rätt approach för dina AI-modeller.',
    date: '2024-03-10',
    category: 'Teknik',
    readingTime: '8 min',
    image: 'https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'ai-sakerhet-gdpr',
    title: 'AI-säkerhet och GDPR',
    description: 'En guide till hur du kan implementera AI-lösningar som följer GDPR och andra regulatoriska krav utan att kompromissa med funktionaliteten.',
    date: '2024-03-05',
    category: 'Säkerhet',
    readingTime: '6 min',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'ai-driven-innovation',
    title: 'AI-driven Innovation',
    description: 'Hur företag kan använda AI för att driva innovation och skapa konkurrensfördelar i en snabbt föränderlig marknad.',
    date: '2024-03-01',
    category: 'Strategi',
    readingTime: '4 min',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
];

export function BlogPostPage() {
  const { slug } = useParams();
  
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative py-16 bg-white overflow-hidden lg:pt-24 lg:pb-16">
        <Container>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
                {post.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex items-center justify-center gap-x-8"
            >
              <div className="flex items-center gap-x-4">
                <img src={post.author.image} alt={post.author.name} className="h-12 w-12 rounded-full" />
                <div className="text-left">
                  <span className="text-base font-semibold text-gray-900">{post.author.name}</span>
                  <div className="text-sm text-gray-600">{post.author.role}</div>
                </div>
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-600">Publicerad</div>
                <div className="text-base text-gray-900">{formatDate(post.date)}</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4"
            >
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {post.category}
              </span>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Featured Image */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <Container>
        <div className="py-16 lg:py-24">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg prose-primary mx-auto"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
          />
        </div>
      </Container>

      {/* Related Posts */}
      <section className="bg-gray-50 py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Relaterade artiklar
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Utforska fler artiklar inom samma ämne
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {relatedPosts.map((post) => (
              <BlogPost key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Vill ni veta mer om hur ni kan säkra er AI-infrastruktur?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
              Boka en demo för att se hur privatestack.ai kan hjälpa er organisation att bygga en säker och framtidssäkrad AI-plattform.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <ContactButton 
                variant="default" 
                size="lg"
                title="Boka demo"
                description="Fyll i formuläret så kontaktar vi dig för att boka en demo"
                defaultMessage="Jag är intresserad av en demo efter att ha läst artikeln om framtiden med privat AI"
              >
                Boka demo
              </ContactButton>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}