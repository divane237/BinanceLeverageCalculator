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
                menu: 'menu 0.5s ease-in-out forwards',
                exit: 'exitMenu 0.4s ease-in-out forwards',
                wallet: 'wallet 0.2s ease-in-out forwards',
            },

            keyframes: {
                menu: {
                    '0%': {
                        transform: 'rotateX(270deg)',
                        opacity: 0,
                        visibility: 'hidden',
                    },

                    '100%': {
                        transform: 'rotateX(360deg)',
                        opacity: 1,
                        visibility: 'visible',
                    },
                },

                exitMenu: {
                    '0%': {
                        transform: 'translateY(-10px)',
                        opacity: 1,
                        visibility: 'visible',
                    },

                    '100%': {
                        visibility: 'hidden',

                        transform: 'rotateX(-90deg)',
                        opacity: 0,
                    },
                },

                wallet: {
                    '0%': {
                        borderRadius: '50%',
                        width: '100px',
                        height: '100px',
                    },

                    '99%': {
                        borderRadius: '50%',
                        width: '100vw',
                        height: '100vh',
                    },
                    '100%': {
                        border: 'none',
                        width: '100vw',
                        height: '100dvh',
                    },
                },
            },
        },
    },
    plugins: [],
};
