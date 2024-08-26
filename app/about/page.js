import Image from 'next/image';
import Me from '../../public/me.jpeg';

const page = () => {
	return (
		<div className="container mx-auto p-12">
			<div className="relative mb-8">
				<Image
					src={Me}
					quality={100}
					alt=""
					// fill
					className="object-contain w-full h-[30rem] slide-in-up"
				/>
			</div>
			<div className="font-medium text-lg text-gray-900 mb-12 slide-in-right"></div>

			<div className="flex flex-col gap-3 text-black slide-in-right">
				<span className="text-2xl font-bold">experience</span>
				<p className="flex gap-2 font-medium">
					<span className="mr-4">02-2023 - 03-2024</span>
					<span className="font-bold bg-red-300 rounded-md px-1">
						Software Engineer
					</span>
					<span className="italic">Optimized Solutions Pvt Ltd.</span>
				</p>
			</div>
		</div>
	);
};

export default page;
