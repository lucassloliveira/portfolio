/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Backgrounds (deep purple-black)
        bg0: '#0a0612',
        bg1: '#0f0a1a',
        bg2: '#141023',
        // Accent (neon purple)
        accent: '#b366ff',
        blue: '#7b68ff',
        // Text scale
        text1: '#eaeaf5',
        text2: '#9090b0',
        text3: '#4a4a6a',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Syne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        // Cursor typewriter blink
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        // Entrance animation
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        // Code particle floating
        floatParticle: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-14px) rotate(4deg)' },
          '66%': { transform: 'translateY(-6px) rotate(-3deg)' },
        },
        // Skill "studying" dot pulse
        studyPulse: {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(179,102,255,0.5)',
          },
          '50%': {
            opacity: '0.7',
            transform: 'scale(1.35)',
            boxShadow: '0 0 0 5px rgba(179,102,255,0)',
          },
        },
        // Skill "studying" card border glow
        studyBorder: {
          '0%, 100%': { borderColor: 'rgba(179,102,255,0.4)' },
          '50%': { borderColor: 'rgba(179,102,255,0.9)' },
        },
        // Status dot pulse in legend
        pulseDot: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'fade-in-up': 'fadeInUp 0.55s ease forwards',
        'study-pulse': 'studyPulse 1.5s ease-in-out infinite',
        'study-border': 'studyBorder 1.5s ease-in-out infinite',
        'pulse-dot': 'pulseDot 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};