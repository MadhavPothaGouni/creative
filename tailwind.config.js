module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purplePrimary: "#7C3AED",
        orangePrimary: "#F97316",
        greenPrimary: "#10B981",
        grayBg: "#F3F4F6",
        grayCard: "#FFFFFF",
        low: "#FBBF24",
        high: "#EF4444",
        completed: "#10B981",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
