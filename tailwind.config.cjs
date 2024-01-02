module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            oswald: "Oswald, sans-serif",
            satoshi: ["Satoshi", "sans-serif"],
            inter: ["Inter", "sans-serif"],
        },
        extend: {
            transitionDuration: {
                2500: "2500ms",
            },
        },
    },
    plugins: [],
};
