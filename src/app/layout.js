import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata = {
	title: 'xNoysi Links',
	description: 'Links de xNoisy'
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
