const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
       colors: {
        gray: colors.gray,
        primary: colors.indigo,
        success: colors.emerald,
        error: colors.rose,
        warning: colors.amber,
    },
    },
  },
 plugins: [require("@tailwindcss/forms"),],
}