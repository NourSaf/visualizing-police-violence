import { defineConfig } from 'vite';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
	plugins: [ghPages()],
	base: '/visualizing-police-violence/', // Replace with your repository name
	build: {
		target: 'esnext',
	},
});
