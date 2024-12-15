/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {

    
        colors: {
          primary: "#25274d", // Custom primary color
          secondary: "#e5e5e5", // Custom secondary color
          tertiary: "#45A29E", // Example for darker themes
          third: 'rgba(13, 2, 26, 0.61)', // Ensure this color exists

        },
      },
    },
    plugins: [],
  };
  

