/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineClamp: {
        2: '2',
      },
      colors: {
        primary: '#C63535',
        secondary: '#F8B32E',
        bgcolor: '#FFFBF1',
        third : '#1B2345',
        yellow: '#F8B32E',
      },
      backgroundImage: ({
        'hero-pattern': "url('/src/assets/images/BgHome.png')",
        'hero-pattern2': "url('/src/assets/images/1330957.jpeg')",
      }),
      fontFamily: {
        HomeHeader: ['Kids Magazine'],
        fontNav: ['IMPACT'],
      },
    },
  },
  plugins: [],
}