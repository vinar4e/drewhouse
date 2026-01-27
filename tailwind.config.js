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
        sans: ['Kanit', 'system-ui', 'sans-serif'],
        display: ['Kanit', 'system-ui', 'sans-serif'],
        'short-stack': ['var(--font-short-stack)', 'Kanit', 'system-ui', 'cursive'],
        'noto-serif': ['Kanit', 'serif'],
      },
      colors: {
        dark: '#0a0a0a',
        charcoal: '#1a1a1a',
      },
    },
  },
  plugins: [],
}
