module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          base: "hsl(203, 89%, 53%)",
          dark: "hsl(203, 89%, 46%)",
          light: "hsl(203, 89%, 96%)",
        },
        gray: {
          dark: "#657786",
          light: "#aab8c2",
          extraLight: "#e1e8ed",
          lightest: "#f5f8fa",
        },
        black: "#14171a",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
