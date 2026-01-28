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
        sans: ['Chakra Petch', 'system-ui', 'sans-serif'],
        display: ['Chakra Petch', 'system-ui', 'sans-serif'],
        'short-stack': ['var(--font-short-stack)', 'Chakra Petch', 'system-ui', 'cursive'],
        'noto-serif': ['Chakra Petch', 'serif'],
        'averia-serif': ['AveriaSerifLibre', 'serif'],
      },
      colors: {
        dark: '#0a0a0a',
        charcoal: '#1a1a1a',
      },
    },
  },
  plugins: [],
}
