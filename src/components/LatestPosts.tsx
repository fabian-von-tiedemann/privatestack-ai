import { Container } from './Container';
import { Link } from 'react-router-dom';
import { BlogPost } from './blog/BlogPost';
import { SectionHeader } from './ui/section-header';
import { Button } from './ui/button';

const latestPosts = [
  {
    slug: 'framtiden-med-privat-ai',
    title: 'Framtiden med privat AI',
    description: 'En djupgående analys av hur företag kan säkra sin AI-infrastruktur samtidigt som de maximerar värdet av sina AI-investeringar.',
    date: '2024-03-15',
    category: 'Strategi',
    readingTime: '5 min',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
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
];

export function LatestPosts() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeader
          title="Senaste från bloggen"
          description="Läs om de senaste trenderna och insikterna inom AI"
          className="mb-16"
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
          {latestPosts.map((post, index) => (
            <BlogPost key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="outline">
            <Link to="/blog">Läs fler artiklar</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}