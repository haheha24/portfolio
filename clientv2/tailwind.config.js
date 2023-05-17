/** @type {import('tailwindcss').Config} */
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
        "dynamic-lg": "clamp(18px, 2vw, 96px)",
        "dynamic-xl": "clamp(24px, 2.5vw, 96px)",
        "dynamic-2xl": "clamp(28px, 4vw, 96px)",
      },
      gridTemplateRows: {
        nav: "repeat(3, 25vh)",
      },
      gridTemplateColumns: {
        nav: "repeat(6, 15%)",
      },
      keyframes: {
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
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
        "opacity-itemone": "opacity 0.55s ease-in-out 1",
        "opacity-itemtwo": "opacity 0.80s ease-in-out 1",
        "opacity-itemthree": "opacity 1.05s ease-in-out 1",
        "opacity-itemfour": "opacity 1.3s ease-in-out 1",
        tap: "tap 0.25s ease-in 1",
      },
    },
  },
  plugins: [],
};
