import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                mono: ["var(--font-geist-mono)"],
            },
            fontSize: {
                "3xl": "1.75rem",
            },
            backgroundImage: {
                MotiMateLogo: "url('/illustrations/vectors/MotiMateLogo.svg')",
            },
        },
    },
    plugins: [],
} satisfies Config;
