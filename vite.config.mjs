import { defineConfig } from 'vite';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
	plugins: [ghPages()],
	base: '/visualizing-police-violence/',
	build: {
		target: 'esnext',
	},
});
