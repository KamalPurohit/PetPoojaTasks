/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#008745",
        dark: "#005f30",
        light: "#EBF7ED",
        hover: "#F2F4F6",
        neutral:"#979797",
        neutralLight:"#F7F8FA",
        border:"#EBEBEB",
        warning: "#D9A541",
        warningBg: "#FFF8E5",
        error: "#D92D20",
        errorBg: "#FFF0E5",
        scheduledBg: "#F7EDFF",
        scheduled: "#7955A3",
        success: "#039855",
        successBg: "#ECFDF3",
      },
    },
  },
  plugins: [],
};
