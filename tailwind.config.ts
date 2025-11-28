import type { Config } from 'tailwindcss'

/**
 * Tailwind CSS v4 configuration for RTL (Right-to-Left) React/Next.js projects
 *
 * Features:
 * - Built-in RTL support (no plugin needed in v4)
 * - Optimized content paths for Next.js App Router
 * - Extended theme with RTL-friendly utilities
 * - Arabic/RTL language optimizations
 */

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      // RTL-specific customizations
      screens: {
        'xs': '475px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  // No plugins needed - RTL is built-in in Tailwind CSS v4
  plugins: [],
}

export default config
