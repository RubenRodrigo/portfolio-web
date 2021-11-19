import { NavItem } from '../interfaces/NavItem'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, {
	Mousewheel, Pagination
} from 'swiper';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Projects } from './pages/Projects';
import { News } from './pages/News';
import { Networking } from './pages/Networking';
import { useEffect, useState } from 'react';

interface Props {
	navItem: NavItem
}

// install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);
export const Container = ({ navItem }: Props) => {

	const pagination = {
		"clickable": true,
		"renderBullet": function (index: number, className: String) {

			return '<span class="' + className + '"></span>';

		}
	}
	const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

	const swiperScroll = function () {
		var acs = document.querySelectorAll<any>('.swiper-slide-active')[0];
		var child = acs.firstChild;
		console.log(child);
		console.log("child", child.scrollHeight);
		console.log("acs", acs.clientHeight);

		var hasVerticalScrollbar = child.scrollHeight > acs.clientHeight;
		console.log(hasVerticalScrollbar);

		if (hasVerticalScrollbar) {
			var scrollHeight = child.scrollHeight;
			var slideSize = acs.swiperSlideSize;
			var scrollDifferenceTop = scrollHeight - slideSize;

			acs.addEventListener('wheel', (event: any) => {
				var scrollDifference = scrollHeight - slideSize - child.scrollTop;

				// Scroll wheel browser compatibility
				var delta = event.wheelDelta || -1 * event.deltaY;

				// Enable scrolling if at edges
				var spos = delta < 0 ? 0 : scrollDifferenceTop;

				if (!(scrollDifference === spos)) {
					swiperInstance?.mousewheel.disable()
				}
				else {
					swiperInstance?.mousewheel.enable()
				}
			});

		}
	};

	const slideTo = (index: number) => {
		swiperInstance && swiperInstance.slideTo(index + 1, 1000);
	};

	useEffect(() => {
		if (swiperInstance) {
			slideTo(navItem.id);
		}
	}, [navItem])

	return (
		<div className="relative h-screen w-full text-white bg-main-background" >
			<Swiper
				onSwiper={(s) => setSwiperInstance(s)}
				direction={'vertical'}
				slidesPerView={1}
				mousewheel={true}
				loop={true}
				pagination={pagination}
				onSlideChangeTransitionEnd={swiperScroll}
				allowTouchMove={false}
				speed={500}
				className="h-screen">
				<SwiperSlide virtualIndex={0}>
					<Home />
				</SwiperSlide>
				<SwiperSlide virtualIndex={1}>
					<Profile />
				</SwiperSlide>
				<SwiperSlide virtualIndex={2}>
					<Projects />
				</SwiperSlide>
				<SwiperSlide virtualIndex={3}>
					<News />
				</SwiperSlide>
				<SwiperSlide virtualIndex={4}>
					<Networking />
				</SwiperSlide>
			</Swiper>
		</div >
	)
}
