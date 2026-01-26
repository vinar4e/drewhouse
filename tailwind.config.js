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
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['PP Neue Montreal', 'Inter', 'system-ui', 'sans-serif'],
        'short-stack': ['var(--font-short-stack)', 'Inter', 'system-ui', 'cursive'],
      },
      colors: {
        dark: '#0a0a0a',
        charcoal: '#1a1a1a',
      },
    },
  },
  plugins: [],
}
