/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['AveriaSerifLibre', 'serif'],
        display: ['AveriaSerifLibre', 'serif'],
        'short-stack': ['var(--font-short-stack)', 'AveriaSerifLibre', 'serif', 'cursive'],
        'noto-serif': ['AveriaSerifLibre', 'serif'],
      },
      colors: {
        dark: '#0a0a0a',
        charcoal: '#1a1a1a',
      },
    },
  },
  plugins: [],
}
