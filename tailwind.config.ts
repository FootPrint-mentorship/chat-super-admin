import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    // preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: "#25396F",
        primaryTextColor: "#707FA3",
        primaryHover: "#F7F7F7",
        primaryBgColor: "var(--background)",
        secondaryBgColor: "#17CE89",
        tertiaryBgColor: "#F2994A",
        primaryButtonTextColor: "#fff",
        background: "var(--background)",
        foreground: "var(--foreground)",
        danger: "#E42C66",
        secondaryTextColor: "#3396FF",
        divider: "#F5F6F8",
        borderColor: '#D5D7DA',
        tertiaryTextColor: '#646A86'
      },
      fontSize: {
        bigPrimaryButtonTextSize: "20px",
        smallPrimaryButtonTextSize: "16px",
        bannerTextSize: "60px",
        footerTextSize: "17px",
        footerDescSize: "16px",
        adTitleBigSize: "45px",
        adTitleSmallSize: "25px",
        adDescBigSize: "30px",
        adDescSmallSize: "20px",
        loginBtnTextSize: "16px",
      },
      fontFamily: {
        sans: ["Ubuntu", "Helvetica", "Arial", "sans-serif"],
        serif: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        arial: ["FrutigerLTStd", "Helvetica", "Arial", "sans-serif"],
        yamamoto: ["Yantramanav", "Arial", "sans-serif"],
        SFProDisplay: ["SF Pro Display", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [
  ],
} satisfies Config;
