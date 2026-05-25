import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#facc15',
      },
      animation: {
        slowZoom: 'slowZoom 18s ease-in-out infinite alternate',
      },
      keyframes: {
        slowZoom: {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1.08)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config