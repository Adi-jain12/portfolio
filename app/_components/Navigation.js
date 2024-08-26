'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
	const [isActive, setIsActive] = useState('');

	const handleClick = (linkName) => {
		setIsActive(linkName);
	};

	return (
		<nav className="text-xl">
			<ul className="flex gap-10 items-center">
				<li>
					<Link
						href="/projects"
						className={`text-lg font-medium transition-all duration-400 ${
							isActive === 'projects' ? 'text-black underline' : 'text-gray-500'
						} hover:underline underline-offset-[1px] px-3`}
						onClick={() => handleClick('projects')}
					>
						Projects
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						className={`text-lg font-medium transition-all duration-400 ${
							isActive === 'about' ? 'text-black underline' : 'text-gray-500'
						} hover:underline underline-offset-[1px] px-3`}
						onClick={() => handleClick('about')}
					>
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
