module.exports = {
  purge: ["./pages/**.js"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        puffin: ["puffin-display-soft", "sans-serif"],
      },
      colors: {
        brand: {
          1: "#FCE8EA",
          2: "#EBC6C9",
          3: "#9E6561",
          4: "#623937",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
