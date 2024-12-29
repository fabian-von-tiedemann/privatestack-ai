import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap gap-2"
    >
      <button
        onClick={() => onSelectCategory('all')}
        className={`rounded-full px-4 py-1.5 text-sm font-medium ${
          selectedCategory === 'all'
            ? 'bg-primary text-white'
            : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
        }`}
      >
        Alla
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium ${
            selectedCategory === category
              ? 'bg-primary text-white'
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
          }`}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
}