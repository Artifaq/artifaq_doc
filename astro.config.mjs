import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Artifaq',
			social: {
				github: 'https://github.com/artifaq/artifaq',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Documentation',
					autogenerate: { directory: 'docs' },
				},
			],
		}),
	],
});
