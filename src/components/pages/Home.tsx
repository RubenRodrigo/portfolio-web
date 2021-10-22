import ProfileImg from '../../assets/profile-image.jpg'
import useWindowDimensions from '../../hooks/useWindowDimension';

export const Home = () => {

	const { width } = useWindowDimensions();


	return (
		<div className="relative pt-24 md:pt-28 lg:pt-32 h-full flex">
			<div className="w-full flex flex-col xl:flex-row xl:px-28 md:px-10 px-5 max-w-screen-2xl mx-auto gap-10 self-center h-full">
				<div className="flex-1 xl:self-center flex">
					<div className="self-center">
						<div className="pb-6">
							<span className="font-bold text-gray-200 md:text-2xl lg:text-4xl">Hola, soy</span>
							<h3 className="lg:text-8xl md:text-6xl text-5xl text-yellow-400 font-bold pb-4 uppercase">Ruben Rodrigo</h3>
							<br />
							<br />
							<span className="text-gray-200 md:text-xl">Profesional en la carrera de <span className="font-bold">Diseño y Desarrollo de Software</span></span>
						</div>
						<div className="flex">
							<button className="border-2 px-6 py-2 border-yellow-600 text-yellow-200 hover:bg-yellow-600 hover:text-black">
								Contactame !
							</button>
						</div>
					</div>
				</div>
				<div className="flex-initial self-center">
					<img
						className="rounded-full object-cover shadow-2xl"
						src={ProfileImg}
						alt="code"
						style={{ width: `${width && width >= 1280 ? "500px" : width && width >= 768 ? "400px" : width && width >= 640 ? "350px" : "250px"}` }}
					/>
				</div>
			</div>
		</div>
	)
}
