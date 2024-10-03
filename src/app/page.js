import Image from 'next/image';
import Playlist from '@/data/playlist';
import Social from '@/data/social';

export default function Home() {
	return (
		<div className="flex flex-col w-screen h-screen items-center justify-start gap-10 p-[50px] bg-[#1E293B] text-[#E9E9E9]">
			<div className="flex flex-col items-center justify-center gap-5 mt-20">
				<Image
					className="rounded-full border border-white"
					src={'/assets/logo.jpg'}
					alt="Noisy Logo"
					width={100}
					height={100}
				/>
				<h1 className="text-4xl font-bold">xNoisy</h1>
				<div className="flex flex-row gap-2 w-full h-fit justify-center">
					{Social.map((link) => (
						<a key={link.title} className=" overflow-hidden" href={link.url} target="blank">
							<div className="size-[20px]">{link.icon}</div>
						</a>
					))}
				</div>
			</div>
			<div className="flex flex-col w-full gap-4 items-center">
				<h2 className="text-2xl">Playlist ⇣</h2>
				{Playlist.map((link) => (
					<a
						key={link.title}
						className="font-semibold flex border border-2 border-white rounded-lg w-full h-[50px] items-center justify-center bg-[#ffffff14]"
						href={link.url}
						target="blank"
					>
						{' '}
						{link.title}
					</a>
				))}
			</div>
		</div>
	);
}
