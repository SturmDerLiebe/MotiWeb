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
                grey: {
                    1: "#F3F4F5",
                    2: "#F0F1F3",
                    5: "#9EA8B3",
                    6: "#D0D5DD",
                    7: "#142132",
                },
                blue: { 2: "#1D3D5E" },
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
