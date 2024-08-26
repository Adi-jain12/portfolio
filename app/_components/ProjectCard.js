import Image from 'next/image';
import Link from 'next/link';
import { Sono } from 'next/font/google';

const sono = Sono({
	weight: ['400'],
	subsets: ['latin'],
});

const colors = {
	Nextjs: 'bg-gray-800',
	Reactjs: 'bg-cyan-300',
	Nodejs: 'bg-teal-300',
	AWS: 'bg-orange-300',
	MongoDB: 'bg-lime-300',
	PostgreSQL: 'bg-indigo-300',
};

const ProjectCard = ({ title, info, image, tech }) => {
	const paramTitle = title.split(' ').join('-').toLowerCase();

	return (
		<Link
			href={`/projects/${paramTitle}`}
			className="w-[25rem] h-[30rem] mx-auto bg-rose-50 rounded-xl overflow-hidden border-[2.5px] border-b-8 border-r-8 border-black transform transition-transform duration-300 hover:scale-105"
		>
			<div className="bg-gradient-to-r from-blue-200 to-red-300 py-4"></div>

			<div className="relative">
				<Image
					src={image}
					quality={80}
					alt={title}
					className="object-cover w-full h-[16rem]"
				/>
			</div>
			<div className="p-4">
				<div className="mb-6">
					<span className="rounded-md px-1 py-1 text-[28px] mb-4 font-bold text-gray-800 bg-indigo-200 hover:bg-cyan-300 hover:cursor-pointer">
						{title}
					</span>
				</div>

				<div className="flex flex-col gap-6">
					<p className="text-gray-700 text-md italic font-medium">{info}</p>

					<div
						className={`${sono.className} flex font-medium text-gray-700 gap-2 items-center`}
					>
						{tech.map((item) => (
							<span
								key={item}
								className={`rounded-md ${colors[item]} ${
									item === 'Nextjs' ? 'text-gray-100' : ''
								} px-2 text-sm`}
							>
								{item}
							</span>
						))}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProjectCard;
