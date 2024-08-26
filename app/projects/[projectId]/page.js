import Image from 'next/image';
import WildOasis from '../../../public/wild.png';
import Forkify from '../../../public/forkify.png';
import CheckInn from '../../../public/hotel.jpg';
import AdStock from '../../../public/inventory.jpg';
import Link from 'next/link';

const data = [
	{
		id: 'the-wild-oasis',
		title: 'The Wild Oasis',
		image: WildOasis,
		desc: 'gngfhdsghh et rtyetye',
		linkName: 'https://the-wild-oasis-beryl-ten.vercel.app/',
	},
	{
		id: 'forkify',
		title: 'Forkify',
		image: Forkify,
		desc: '',
		linkName: 'https://mern-food-ordering-app-frontend-qbuu.onrender.com/',
	},
	{
		id: 'checkinn',
		title: 'CheckInn',
		image: CheckInn,
		desc: '',
		linkName: 'https://mern-booking-app-oev4.onrender.com/',
	},
	{
		id: 'adstock',
		title: 'AdStock',
		image: AdStock,
		desc: '',
		linkName: 'https://main.d34bxybpjtg254.amplifyapp.com/',
	},
];

export async function generateMetadata({ params }) {
	const { projectId } = params;

	return { title: `${projectId}` };
}

const page = ({ params }) => {
	const [newData] = data.filter((item) =>
		item.id === params.projectId ? item : ''
	);

	return (
		<div className="container mx-auto p-12">
			<span className="text-4xl font-bold flex justify-center mb-8 text-black">
				{newData.title}
			</span>

			<div className="relative mb-8">
				<Image
					src={newData.image}
					quality={100}
					alt={newData.title}
					className="object-cover w-full h-[35rem]"
				/>
			</div>
			<div className="font-medium">
				<p className="text-gray-900 mb-6">{newData.desc}</p>

				<Link
					href={newData.linkName}
					className="bg-blue-200 text-black rounded-md px-1 py-1 font-semibold hover:bg-cyan-300"
				>
					Site &rarr;
				</Link>
			</div>
		</div>
	);
};

export default page;
