/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f72585",
          50: "#fff0f7",
          100: "#ffe4f3",
          200: "#ffc9e7",
          300: "#ff9ed1",
          400: "#ff64b4",
          500: "#f72585",
          600: "#e31b79",
          700: "#c01368",
          800: "#a01257",
          900: "#84114a"
        },
        gray: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617"
        },
        background: "#ffffff",
        foreground: "#0f172a",
        muted: "#64748b",
        border: "#e2e8f0"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
        display: ['Figtree', 'system-ui', 'sans-serif'],
        mono: ['Figtree', 'monospace'],
      },
      fontSize: {
        // Page Heading (h1)
        'page': ['3.75rem', { lineHeight: '1.1', fontWeight: 'semibold' }],
        
        // Section Heading (h2)
        'section': ['2.25rem', { lineHeight: '1.2', fontWeight: 'semibold' }],
        
        // Card Heading (h3)
        'card': ['1.5rem', { lineHeight: '1.3', fontWeight: 'semibold' }],
        
        // Body Text
        'lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'base': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll": "scroll 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}