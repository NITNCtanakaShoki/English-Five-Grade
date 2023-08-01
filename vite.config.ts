import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {defineConfig} from 'vite'
import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        legacy(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: '英単語・イディオム',
                short_name: '英単語',
                description: '英単語やイディオムを暗記するためのアプリです。',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'favicon.png',
                        sizes: '600x600',
                        type: 'image/png'
                    },
                ]
            }
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom'
    }
})
