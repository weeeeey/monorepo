import config from "@repo/tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  ...config,
  content: [
    ...config.content,
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      ...config.theme.extend,
    },
  },
  plugins: [],
};
