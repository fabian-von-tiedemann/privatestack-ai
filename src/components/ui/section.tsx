import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
}

export function Section({ children, className, background = 'white' }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900'
  };

  return (
    <section className={cn(
      "py-24",
      backgrounds[background],
      className
    )}>
      {children}
    </section>
  );
}