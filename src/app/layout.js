import { Analytics } from '@vercel/analytics/react';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap'
});

export const metadata = {
	title: 'xNoysi Links',
	description: 'Links de xNoisy'
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={poppins.className}>
			<body className="flex items-center justify-center w-screen h-screen">
				{children}
				<Analytics />
			</body>
		</html>
	);
}
