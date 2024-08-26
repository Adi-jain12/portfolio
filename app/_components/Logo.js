import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/home.png';

const Logo = () => {
	return (
		<Link href="/" className="flex items-center gap-4 z-10">
			<Image
				src={logo}
				height="70"
				width="70"
				quality={100}
				alt="Logo"
				className="hover:animate-spin-slow"
			/>
		</Link>
	);
};

export default Logo;
