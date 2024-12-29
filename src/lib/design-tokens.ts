export const colors = {
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))',
    50: 'hsl(0, 0%, 98%)',
    100: 'hsl(0, 0%, 95%)',
    200: 'hsl(0, 0%, 90%)',
    300: 'hsl(0, 0%, 80%)',
    400: 'hsl(0, 0%, 70%)',
    500: 'hsl(0, 0%, 60%)',
    600: 'hsl(0, 0%, 50%)',
    700: 'hsl(0, 0%, 40%)',
    800: 'hsl(0, 0%, 30%)',
    900: 'hsl(0, 0%, 20%)',
  },
  secondary: {
    DEFAULT: 'hsl(var(--secondary))',
    foreground: 'hsl(var(--secondary-foreground))',
    50: 'hsl(0, 0%, 98%)',
    100: 'hsl(0, 0%, 95%)',
    200: 'hsl(0, 0%, 90%)',
    300: 'hsl(0, 0%, 80%)',
    400: 'hsl(0, 0%, 70%)',
    500: 'hsl(0, 0%, 60%)',
    600: 'hsl(0, 0%, 50%)',
    700: 'hsl(0, 0%, 40%)',
    800: 'hsl(0, 0%, 30%)',
    900: 'hsl(0, 0%, 20%)',
  }
} as const;

export const typography = {
  fonts: {
    sans: ['Figtree', 'system-ui', 'sans-serif'],
    display: ['Figtree', 'system-ui', 'sans-serif'],
    mono: ['Figtree', 'monospace'],
  },
  sizes: {
    'display-lg': ['4.5rem', { lineHeight: '1.1', fontWeight: '600' }],
    'display': ['3.75rem', { lineHeight: '1.2', fontWeight: '600' }],
    'title-lg': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
    'title': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
    'subtitle': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
    'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '300' }],
    'body': ['1rem', { lineHeight: '1.6', fontWeight: '300' }],
  },
  variants: {
    section: {
      title: {
        default: 'text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl',
        light: 'text-4xl font-semibold tracking-tight text-white sm:text-5xl',
      },
      description: {
        default: 'mt-6 text-lg leading-8 text-gray-600',
        light: 'mt-6 text-lg leading-8 text-gray-300',
      }
    }
  }
} as const;

export const spacing = {
  section: {
    padding: {
      y: 'py-32',
      x: 'px-6 lg:px-8'
    }
  },
  container: {
    maxWidth: 'max-w-7xl',
    padding: 'px-6 lg:px-8'
  }
} as const;

export const components = {
  card: {
    base: 'rounded-2xl border bg-card text-card-foreground shadow-sm',
    variants: {
      default: '',
      feature: 'bg-white p-8 shadow-sm',
    }
  },
  button: {
    base: 'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    variants: {
      default: 'bg-black text-white hover:bg-black/90',
      outline: 'border border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
      ghost: 'hover:bg-gray-100 hover:text-gray-900',
      link: 'text-gray-900 underline-offset-4 hover:underline',
    },
    sizes: {
      default: 'h-10 px-4 py-2',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-12 rounded-lg px-8 text-base',
      icon: 'h-10 w-10',
    }
  }
} as const;