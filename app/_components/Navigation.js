'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
	const pathname = usePathname();

	return (
		<nav className="text-xl">
			<ul className="flex gap-10 items-center">
				<li>
					<Link
						href="/projects"
						className={`text-lg font-medium transition-all duration-400 ${
							pathname === '/projects'
								? 'text-black underline'
								: 'text-gray-500'
						} hover:underline underline-offset-[1px] px-3`}
					>
						Projects
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						className={`text-lg font-medium transition-all duration-400 ${
							pathname === '/about' ? 'text-black underline' : 'text-gray-500'
						} hover:underline underline-offset-[1px] px-3`}
					>
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
