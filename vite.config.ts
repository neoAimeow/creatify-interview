import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import {join} from 'path';

export default defineConfig({
    base:'/creatify-interview/',
    resolve: {
        alias: {
            '@': join(__dirname, 'src')
        }
    },
    plugins: [react()]
});
