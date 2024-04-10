import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
   
    "./pages/**/*.{ts,tsx}",
    "./Components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors:{//rethinking the colors? //no, but for section bgs use the pink and cream mostly and the buttons use the yellow ////, section titles use the red//I hear you - sawa. Let me do some stuff here - adios
          "tt-red": "#7E2726",
          "tt-yellow":"#F4B34D",
          "tt-pink" : "#EBCDB5",
          "tt-cream": "#E8E3D0"
      },//okay boss man ---->later
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
