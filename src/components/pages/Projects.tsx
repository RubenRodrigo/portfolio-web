import { SubTitle } from "../SubTitle"
import { BiLinkExternal } from "react-icons/bi"
import { FiGithub } from "react-icons/fi"

import WawImg from "../../assets/waw_img.png"
import MonasterioImg from "../../assets/monasterio_img.png"
import GreenpureImg from "../../assets/greenpure_img.png"

export const Projects = () => {
	return (
		<div
			className="w-full min-h-screen relative"
		>
			<div className="max-w-screen-lg mx-auto pt-32 md:px-20 lg:px-1 px-4">
				<div className="px-20 pb-16">
					<SubTitle value="Proyectos que he trabajado" />
				</div>
				<div className="grid grid-cols-5 relative pb-10 md:pb-32">
					<div className="col-span-5 md:col-span-3">
						<a target="_blank" rel="noreferrer" href="https://waw-frontend.vercel.app/" >
							<div className="link-image relative">
								<img src={WawImg} alt="Waw" className="relative rounded-lg" />
							</div>
						</a>
					</div>
					<div className="col-span-5 text-right md:col-span-2">
						<h4 className="text-yellow-500">Proyecto de Ecommerce</h4>
						<h2 className="text-3xl text-gray-300">Waw</h2>
						<div className="mt-5 md:absolute md:right-0  text-gray-300 font-mono z-10">
							<div className="rounded-md bg-background-light shadow-xl p-4 w-full">
								<p>
									Una pagina de Ecommerce para vender ropa <br /> de alpaca de alta calidad.<br />
								</p>
							</div>
							<div className="flex justify-end gap-5 pt-8 text-gray-400 text-sm">
								<span>Django</span>
								<span>NextJS - React</span>
								<span>Tailwind CSS</span>
							</div>
							<div className="pt-4 flex justify-end gap-5">
								<a target="_blank" rel="noreferrer" href="https://waw-frontend.vercel.app/">
									<BiLinkExternal className="text-2xl hover:text-yellow-500" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-5 relative pb-10 md:pb-32">
					<div className="col-span-5 md:col-span-2 text-left">
						<h4 className="text-yellow-500">Proyecto Dashboard</h4>
						<h2 className="text-3xl text-gray-300">GreenPure</h2>
						<div className="mt-5 md:absolute md:left-0 text-gray-300 font-mono z-10">
							<div className="rounded-md bg-background-light shadow-xl p-4 w-full">
								<p>
									Una aplicacion web que tiene como objetivo<br /> mostrarle al usuario la calidad del<br />  aire en el que se encuentra su dispositivo. <br />
									La aplicación mide los datos del usuario y los <br /> muestra en un dashboard con <br />graficas.
								</p>
							</div>
							<div className="flex justify-start gap-5 pt-8 text-gray-400 text-sm">
								<span>Python</span>
								<span>Django</span>
								<span>PostgreSQL</span>
								<span>NextJS - React</span>
								<span>AWS</span>
							</div>
							<div className="pt-4 flex justify-start gap-5">
								<a target="_blank" rel="noreferrer" href="https://green-pure-frontend.vercel.app/dashboard">
									<BiLinkExternal className="text-2xl hover:text-yellow-500" />
								</a>
								<a target="_blank" rel="noreferrer" href="https://github.com/RubenRodrigo/GreenPureFrontend">
									<FiGithub className="text-2xl hover:text-yellow-500" />
								</a>
							</div>
						</div>
					</div>
					<div className="col-span-5 md:col-span-3">
						<a target="_blank" rel="noreferrer" href="https://green-pure-frontend.vercel.app/dashboard" >
							<div className="link-image relative">
								<img src={GreenpureImg} alt="Monasterio" className="relative rounded-lg" />
							</div>
						</a>
					</div>
				</div>
				<div className="grid grid-cols-5 relative pb-10 md:pb-32">
					<div className="col-span-5 md:col-span-3">
						<a target="_blank" rel="noreferrer" href="https://monasterio.pe/" >
							<div className="link-image relative">
								<img src={MonasterioImg} alt="Monasterio" className="relative rounded-lg" />
							</div>
						</a>
					</div>
					<div className="col-span-5 text-right md:col-span-2">
						<h4 className="text-yellow-500">Proyecto de Ecommerce</h4>
						<h2 className="text-3xl text-gray-300">Monasterio</h2>
						<div className="mt-5 md:absolute md:right-0  text-gray-300 font-mono z-10">
							<div className="rounded-md bg-background-light shadow-xl p-4 w-full">
								<p>
									Una pagina de Ecommerce para vender productos <br /> de alpaca de alta calidad.<br /> Propidad de la empresa Nativa EIRL.
								</p>
							</div>
							<div className="flex justify-end gap-5 pt-8 text-gray-400 text-sm">
								<span>Python</span>
								<span>Django</span>
								<span>PostgreSQL</span>
								<span>CPanel</span>
							</div>
							<div className="pt-4 flex justify-end gap-5">
								<a target="_blank" rel="noreferrer" href="https://monasterio.pe/">
									<BiLinkExternal className="text-2xl hover:text-yellow-500" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
