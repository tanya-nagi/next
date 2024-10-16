import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["playfair", "sans-serif"],
        playfairMedium: ["playfairMedium", "sans-serif"],
        playfairSemibold: ["playfairSemibold", "sans-serif"],
        playfairBold: ["playfairBold", "sans-serif"],
        playfairItalic: ["playfairItalic", "sans-serif"],
        playfairMediumItalic: ["playfairMediumItalic", "sans-serif"],
        playfairSemiboldItalic: ["playfairSemiboldItalic", "sans-serif"],
        worksans: ["worksans", "sans-serif"],
        worksansLight: ["worksansLight", "sans-serif"],
        worksansMedium: ["worksansMedium", "sans-serif"],
        worksansSemiBold: ["worksansSemibold", "sans-serif"],
      },
      colors: {
        dark: "#00264E",
        blueShade: "#EFF6FF",
        blue: "#2067CA",
        blueLight: "#2067CA4A",
        blueDark: "#0355C7",
        navy: "#00264E",
        black: "#000000",
        red: "#ff0000",
        white: "#fff",
      },
    },
    screens: {
      "2xl": "1536px",
      xlg: "1440px",
      xl: "1280px",
      lg: "1024px",
      md: "786px",
      sm: "556px",
    },

    animation: {
      "fade-300": "fade 300ms ease-in-out",
      "fadeUp-300": "fadeUp 300ms ease-in-out",
      "fadeDown-300": "fadeDown 300ms ease-in-out",
      "fade-600": "fade 600ms ease-in-out",
      "fadeUp-600": "fadeUp 600ms ease-in-out",
      "fadeDown-600": "fadeDown 600ms ease-in-out",
      "fade-800": "fade 800ms ease-in-out",
      "fadeUp-800": "fadeUp 800ms ease-in-out",
      "fadeDown-800": "fadeDown 800ms ease-in-out",
      "fade-1000": "fade 1000ms ease-in-out",
      "fadeUp-1000": "fadeUp 1000ms ease-in-out",
      "fadeDown-1000": "fadeDown 1000ms ease-in-out",
    },
    keyframes: {
      fade: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      fadeUp: {
        "0%": { opacity: "0", transform: "translateY(100px)" },
        "100%": { opacity: "1", transform: "translateY(0px)" },
      },
      fadeDown: {
        "0%": { opacity: "0", transform: "translateY(-100px)" },
        "100%": { opacity: "1", transform: "translateY(0px)" },
      },
    },
  },

  plugins: [],
};
export default config;
