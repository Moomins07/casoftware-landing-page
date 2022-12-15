/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "bg-wallpaper": "url('/Images/gradient-blue.jpg')",
        "casoftware-logo": "url('/Images/casoftware-fit.svg')",
        azuresvg: "url('/Images/azure.svg')",
        awssvg: "url('/Images/aws.svg')",
        mauisvg: "url('/Images/dotnetmaui.svg')",
      },
      colors: {
        softBlue: "hsl(231, 69%, 60%)",
        softRed: "hsl(0, 94%, 66%)",
        grayishBlue: "hsl(229, 8%, 60%)",
        veryDarkBlue: "hsl(229, 31%, 21%)",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
