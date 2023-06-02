/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {},
    extend: {
      colors: {
        white: "#fff",
        transparent: {
          default: "transparent",
          85: "hsla(0, 0%, 10%, 0.85)",
        },
        lightGrey: "#ffffff9c",
        black: {
          primary: "hsl(216, 7%, 14%)",
          secondary: "hsl(216, 7%, 25%)",
          primaryFaded: "hsla(216, 7%, 14%, 0.5)",
          secondaryFaded: "hsla(219, 8%, 33% F, 0.5)",
        },
        purple: {
          primary: "hsl(260, 100%, 60%)",
          secondary: "hsl(260, 100%, 33%)",
          tertiary: "hsl(260, 100%, 75%)",
        },
      },
      padding: {
        full: "100%",
      },
      backgroundImage: {
        hero: "url('/images/transluscent_waves.jpg')",
        logo: "url('/images/site_logo_512x512.png')",
      },
      backgroundSize: {
        "100%": "100% 100%",
      },
      translate: {
        neg: {
          "1/2": "-50% -50%",
        },
        "1/6": "15%",
      },
      fontSize: {
        "dynamic-base": "clamp(16px, 1vw, 96px)",
        "dynamic-lg": "clamp(18px, 1.5vw, 96px)",
        "dynamic-xl": "clamp(24px, 2.5vw, 96px)",
        "dynamic-2xl": "clamp(28px, 4vw, 96px)",
      },
      gridTemplateRows: {
        nav: "repeat(3, 1fr)",
      },
      gridTemplateColumns: {
        nav: "repeat(6, 1fr)",
      },
      keyframes: {
        closeBurgerContent: {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
        },
        openBurgerContent: {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        menuSlideDown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        tap: {
          "0%, 80%": {
            scale: "0.95",
          },
          "50%": {
            scale: "0.875",
          },
          "100%": {
            scale: "1",
          },
        },
      },
      animation: {
        closeBurgerContent: "closeBurgerContent 0.2s ease-in-out 1",
        openBurgerContent: "openBurgerContent 0.2s ease-in-out 1",
        menuSlideDown: "menuSlideDown 0.5s ease-in 1",
        "menuSlideDown-itemone": "menuSlideDown 0.5s ease-in-out 1",
        "menuSlideDown-itemtwo": "menuSlideDown 0.75s ease-in-out 1",
        "menuSlideDown-itemthree": "menuSlideDown 1.25s ease-in-out 1",
        "menuSlideDown-itemfour": "menuSlideDown 0.85s ease-in-out 1",
        "menuSlideDown-itemfour": "menuSlideDown 1.25s ease-in-out 1",
        tap: "tap 0.25s ease-in 1",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        "[data-radix-popper-content-wrapper]": {
          transform: "translate(-50%, -50%)!important",
          top: "50%!important",
          left: "50%!important",
          width: "80%",
        },
        "[data-radix-menu-content]": {
          borderRadius: theme("borderRadius.xl"),
        },
      });
    }),
  ],
};
