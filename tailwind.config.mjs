/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Niko brand palette (from Brand Pics.png)
        ink: '#0D1321', // depth / near-black — Trust, intelligence
        navy: '#1B263B', // Stability, professionalism
        teal: '#1FA09A', // Growth, balance, innovation
        growth: '#5FBF72', // Sustainability, energy, progress
        mist: '#E6E8EC', // Clarity, neutrality
        paper: '#F7F8FA', // Simplicity, openness
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      lineHeight: {
        relaxed: '1.7',
      },
      boxShadow: {
        // Layered, color-tinted shadows (no flat shadow-md)
        card: '0 1px 2px rgba(13, 19, 33, 0.04), 0 8px 24px -8px rgba(13, 19, 33, 0.12)',
        floating:
          '0 2px 4px rgba(13, 19, 33, 0.06), 0 18px 40px -12px rgba(13, 19, 33, 0.22)',
        glow: '0 10px 30px -10px rgba(31, 160, 154, 0.45)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
