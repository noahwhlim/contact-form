/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      colors: {
        'mint' : 'hsl(148, 38%, 91%)',
        'medium-grey' : 'hsl(186, 15%, 59%)',
        'sub-green' : 'hsl(169, 82%, 27%)'
      },
    },
    
  },
  plugins: [],
};
