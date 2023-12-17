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
        'BOOMStudios' : "url('/src/assets/images/boomstudito.png')",
        'DarkHorseComics' : "url('/src/assets/images/darkhorsecomics.png')",
        'dc' : "url('/src/assets/images/dc.png')",
        'Dynamite' : "url('/src/assets/images/Dynamite.png')",
        'IDW' : "url('/src/assets/images/IDW.png')",
        'ImageComics' : "url('/src/assets/images/ImageComics.png')",
        'Marvel' : "url('/src/assets/images/Marvel.png')",
        'Action-Adventure' : "url('/src/assets/images/Action-Adventure.png')",
        'crime' : "url('/src/assets/images/crime.png')",
        'Fantasy' : "url('/src/assets/images/Fantasy.png')",
        'Horror' : "url('/src/assets/images/Horror.png')",
        'Superhero' : "url('/src/assets/images/Superhero.png')",
      }),
      fontFamily: {
        HomeHeader: ['Kids Magazine'],
        fontNav: ['IMPACT'],
      },
    },
  },
  plugins: [],
}