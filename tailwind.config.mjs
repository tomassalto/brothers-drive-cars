/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        ubuntumono: ["Ubuntu Mono", "monospace"],
        open_sans: ["Open Sans", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        gold: "#BF953F",
        yellow: "#FFA800",
        light_gold: "#B59E57",
        ultra_dark_gray: "#0e0d0d",
        dark_gray_3: "#191919",
        dark_gray_2: "#1c1c1c",
        dark_gray: "#111010",
        medium_gray: "#2B2B2B",
        gray: "#999999",
        light_gray: "#A1AEBF",
        black: "#000000",
        light_gray_2: "#EFEFF1",
      },
      screens: {
        xs: "390px",
        xsm: "500px",
        mac: "1440px",
        hd: "1536px",
        fullhd: "1920px",
        "2k": "2560px",
        "4k": "3840px",
      },
    },
  },
  plugins: [],
};
