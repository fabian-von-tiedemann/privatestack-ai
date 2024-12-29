import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { TYPOGRAPHY } from '@/lib/constants';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
  variant?: 'default' | 'light';
}

export function SectionHeader({ 
  title, 
  description, 
  className,
  align = 'center',
  variant = 'default'
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "max-w-[65ch] space-y-4",
        align === 'center' ? 'text-center mx-auto' : 'text-left',
        className
      )}
    >
      <h2 className={cn(
        TYPOGRAPHY.section.title[variant],
        variant === 'default' ? 'text-gray-900' : 'text-white'
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          TYPOGRAPHY.section.description[variant],
          variant === 'default' ? 'text-gray-600' : 'text-gray-300'
        )}>
          {description}
        </p>
      )}
    </motion.div>
  );
}