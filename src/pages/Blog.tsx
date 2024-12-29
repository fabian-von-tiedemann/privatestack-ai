import { useState } from 'react';
import { Container } from '@/components/Container';
import { Hero } from '@/components/ui/hero';
import { BlogPost } from '@/components/blog/BlogPost';
import { CategoryFilter } from '@/components/blog/CategoryFilter';
import { Button } from '@/components/ui/button';

const posts = [
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
  {
    slug: 'ai-driven-innovation',
    title: 'AI-driven Innovation',
    description: 'Hur företag kan använda AI för att driva innovation och skapa konkurrensfördelar i en snabbt föränderlig marknad.',
    date: '2024-03-01',
    category: 'Strategi',
    readingTime: '4 min',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'framtidens-arbetsplats',
    title: 'AI på Framtidens Arbetsplats',
    description: 'Utforska hur AI förändrar arbetsplatsen och hur företag kan förbereda sig för en framtid där människor och AI arbetar sida vid sida.',
    date: '2024-02-28',
    category: 'Strategi',
    readingTime: '7 min',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'llm-optimering',
    title: 'Optimering av Språkmodeller',
    description: 'Praktiska tips och strategier för att optimera prestanda och kostnader när du arbetar med stora språkmodeller.',
    date: '2024-02-25',
    category: 'Teknik',
    readingTime: '10 min',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'privat-ai-infrastruktur',
    title: 'Bygga Privat AI-infrastruktur',
    description: 'En teknisk guide till att bygga och underhålla en säker och skalbar AI-infrastruktur för företag.',
    date: '2024-02-20',
    category: 'Teknik',
    readingTime: '12 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'ai-sakerhetspolicy',
    title: 'Utveckla en AI-säkerhetspolicy',
    description: 'Steg-för-steg guide till att utveckla och implementera en effektiv säkerhetspolicy för AI-användning i organisationen.',
    date: '2024-02-15',
    category: 'Säkerhet',
    readingTime: '8 min',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'ai-transformation',
    title: 'Leda AI-transformation',
    description: 'Strategier för att framgångsrikt leda en organisations AI-transformation och hantera förändring.',
    date: '2024-02-10',
    category: 'Strategi',
    readingTime: '6 min',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'ai-etik',
    title: 'Etisk AI-utveckling',
    description: 'Hur företag kan säkerställa att deras AI-utveckling följer etiska riktlinjer och främjar ansvarsfull innovation.',
    date: '2024-02-05',
    category: 'Säkerhet',
    readingTime: '7 min',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
];

const categories = ['Strategi', 'Teknik', 'Säkerhet'];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visiblePosts, setVisiblePosts] = useState(6);

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredPosts.length;

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 6, filteredPosts.length));
  };

  return (
    <main>
      <Hero
        title="Blogg"
        description="Djupgående artiklar om AI, säkerhet och best practices från vårt team av experter"
        image="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-24 bg-white">
        <Container>
        <div className="mt-16 space-y-16">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          
          <div className="grid gap-x-8 gap-y-16 lg:grid-cols-2">
            {displayedPosts.map((post) => (
              <BlogPost key={post.slug} post={post} />
            ))}
          </div>
          
          {hasMorePosts && (
            <div className="mt-16 text-center">
              <Button 
                onClick={loadMore}
                size="lg"
                variant="outline"
              >
                Visa fler artiklar
              </Button>
            </div>
          )}
          </div>
        </Container>
      </section>
    </main>
  );
}