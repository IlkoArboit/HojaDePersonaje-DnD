// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const DnDTheme: CustomThemeConfig = {
	name: 'DnDTheme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "4px",
		"--theme-rounded-container": "16px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #dd6e42 
		"--color-primary-50": "250 233 227", // #fae9e3
		"--color-primary-100": "248 226 217", // #f8e2d9
		"--color-primary-200": "247 219 208", // #f7dbd0
		"--color-primary-300": "241 197 179", // #f1c5b3
		"--color-primary-400": "231 154 123", // #e79a7b
		"--color-primary-500": "221 110 66", // #dd6e42
		"--color-primary-600": "199 99 59", // #c7633b
		"--color-primary-700": "166 83 50", // #a65332
		"--color-primary-800": "133 66 40", // #854228
		"--color-primary-900": "108 54 32", // #6c3620
		// secondary | #e8dab2 
		"--color-secondary-50": "252 249 243", // #fcf9f3
		"--color-secondary-100": "250 248 240", // #faf8f0
		"--color-secondary-200": "249 246 236", // #f9f6ec
		"--color-secondary-300": "246 240 224", // #f6f0e0
		"--color-secondary-400": "239 229 201", // #efe5c9
		"--color-secondary-500": "232 218 178", // #e8dab2
		"--color-secondary-600": "209 196 160", // #d1c4a0
		"--color-secondary-700": "174 164 134", // #aea486
		"--color-secondary-800": "139 131 107", // #8b836b
		"--color-secondary-900": "114 107 87", // #726b57
		// tertiary | #4f6d7a 
		"--color-tertiary-50": "229 233 235", // #e5e9eb
		"--color-tertiary-100": "220 226 228", // #dce2e4
		"--color-tertiary-200": "211 219 222", // #d3dbde
		"--color-tertiary-300": "185 197 202", // #b9c5ca
		"--color-tertiary-400": "132 153 162", // #8499a2
		"--color-tertiary-500": "79 109 122", // #4f6d7a
		"--color-tertiary-600": "71 98 110", // #47626e
		"--color-tertiary-700": "59 82 92", // #3b525c
		"--color-tertiary-800": "47 65 73", // #2f4149
		"--color-tertiary-900": "39 53 60", // #27353c
		// success | #519872 
		"--color-success-50": "229 240 234", // #e5f0ea
		"--color-success-100": "220 234 227", // #dceae3
		"--color-success-200": "212 229 220", // #d4e5dc
		"--color-success-300": "185 214 199", // #b9d6c7
		"--color-success-400": "133 183 156", // #85b79c
		"--color-success-500": "81 152 114", // #519872
		"--color-success-600": "73 137 103", // #498967
		"--color-success-700": "61 114 86", // #3d7256
		"--color-success-800": "49 91 68", // #315b44
		"--color-success-900": "40 74 56", // #284a38
		// warning | #F3CA40 
		"--color-warning-50": "253 247 226", // #fdf7e2
		"--color-warning-100": "253 244 217", // #fdf4d9
		"--color-warning-200": "252 242 207", // #fcf2cf
		"--color-warning-300": "250 234 179", // #faeab3
		"--color-warning-400": "247 218 121", // #f7da79
		"--color-warning-500": "243 202 64", // #F3CA40
		"--color-warning-600": "219 182 58", // #dbb63a
		"--color-warning-700": "182 152 48", // #b69830
		"--color-warning-800": "146 121 38", // #927926
		"--color-warning-900": "119 99 31", // #77631f
		// error | #FA3434 
		"--color-error-50": "254 225 225", // #fee1e1
		"--color-error-100": "254 214 214", // #fed6d6
		"--color-error-200": "254 204 204", // #fecccc
		"--color-error-300": "253 174 174", // #fdaeae
		"--color-error-400": "252 113 113", // #fc7171
		"--color-error-500": "250 52 52", // #FA3434
		"--color-error-600": "225 47 47", // #e12f2f
		"--color-error-700": "188 39 39", // #bc2727
		"--color-error-800": "150 31 31", // #961f1f
		"--color-error-900": "123 25 25", // #7b1919
		// surface | #1f1f1f 
		"--color-surface-50": "221 221 221", // #dddddd
		"--color-surface-100": "210 210 210", // #d2d2d2
		"--color-surface-200": "199 199 199", // #c7c7c7
		"--color-surface-300": "165 165 165", // #a5a5a5
		"--color-surface-400": "98 98 98", // #626262
		"--color-surface-500": "31 31 31", // #1f1f1f
		"--color-surface-600": "28 28 28", // #1c1c1c
		"--color-surface-700": "23 23 23", // #171717
		"--color-surface-800": "19 19 19", // #131313
		"--color-surface-900": "15 15 15", // #0f0f0f
		
	}
}