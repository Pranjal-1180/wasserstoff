/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        antiquewhite: "#fff4df",
        black: "#000",
        "palette-noble-black-700": "#15181b",
        mediumpurple: "#b9a0ff",
        white: "#fff",
        "palette-pac-man-50": "#fffcf7",
        darkslategray: "#484f56",
        gainsboro: "#e7e7e7",
        gray: {
          "100": "#282b30",
          "200": "rgba(255, 255, 255, 0.2)",
        },
        goldenrod: "#ffca5f",
      },
      spacing: {},
      fontFamily: {
        lexend: "Lexend",
        "space-grotesk": "'Space Grotesk'",
      },
      fontSize: {
        "45xl": "64px",
        "32xl": "51px",
        "19xl": "38px",
        inherit: "inherit",
      },
      screens: {
        lg: {
          max: "1200px",
        },
        mq750: {
          raw: "screen and (max-width: 750px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
      animation: {
        'slide-left': 'slide-left 4s forwards',
        'slide-left-and-back': 'slide-left-and-back 4s forwards',
        'escalator-up-and-back': 'escalator-up 2s ease-in-out infinite',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'slide-left-and-back': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-50%)' },
        },
        'escalator-up': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-50px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

