import { Montserrat } from 'next/font/google';
import Header from './_components/Header';
import Footer from './_components/Footer';
import './_styles/globals.css';

const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: 'Home',

	title: {
		template: '%s',
		default: 'Welcome',
	},

	description: 'About me',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.className} antialiased bg-accent-200 text-primary-100 min-h-screen flex flex-col`}
			>
				<Header />

				<div className="flex-1 px-8 grid">
					<main className="max-w-7xl mx-auto w-full">{children}</main>
				</div>

				<Footer />
			</body>
		</html>
	);
}
