/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			backgroundImage: {
				'intro-pattern-mobile': "url('./images/bg-intro-mobile.png')",
				'intro-pattern-desktop': "url('./images/bg-intro-desktop.png')",
			},
			colors: {
				primary: {
					red: '#FF7A7A',
					green: '#38CC8C',
					pink: '#ff797a',
				},
				accent: {
					blue: '#6055A5',
				},
				neutral: {
					darkblue: '#3E3C49',
					grayishblue: '#B9B6D3',
				},
			},
			fontFamily: { poppins: ['Poppins'] },
			boxShadow: {
				xl: '0 8px 0px 0px rgba(0 0 0 / 0.2)',
			},
		},
	},
	plugins: [],
};
