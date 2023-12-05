/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:({
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