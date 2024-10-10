import Image from 'next/image';
import Social from './components/Social';
import Carousel from './components/Carousel';

export default function Home() {
	return (
		<>
			<div className="absolute -z-50 overflow-hidden w-screen h-screen">
				<div className="blue-gradient"></div>
				<div className="orange-gradient"></div>
				<div className="pink-gradient"></div>
			</div>
			<div className="flex flex-col w-screen h-screen items-center justify-start gap-10 p-[50px] text-[#E9E9E9] md:w-[1000px] overflow-hidden ">
				<div className="flex flex-col items-center justify-center gap-5 mt-[10%]">
					<Image src={'/assets/logo.png'} alt="Noisy Logo" width={80} height={80} />
					<h1 className="text-4xl font-bold">xNoisy</h1>
					<Social />
				</div>
				<div className="flex flex-col w-full gap-4 items-center">
					<h2 className="text-2xl font-bold">Playlist</h2>
					<Carousel />
				</div>
			</div>
		</>
	);
}
