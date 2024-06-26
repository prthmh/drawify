import type { Config } from "tailwindcss";
import colors, { gray } from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      background1: "rgba(255,255,255, 0.9)",
      shadow1:
        "0px 7px 14px rgba(0, 0, 0, .05), 0px 0px 3.12708px rgba(0, 0, 0, .0798), 0px 0px .931014px rgba(0, 0, 0, .1702)",
      shadow2: "0 0 0 1px #4a47b1",
      border1: "#e0e0e0",
      border2: "#d6d6d6",
      text1: "#262626",
      text2: "#e3e2fe",
      white: colors.white,
      gray: colors.slate,
    },
  },
  plugins: [],
};
export default config;
