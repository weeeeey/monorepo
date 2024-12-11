import config from "@repo/tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  ...config,
  content: ["./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...config.theme.extend,
    },
  },
  plugins: [...config.plugins],
};
