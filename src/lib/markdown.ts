import { marked } from 'marked';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js';

// Configure marked options
const options: marked.MarkedOptions = {
  gfm: true,
  breaks: true,
  mangle: false,
  headerIds: true,
  smartLists: true,
  smartypants: true,
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    }
    return code;
  }
};

// Custom renderer
const renderer = {
  image(href: string, title: string | null, text: string) {
    return `
      <figure class="my-8">
        <img src="${href}" alt="${text}" class="w-full rounded-lg" />
        ${title ? `<figcaption class="mt-2 text-center text-sm text-gray-500">${title}</figcaption>` : ''}
      </figure>
    `;
  },

  code(code: string, language: string | undefined) {
    return `
      <pre class="bg-gray-900 text-white p-6 rounded-lg overflow-x-auto my-8">
        <code class="language-${language || 'text'}">${code}</code>
      </pre>
    `;
  },

  blockquote(quote: string) {
    return `
      <blockquote class="border-l-4 border-primary pl-4 italic text-gray-700 my-6">
        ${quote.replace(/^<p>|<\/p>$/g, '')}
      </blockquote>
    `;
  },

  paragraph(text: string) {
    return `<p class="mb-6">${text}</p>`;
  },

  heading(text: string, level: number) {
    const sizes = {
      1: 'text-4xl',
      2: 'text-3xl',
      3: 'text-2xl',
      4: 'text-xl',
      5: 'text-lg',
      6: 'text-base'
    };
    const size = sizes[level as keyof typeof sizes] || 'text-base';
    return `<h${level} class="${size} font-bold mt-16 mb-6 text-gray-900">${text}</h${level}>`;
  },

  list(body: string, ordered: boolean) {
    const type = ordered ? 'ol' : 'ul';
    const className = 'list-inside space-y-2 mb-6 ' + (ordered ? 'list-decimal' : 'list-disc');
    return `<${type} class="${className}">${body}</${type}>`;
  },

  listitem(text: string) {
    return `<li class="text-gray-700 leading-relaxed">${text}</li>`;
  },

  link(href: string, title: string | null, text: string) {
    return `<a href="${href}" class="text-primary hover:text-primary/80 no-underline"${
      title ? ` title="${title}"` : ''
    }>${text}</a>`;
  }
};

marked.use({ renderer });

/**
 * Convert markdown to sanitized HTML with proper styling
 */
export function markdownToHtml(markdown: string): string {
  // Convert markdown to HTML
  const rawHtml = marked(markdown, options);
  
  // Sanitize HTML
  const cleanHtml = DOMPurify.sanitize(rawHtml);
  
  return cleanHtml;
}