module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mobile: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
        xxxl: "1900px",
      },
      colors: {
        "aqua-rgba": "rgba(6, 243, 243, 0.995)",
        "black-rgba": "rgba(0, 0, 0, 0.64)",
      },
      backgroundImage: {
        footer: "url('./Vector22.svg')",
        circle: "url('./Ellipse 1126.svg')",
        circlew: "url('./Ellipse 1126w.svg')",
      },
    },
    fontFamily: {
      roboto: ["Roboto"],
    },
  },
  plugins: [],
};
