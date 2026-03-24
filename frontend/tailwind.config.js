export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        shine: 'shine 3s linear infinite',
        equalizer: 'equalizer 1s ease-in-out infinite',
        ping2: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        equalizer: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(2)' },
        },
      },
      backgroundSize: {
        '200': '200% auto',
      },
    },
  },
  plugins: [],
}