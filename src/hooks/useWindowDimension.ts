import { useState, useEffect } from 'react';

interface Dimensions {
	width: number | undefined
	height: number | undefined
}

const useWindowDimensions = () => {

	const [windowDimensions, setWindowDimensions] = useState<Dimensions>({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		function handleResize() {
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return windowDimensions;
};

export default useWindowDimensions;