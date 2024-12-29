import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface FAQSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function FAQSearch({ searchQuery, setSearchQuery }: FAQSearchProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <Input
        type="text"
        placeholder="Sök bland vanliga frågor..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 py-6 text-lg"
      />
    </div>
  );
}