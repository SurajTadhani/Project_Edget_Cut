/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    extend: {
      colors :{
        btn : "#6bb7be",
        paragraph : "#6c757d",
      }
    },
  },
  plugins: [],
};
