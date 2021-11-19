import { AiOutlineCloudServer, AiOutlineDesktop } from "react-icons/ai"
import { IoLogoJavascript, IoLogoPython } from "react-icons/io"
import { DiCss3, DiDjango, DiJava, DiNodejsSmall, DiReact } from "react-icons/di"
import { SiNextdotjs, SiRedux, SiSpring } from "react-icons/si"

export const Profile = () => {

	return (
		<div className="relative w-full h-full overflow-y-auto">
			<div className="absolute top-2/4 xl:flex hidden z-10">
				<div className="self-center">
					<h3
						className="font-bold relative text-8xl text-gray-title opacity-40 lg:left-1/4 top-2/4"
						style={{ transform: "translate(-60%,-50%) rotate(-90deg)" }}
					>
						¿Quién soy?
					</h3>
				</div>
			</div>
			<div className="relative min-h-full bg-background z-0 flex flex-col">
				<div
					className="flex-1 flex max-w-screen-xl mx-auto w-full pt-24 md:pt-28 lg:pt-32 "
				>
					<div className="px-10 w-full self-center">
						<div>

							<h3 className="text-3xl md:text-6xl pt-10 pb-20"><span className="font-semibold text-yellow-400">Mis</span> habilidades</h3>
							<div className="grid grid-cols-1 gap-10 w-full">
								<div className="col-span-1 text-center">
									<div className="text-center w-full flex justify-center">
										<AiOutlineDesktop className="text-8xl text-yellow-400" />
									</div>
									<br />
									<h3 className="text-2xl font-semibold uppercase">Desarrollo Frontend</h3>
									<br />
									<p>Principales tecnologias que conozco/domino</p>
									<div className="flex text-5xl gap-5 w-full justify-around">
										<IoLogoJavascript />
										<DiCss3 />
										<DiReact />
										<SiNextdotjs />
										<SiRedux />
									</div>
								</div>
								<div className="col-span-1 text-center">
									<div className="text-center w-full flex justify-center">
										<AiOutlineCloudServer className="text-8xl text-yellow-400" />
									</div>
									<br />
									<h3 className="text-2xl font-semibold uppercase">Desarrollo Backend</h3>
									<br />
									<p>Principales tecnologias que conozco/domino</p>
									<div className="flex text-5xl gap-5 w-full justify-around">
										<IoLogoPython />
										<DiDjango />
										<DiNodejsSmall />
										<DiJava />
										<SiSpring />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}
