import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

const file = fileURLToPath(new URL('package.json', import.meta.url));
const packageJson = readFileSync(file, 'utf8');
const PKG = JSON.parse(packageJson);


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
        vitePreprocess(),
        preprocess({
            postcss: true,
        })
    ],

	kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: 'index.html',
            precompress: false,
            strict: true
        }),
        version: {
            name: PKG['version'],
        }
    },
};

export default config;
