/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/hooks/**/*.{js,jsx,ts,tsx}",
    "./src/lib/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#1C417C",
        secondary: "#D3B265",
        neutral: "#F8FAFF",

        // textHeading: "#005C5D",

        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
      },

      fontFamily: {
        satisfy: ["var(--font-satisfy)"],
        cormorant: ["var(--font-cormorant)"],
        figtree: ["var(--font-figtree)"],
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },

  plugins: [],
};