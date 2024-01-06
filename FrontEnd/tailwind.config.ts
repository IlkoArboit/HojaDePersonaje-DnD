import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { DnDTheme } from './src/DnDTheme'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {backgroundImage: {
			'character-sheet': "url('/Character-sheet-BG.png')",
		}},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [
					DnDTheme,
				],
			},
		}),
	],
} satisfies Config;
