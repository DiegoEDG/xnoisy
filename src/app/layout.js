import './globals.css';

export const metadata = {
	title: 'xNoysi Links',
	description: 'Links de xNoisy'
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
