'use client';

import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="flex flex-col p-8 mx-8 gap-2">
			<div className="flex items-center gap-4 text-black">
				<Link href="https://www.linkedin.com/in/aditya-jain1211/">
					<FaLinkedin size={20} />
				</Link>
				<Link href="https://github.com/Adi-jain12">
					<FaGithub size={20} />
				</Link>
				<Link href="mailto:jaditya98@gmail.com">
					<FaEnvelope size={20} />
				</Link>
			</div>
			<p className="text-black font italic font-medium">
				Made with ☕ by Aditya Jain
			</p>
		</div>
	);
};

export default Footer;
