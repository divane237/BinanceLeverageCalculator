/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                lato: ['Lato', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },

            animation: {
                menu: 'menu 0.6s ease-in-out forwards',
            },

            keyframes: {
                menu: {
                    '0%': {
                        transform: 'rotateX(270deg)',
                    },

                    '100%': {
                        transform: 'rotateX(360deg)',
                    },
                },
            },
        },
    },
    plugins: [],
};
