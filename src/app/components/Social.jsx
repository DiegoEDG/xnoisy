import SocialData from '@/data/social';

const Social = () => {
	return (
		<div className="flex flex-row gap-2 w-full h-fit justify-center">
			{SocialData.map((social) => (
				<a key={social.title} className=" overflow-hidden" href={social.url} target="blank">
					<div className=" border border-[1px] rounded-full p-2">{social.icon}</div>
				</a>
			))}
		</div>
	);
};

export default Social;
