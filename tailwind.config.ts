import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020420'
        },
        accent: {
            '50': '#f6f3ff',
            '100': '#eee9fe',
            '200': '#e0d6fe',
            '300': '#c7b5fd',
            '400': '#a78bfa',
            '500': '#835cf6',
            '600': '#673aed',
            '700': '#5528d9',
            '800': '#4721b6',
            '900': '#3b1d95',
            '950': '#251065',
        },
        
      },
      fontFamily: {
        sans: ['Inter var experimental', 'Inter var', 'Inter', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    }
  }
};