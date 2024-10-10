'use client';

import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Playlist from '@/data/playlist';
import './carousel.css';
import Image from 'next/image';

const Carousel = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
		AutoScroll({ playOnInit: true, startDelay: 0 })
	]);
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		const autoScroll = emblaApi?.plugins()?.autoScroll;
		if (!autoScroll) return;

		setIsPlaying(autoScroll.isPlaying());
		emblaApi
			.on('autoScroll:play', () => setIsPlaying(true))
			.on('autoScroll:stop', () => setIsPlaying(false))
			.on('reInit', () => setIsPlaying(autoScroll.isPlaying()));
	}, [emblaApi]);

	return (
		<div className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{Playlist.map((item, idx) => (
						<div className="embla__slide" key={idx}>
							<a className="w-fit h-fit" href={item.url} target="blank">
								<Image className="rounded-md" src={item.img} alt={item.title} width={300} height={300} />
								<h5 className="text-center mt-1">{item.title}</h5>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
