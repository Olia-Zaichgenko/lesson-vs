import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    base: '/lesson-vs/',
    plugins: [
        react(),
        tailwindcss(),
    ],
    build: {target: 'esnext', minify: false},
    server: { headers: { 'Access-Control-Allow-Origin': '*' } },
})
