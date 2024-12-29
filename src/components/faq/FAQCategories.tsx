import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface Category {
  id: string;
  name: string;
}

interface FAQCategoriesProps {
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export function FAQCategories({ categories, selectedCategory, setSelectedCategory }: FAQCategoriesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap gap-2"
    >
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? 'default' : 'outline'}
          onClick={() => setSelectedCategory(category.id)}
          className="rounded-full"
        >
          {category.name}
        </Button>
      ))}
    </motion.div>
  );
}