/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tomato:"hsl(4, 100%, 67%)",
        "Dark-Slate-Grey": `hsl(234, 29%, 20%)`,
        "Charcoal-Grey": `hsl(235, 18%, 26%)`,
        grayP: `hsl(231, 7%, 60%)`,
        light: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        "roboto-regular": ["Roboto-Regular"],
        "roboto-bold": ["Roboto-Bold"],
      },
      backgroundImage:{
        listIcon:`url("./assets/images/icon-list.svg")`,
        backgroundMobile:`url("./assets/images/illustration-sign-up-mobile.svg")`,
        backgroundDesktop:`url("./assets/images/illustration-sign-up-desktop.svg")`,
      }
    },
  },
  plugins: [],
};
