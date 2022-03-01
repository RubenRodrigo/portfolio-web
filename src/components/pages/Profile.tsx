// import { AiOutlineCloudServer, AiOutlineDesktop } from "react-icons/ai"
// import { IoLogoJavascript, IoLogoPython } from "react-icons/io"
// import { DiCss3, DiDjango, DiJava, DiNodejsSmall, DiReact } from "react-icons/di"
// import { SiNextdotjs, SiRedux, SiSpring } from "react-icons/si"
import { BiRightArrow } from "react-icons/bi"
import ProfileImage from '../../assets/profile_img.jpg'
import { SubTitle } from "../SubTitle"

export const Profile = () => {

	return (
		<div
			className="w-full min-h-screen relative"
		>
			<div className="max-w-screen-lg mx-auto pt-32 px-4 ">
				<div className="grid grid-cols-5 gap-8">
					<div className="md:col-span-3 col-span-5">
						<SubTitle value="Sobre Mi" />
						<br />
						<br />
						<br />
						<div className="text-gray-300">
							<p className="py-5 font-mono">
								Hola!, mi nombre es Ruben Rodrigo y vivo en Arequipa, Perú. Me encanta crear software que pueda ser útil para automatizar tareas.
							</p>
							<p className="font-mono">
								Empece a aprender sobre el Desarrollo de Software en el 2019 cuando inicie mi carrera en Diseño y Desarrollo de Software en Tecsup. Desde ahí me he enamorado de la programación y la informatica, por lo que siempre estoy aprendiendo nuevos temás de interes.
							</p>
							<p className="py-5 font-mono">
								Actualmente acabo de terminar mi carrera, por lo que me encuentro muy emocionado para poder buscar un trabajo donde aplicar mis habilidades.
							</p>
							<p>Aquí estan las tecnologías con las que he ido trabajando últimamente:</p>
							<div className="flex gap-20 pb-5">
								<ul className="pl-5 pt-5 text-sm">
									<li className="tracking-wider text-gray-400 flex gap-3 py-1">
										<BiRightArrow className="self-center" />
										<h3>
											Typescript
										</h3>
									</li>

								</ul>
								<ul className="pl-5 pt-5 text-sm">
									<li className="tracking-wider text-gray-400 flex gap-3 py-1">
										<BiRightArrow className="self-center" />
										<h3>
											Docker
										</h3>
									</li>
								</ul>
							</div>
							<p>Puedes revisar mi <a href="https://www.linkedin.com/in/ruben-cha%C3%B1i-3743641b4/" target="_blank" rel="noreferrer">
								<b>
									Linkedin aquí.
								</b>
							</a>
							</p>
						</div>
					</div>
					<div className="md:col-span-2 col-span-5 p-2 md:px-0 place-self-center relative">
						<div className="img-profile relative">
							<img src={ProfileImage} alt="" className="rounded-lg relative z-10" />
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}
