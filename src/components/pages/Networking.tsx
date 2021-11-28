import React, { useState } from 'react'
import { BiRightArrow } from 'react-icons/bi'

export const Networking = () => {

	const [jobs, setJobs] = useState('nativa')

	return (
		<div
			className="w-full min-h-screen relative"
		>
			<div className="max-w-screen-md mx-auto md:py-32 py-24 md:px-0 px-10">
				<h3 className="text-center text-gray-200 md:text-5xl text-3xl font-mono py-10">Networking</h3>
				<div className="flex py-20 md:flex-row flex-col gap-10">
					<div className="flex-1 md:flex-initial text-gray-300 flex flex-col">
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
							<div className="">
								<h3 className="text-xl uppercase hover:text-yellow-300 tracking-wider pb-2">
									Nativa
								</h3>
								<p className="font-mono text-gray-400 py-2">Es una empresa de venta de ropa de alpaca. Actualmente se mantiene buenas relaciones con el dueño de la empresa, el señor Roberto Lopez. En esta empresa se realizo las pasantias del periodo 2021.</p>
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
							<div className="">
								<h3 className="text-xl uppercase hover:text-yellow-300 tracking-wider pb-2">
									<a href="https://www.facebook.com/Eisenmann-contratistas-generales-EIRL-401193107122498" target="_blank" rel="noreferrer">
										Eisenmann Contratistas Generales
									</a>
								</h3>
								<p className="font-mono text-gray-400 py-2">Es una empresa del rubro de la Metal-Mecanica. Actualmente se tiene buenas relaciones con el dueño de la empresa. En esta empresa se realizo el siguiente trabajo:</p>
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
					</div>
				</div>
			</div>
		</div>
	)
}
