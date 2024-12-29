import { motion } from 'framer-motion';
import { Container } from './Container';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <Container className="pt-32 pb-16 text-center lg:pt-40 lg:pb-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl text-page tracking-tight text-slate-900"
      >
        Din privata{' '}
        <span className="relative whitespace-nowrap text-primary">
          <span className="relative">AI-hub</span>
        </span>{' '}
        – Säker, flexibel och helt under din kontroll.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-6 max-w-2xl text-body-lg tracking-tight text-slate-700"
      >
        privatestack.ai ger er full kontroll över er AI-infrastruktur. Bygg, utveckla och förvalta era egna AI-lösningar med total datasuveränitet.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 flex justify-center gap-x-6"
      >
        <Button size="lg">Boka en demo</Button>
        <Button size="lg" variant="outline">
          Gå med i vår waitlist
        </Button>
      </motion.div>
    </Container>
  );
}