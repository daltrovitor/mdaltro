    // tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: [
          './app/**/*.{js,ts,jsx,tsx,mdx}',
        ],
        theme: {
          extend: {
            fontFamily: {
              montserrat: ['var(--font-montserrat)', 'sans-serif'], // Referencing the CSS variable
            },
          },
        },
        plugins: [],
      };