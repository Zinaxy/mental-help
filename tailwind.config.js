module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#03a9fc",
        secondary: "#0F0F0F",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
