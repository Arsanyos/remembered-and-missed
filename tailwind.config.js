/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    options: {
      safelist: [], // Specify a safelist for certain classes if needed.
    },
  },
  theme: {
    extend: {
      boxShadow: {
        customFigma: "1px 1px 20px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
