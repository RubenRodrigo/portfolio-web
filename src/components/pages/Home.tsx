import { BsPlayCircle } from "react-icons/bs"

export const Home = () => {

	return (
		<div
			className="w-full min-h-screen relative"
		>
			<div className="bg-home absolute w-full h-full">
			</div>
			<div className="flex h-full absolute top-0 bottom-0 left-0 right-0 w-full z-10">
				<div className="w-full flex flex-col md:flex-row max-w-screen-xl mx-auto self-center md:px-28 sm:px-8 px-4">
					<div className="flex-1 xl:self-center flex">
						<div className="self-center">
							<div className="sm:pb-2 pb-6">
								<div className="sm:pb-2 pb-6">
									<span className="font-bold text-gray-200 text-2xl lg:text-4xl">Hola, soy</span>
									<h3 className="lg:text-8xl md:text-6xl text-5xl text-yellow-400 font-bold uppercase">Ruben Rodrigo.</h3>
								</div>
								<span className="text-gray-200 text-xl md:text-2xl">Profesional en la carrera de <span className="font-bold">Diseño y Desarrollo de Software</span></span>
								<p className="text-sm text-gray-400 py-2">
									Soy un programador especializado al desarrollo backend y frontend.
								</p>
							</div>
							<div className="flex">
								<button className="px-10 py-2 rounded-sm border-2 border-yellow-600 text-yellow-200 hover:bg-yellow-600 hover:bg-opacity-30 hover:text-yellow-300 font-mono text-lg">
									Contactame !
								</button>
								<div className="flex-1 ml-10 h-px bg-white self-center">
								</div>
								<div className="flex-initial self-center">
									<a
										target="_blank"
										rel="noreferrer"
										href="https://drive.google.com/file/d/1u4zjRjafd1OkWLIJsbWU3rPrAzviXo-G/view?usp=sharing" className="text-white"
									>
										<BsPlayCircle className="w-12 h-12" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
