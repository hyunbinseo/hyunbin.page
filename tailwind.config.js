import { screens } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const { sm, md, ...beyondMd } = screens;

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			i5s: '320px',
			xxs: '360px',
			xs: '430px',
			sm,
			md,
			a4: '794px', // 21cm
			a4x: '890px', // 23.54cm
			...beyondMd
		}
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				// Reference https://tailwindcss.com/docs/font-size
				'.text-smallish': {
					'font-size': '0.9375rem', // 15px
					'line-height': '1.375rem' // 22px
				}
			});
		})
	]
};
