import { motion } from 'framer-motion';
import { Container } from './Container';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className = '' }: PageHeaderProps) {
  return (
    <Container className={`pt-32 pb-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-display tracking-tight text-gray-900">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-body-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </motion.div>
    </Container>
  );
}