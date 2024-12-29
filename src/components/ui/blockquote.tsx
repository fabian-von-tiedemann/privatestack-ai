import { cn } from "@/lib/utils"

interface BlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  children: React.ReactNode
  className?: string
  author?: string
  caption?: React.ReactNode
}

export function Blockquote({ children, className, author, caption, ...props }: BlockquoteProps) {
  return (
    <figure className={cn("relative py-6 px-8", className)} {...props}>
      <div className="absolute inset-0">
        <div className="h-full w-3 bg-primary/10 rounded-r-lg" />
      </div>
      <blockquote className="relative">
        <p className="font-light text-lg leading-relaxed text-gray-600 italic">
          {children}
        </p>
      </blockquote>
      {(author || caption) && (
        <figcaption className="mt-4">
          <div className="flex items-center gap-x-4">
            <div className="h-0.5 w-6 bg-gray-300" />
            {author && (
              <div className="text-base font-medium text-gray-900">{author}</div>
            )}
            {caption && (
              <div className="text-sm text-gray-500">{caption}</div>
            )}
          </div>
        </figcaption>
      )}
    </figure>
  )
}