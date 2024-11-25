/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#1d4ed8', // Custom Blue color
        'secondary': '#4b5563', // Custom Gray color
        'accent': '#22c55e', // Custom Green color
        'background': '#f9fafb', // Custom Background color
      },
      fontFamily: {
        'sans': ['Segoe UI', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bubble: {
          '0%': {
            transform: 'translateY(100vh) scale(0.5)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'translateY(-100vh) scale(1)',
            opacity: '0',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        slideInRight: 'slideInRight 1s ease-out',
        slideInLeft: 'slideInLeft 1s ease-out',
        bubble: 'bubble 10s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
