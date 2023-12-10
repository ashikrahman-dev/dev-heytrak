/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['*'],
    theme: {
        fontFamily: {
        "dm-mono": "'DM Mono', monospace",
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '20px',
                lg: '30pxm',
                xl: '30pxm',
                '2xl': '30pxm',
            },
        },
        colors: {
            blue: "#1155D4",
            "dark-blue": "#0D409F",
            "light-blue": "#F5F8FF",
            black: "#000000",
            "light-dark": "#35324A",
            gray: "#6B697B",
            orange: "#FF6B18",
            white: "#ffffff",
        },
        extend: {
            boxShadow: {
                'btn-shadow': '0px -4px 0px 0px #0D409F inset, 0px 2px 0.6px 0px rgba(0, 0, 0, 0.25)',
            }
        },
        // screens: {
        //     '3xl': '1920px',
        // }

    },
    plugins: [],
}

