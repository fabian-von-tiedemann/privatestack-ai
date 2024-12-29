import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { Blockquote } from '@/components/ui/blockquote';

export function NotFound() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <Container className="py-24 lg:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto mb-8">
            <span className="text-[4rem] leading-none">🤷‍♂️</span>
          </div>

          <h1 className="text-display font-semibold text-gray-900 mb-4">
            404: Sidan saknas
          </h1>
          
          <h2 className="text-xl text-gray-600 mb-8">
            — eller har någon stängt ned dess åtkomst?
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Hos privatestack.ai hjälper vi organisationer att behålla kontrollen över sin datakedja. 
            Men även vår robusta stack kan stöta på saknade länkar ibland.
          </p>

          <Blockquote 
            className="mb-12"
            caption="privatestack.ai"
          >
            Med total kontroll kommer trygghet — men även en och annan saknad länk.
          </Blockquote>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link to="/">
                <Home className="w-5 h-5" />
                Gå till startsidan
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                <MessageSquare className="w-5 h-5" />
                Prata med vår chatbot
              </button>
            </Button>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}