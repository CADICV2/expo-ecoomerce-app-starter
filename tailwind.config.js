/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Incluye todos los archivos en la carpeta app
    "./index.tsx"                  // Incluye el archivo de entrada principal
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
