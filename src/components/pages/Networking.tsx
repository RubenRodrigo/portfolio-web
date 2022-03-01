import { useState } from 'react'
import { BiRightArrow } from 'react-icons/bi'

export const Networking = () => {

	const [jobs, setJobs] = useState('farmacia')

	return (
		<div
			className="w-full min-h-screen relative"
		>
			<div className="max-w-screen-md mx-auto md:pt-48 pt-24 md:px-0 px-10">
				<h3 className="text-center text-yellow-400 md:text-5xl text-3xl font-mono py-10">Experiencia</h3>
				<div className="flex py-20 md:flex-row flex-col gap-10">
					<div className="flex-1 md:flex-initial text-gray-300 flex flex-col">
						<button
							onClick={() => setJobs('farmacia')}
							className={`text-left px-3 py-5 cursor-pointer border-l-2 font-mono font-semibold text-sm hover:bg-gray-500 hover:bg-opacity-30 ${jobs === 'farmacia' && 'bg-gray-500 bg-opacity-30 border-yellow-500 text-yellow-300'}`}
						>Farmacia Topico</button>
						<button
							onClick={() => setJobs('nativa')}
							className={`text-left px-3 py-5 cursor-pointer border-l-2 font-mono font-semibold text-sm hover:bg-gray-500 hover:bg-opacity-30 ${jobs === 'nativa' && 'bg-gray-500 bg-opacity-30 border-yellow-500 text-yellow-300'}`}
						>Nativa E.I.R.L.</button>
						<button
							onClick={() => setJobs('eisenmann')}
							className={`text-left px-3 py-5 cursor-pointer border-l-2 font-mono font-semibold text-sm hover:bg-gray-500 hover:bg-opacity-30 ${jobs === 'eisenmann' && 'bg-gray-500 bg-opacity-30 border-yellow-500 text-yellow-300'}`}
						>EISENMANN E.I.R.L.</button>

					</div>
					<div className="flex-1 p-2 text-gray-300">
						{
							jobs === 'nativa' &&
							<div className="animate__animated animate__fadeIn">
								<h3 className="text-xl uppercase hover:text-yellow-300 tracking-wider pb-2">
									Nativa
								</h3>
								<p className="font-mono text-gray-400 py-2">Es una empresa de venta de ropa de alpaca. Actualmente se mantiene buenas relaciones con el dueño de la empresa, el señor <b>Roberto Lopez</b>. En esta empresa se realizo las pasantias del periodo 2021.</p>
								<ul>
									<li>
										<div className="flex gap-5 py-2">
											<BiRightArrow className="self-center text-yellow-300" />
											<p>Se realizo la creación de un Ecommerce.</p>
										</div>
									</li>
									<li>
										<div className="flex gap-5 py-2">
											<BiRightArrow className="self-center text-yellow-300" />
											<p>Se apoyo en el desarrollo de la marca Monasterio via Facebook.</p>
										</div>
									</li>
								</ul>
							</div>
						}
						{
							jobs === 'eisenmann' &&
							<div className="animate__animated animate__fadeIn">
								<h3 className="text-xl uppercase hover:text-yellow-300 tracking-wider pb-2">
									<a href="https://www.facebook.com/Eisenmann-contratistas-generales-EIRL-401193107122498" target="_blank" rel="noreferrer">
										Eisenmann Contratistas Generales
									</a>
								</h3>
								<p className="font-mono text-gray-400 py-2">Es una empresa del rubro de la Metal-Mecanica. Actualmente se tiene buenas relaciones con el dueño de la empresa, el señor <b>Juan Christian</b>. En esta empresa se realizo el siguiente trabajo:</p>
								<ul>
									<li>
										<div className="flex gap-5 py-2">
											<BiRightArrow className="self-center text-yellow-300" />
											<p>Se desarrollo e implemento un sistema de inventarios para el almacen de suministros.</p>
										</div>
									</li>
								</ul>
							</div>
						}
						{
							jobs === 'farmacia' &&
							<div className="animate__animated animate__fadeIn">
								<h3 className="text-xl uppercase hover:text-yellow-300 tracking-wider pb-2">
									<a href="https://www.facebook.com/Eisenmann-contratistas-generales-EIRL-401193107122498" target="_blank" rel="noreferrer">
										Sistema de Tópico
									</a>
								</h3>
								<p className="font-mono text-gray-400 py-2">Se desarrollo un sistema para un tópico que permitiera dar un seguimiento al inventario del tópico en diferentes sedes, así como guardar el registro de los trabajadores atendidos en dicho establecimiento.</p>
								<ul>
									<li>
										<div className="flex gap-5 py-2">
											<BiRightArrow className="self-center text-yellow-300" />
											<p>Invenatario de productos (medicamentos).</p>
										</div>
									</li>
									<li>
										<div className="flex gap-5 py-2">
											<BiRightArrow className="self-center text-yellow-300" />
											<p>Registro de pacientes atendidos y los medicamentos usados.</p>
										</div>
									</li>
									<li>
										<div className="flex gap-5 py-2">
											<BiRightArrow className="self-center text-yellow-300" />
											<p>Creación de reportes en Excel y PDF.</p>
										</div>
									</li>
								</ul>
							</div>
						}
					</div>
				</div>
			</div>
		</div>
	)
}
