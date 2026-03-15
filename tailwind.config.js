/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#050505",    // Deep black background
                accent: "#00E5FF",     // Bright Cyan
                secondary: "#9CA3AF",  // Muted gray for body text
                tertiary: "#111111",   // Slightly elevated background for cards
                "black-100": "#100d25",
                "black-200": "#090325",
                "white-100": "#f3f3f3",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                serif: ["Playfair Display", "serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            boxShadow: {
                card: "0px 35px 120px -15px #211e35",
            },
            screens: {
                xs: "450px",
            }
        },
    },
    plugins: [],
}
