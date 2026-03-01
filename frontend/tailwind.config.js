/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        zen: {
          bg: '#050816',
          panel: '#0b1233',
          panelSoft: '#111a46',
          neonBlue: '#00F5FF',
          neonPurple: '#7B61FF',
          neonMint: '#00FFB2',
          glowBlue: '#00F5FF',
          glowPurple: '#7B61FF',
          text: '#dbeafe',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 18px rgba(0, 245, 255, 0.45), 0 0 34px rgba(123, 97, 255, 0.35)',
        'neon-mint': '0 0 18px rgba(0, 255, 178, 0.35), 0 0 34px rgba(0, 245, 255, 0.25)',
        glass: 'inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 24px 60px rgba(2, 6, 23, 0.45)',
      },
      backgroundImage: {
        'futuristic-grid':
          'radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.15), transparent 28%), radial-gradient(circle at 80% 10%, rgba(168, 85, 247, 0.12), transparent 30%), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: 'auto, auto, 36px 36px, 36px 36px',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            boxShadow:
              '0 0 0 rgba(0, 245, 255, 0), 0 0 12px rgba(0, 245, 255, 0.25), 0 0 24px rgba(123, 97, 255, 0.15)',
          },
          '50%': {
            boxShadow:
              '0 0 0 rgba(0, 245, 255, 0), 0 0 22px rgba(0, 245, 255, 0.55), 0 0 44px rgba(123, 97, 255, 0.4)',
          },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 2.2s ease-in-out infinite',
        'fade-in': 'fade-in 700ms ease-out both',
        'fade-up': 'fade-up 800ms ease-out both',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-1000': { perspective: '1000px' },
        '.transform-style-3d': { transformStyle: 'preserve-3d' },
        '.backface-hidden': { backfaceVisibility: 'hidden' },
        '.card-3d': {
          transformStyle: 'preserve-3d',
          transition: 'transform 400ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 300ms ease',
          willChange: 'transform',
        },
        '.card-3d-hover': {
          transform: 'rotateX(8deg) rotateY(-10deg) translateZ(12px)',
        },
      })
    },
  ],
}
