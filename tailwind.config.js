/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: 'media',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",  './node_modules/flowbite/**/*.js'
    ], theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1536px',
        },
        extend:{
        colors: {
            // APP COLORS
            'primary': '#FFF3C6',
            'secondary': '#6491E4',
            'tertiary': '#002BFF',
            'text': '#FF3033',
            'black': '#000000',
            /////////////////////
            'purple': '#7e5bef',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#1DB954',
            'yellow': '#ffc82c',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        }
    },
    plugins: [
        require("flowbite/plugin")
    ],

}

