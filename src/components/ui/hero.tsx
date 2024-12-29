import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  description?: string;
  image: string;
  children?: React.ReactNode;
  className?: string;
  align?: 'left' | 'center';
}

export function Hero({ 
  title, 
  description, 
  image,
  children,
  className,
  align = 'center'
}: HeroProps) {
  return (
    <div className={cn(
      "relative isolate overflow-hidden h-[90vh] flex items-center",
      className
    )}>
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/75 via-gray-900/50 to-gray-900/75" />
      </div>

      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className={cn(
          "mx-auto max-w-2xl lg:max-w-4xl",
          align === 'center' ? 'text-center' : 'text-left'
        )}>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}