/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0d1224",
                secondary: "#16f2b3",
                dark: "#050816",
                "pink-accent": "#ec4899",
                "violet-accent": "#7c3aed",
                "cyan-accent": "#16f2b3",
                "black-100": "#100d25",
                "black-200": "#090325",
                "white-100": "#f3f3f3",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            backgroundImage: {
                "hero-pattern": "url('/src/assets/herobg.png')",
            },
            animation: {
                "typewriter": "typewriter 2s steps(40) forwards",
                "blink": "blink 1s infinite",
            },
            keyframes: {
                typewriter: {
                    "0%": { width: "0%" },
                    "100%": { width: "100%" },
                },
                blink: {
                    "50%": { opacity: "0" },
                }
            }
        },
    },
    plugins: [],
}
