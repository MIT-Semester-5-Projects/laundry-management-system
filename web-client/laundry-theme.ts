
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const laundryTheme: CustomThemeConfig = {
    name: 'laundry-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "24px",
		"--theme-rounded-container": "24px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #6290f1 
		"--color-primary-50": "231 238 253", // #e7eefd
		"--color-primary-100": "224 233 252", // #e0e9fc
		"--color-primary-200": "216 227 252", // #d8e3fc
		"--color-primary-300": "192 211 249", // #c0d3f9
		"--color-primary-400": "145 177 245", // #91b1f5
		"--color-primary-500": "98 144 241", // #6290f1
		"--color-primary-600": "88 130 217", // #5882d9
		"--color-primary-700": "74 108 181", // #4a6cb5
		"--color-primary-800": "59 86 145", // #3b5691
		"--color-primary-900": "48 71 118", // #304776
		// secondary | #7d5d6c 
		"--color-secondary-50": "236 231 233", // #ece7e9
		"--color-secondary-100": "229 223 226", // #e5dfe2
		"--color-secondary-200": "223 215 218", // #dfd7da
		"--color-secondary-300": "203 190 196", // #cbbec4
		"--color-secondary-400": "164 142 152", // #a48e98
		"--color-secondary-500": "125 93 108", // #7d5d6c
		"--color-secondary-600": "113 84 97", // #715461
		"--color-secondary-700": "94 70 81", // #5e4651
		"--color-secondary-800": "75 56 65", // #4b3841
		"--color-secondary-900": "61 46 53", // #3d2e35
		// tertiary | #FBB386 
		"--color-tertiary-50": "254 244 237", // #fef4ed
		"--color-tertiary-100": "254 240 231", // #fef0e7
		"--color-tertiary-200": "254 236 225", // #feece1
		"--color-tertiary-300": "253 225 207", // #fde1cf
		"--color-tertiary-400": "252 202 170", // #fccaaa
		"--color-tertiary-500": "251 179 134", // #FBB386
		"--color-tertiary-600": "226 161 121", // #e2a179
		"--color-tertiary-700": "188 134 101", // #bc8665
		"--color-tertiary-800": "151 107 80", // #976b50
		"--color-tertiary-900": "123 88 66", // #7b5842
		// success | #3584e4 
		"--color-success-50": "225 237 251", // #e1edfb
		"--color-success-100": "215 230 250", // #d7e6fa
		"--color-success-200": "205 224 248", // #cde0f8
		"--color-success-300": "174 206 244", // #aecef4
		"--color-success-400": "114 169 236", // #72a9ec
		"--color-success-500": "53 132 228", // #3584e4
		"--color-success-600": "48 119 205", // #3077cd
		"--color-success-700": "40 99 171", // #2863ab
		"--color-success-800": "32 79 137", // #204f89
		"--color-success-900": "26 65 112", // #1a4170
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #3fb5ff 
		"--color-surface-50": "226 244 255", // #e2f4ff
		"--color-surface-100": "217 240 255", // #d9f0ff
		"--color-surface-200": "207 237 255", // #cfedff
		"--color-surface-300": "178 225 255", // #b2e1ff
		"--color-surface-400": "121 203 255", // #79cbff
		"--color-surface-500": "63 181 255", // #3fb5ff
		"--color-surface-600": "57 163 230", // #39a3e6
		"--color-surface-700": "47 136 191", // #2f88bf
		"--color-surface-800": "38 109 153", // #266d99
		"--color-surface-900": "31 89 125", // #1f597d
		
	}
}
