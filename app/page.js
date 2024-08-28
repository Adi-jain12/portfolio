import Image from 'next/image';
import logo from './../public/pixel.gif';
import { Moon_Dance } from 'next/font/google';

const moonDance = Moon_Dance({
	weight: '400',
	subsets: ['latin'],
});

export const metadata = {
	title: 'home',
};

const page = () => {
	return (
		<div className="grid grid-cols-[1fr_450px] items-center mt-12 text-black mx-36">
			<div className="slide-in-down mb-16">
				<p className="font-bold text-[40px] w-full">
					Hey there,&nbsp;
					<span className={`${moonDance.className} text-[60px]`}>
						I&apos;m aditya!
					</span>
				</p>
				<p className="font-medium">
					Welcome to my tiny corner of the internet, where I&apos;m probably
					tinkering with code and turning ideas into reality. This is where the
					magic happens, fueled by curiosity and endless cups of coffee.
				</p>
			</div>

			<div className="flex justify-center">
				<Image
					src={logo}
					height="650"
					width="650"
					quality={100}
					alt="The Wild Oasis logo"
					className="slide-in-right"
				/>
			</div>
		</div>
	);
};

export default page;
