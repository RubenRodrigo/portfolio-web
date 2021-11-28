import React from 'react'
import { BsNewspaper } from "react-icons/bs"
import { BiLinkExternal } from "react-icons/bi"

export const News = () => {
	return (
		<div
			className="w-full min-h-screen relative"
		>
			<div className="max-w-screen-lg mx-auto md:py-32 py-24 px-4">
				<h3 className="text-center text-gray-200 md:text-5xl text-3xl font-mono py-10">Noticias y Actualidad en TECH</h3>
				<div className="grid grid-cols-2 gap-5">
					<div className="col-span-2 md:col-span-1 p-5 rounded-md bg-background-light transform hover:-translate-y-1 transition">
						<div className="flex justify-between text-2xl">
							<span className="hover:text-yellow-400 transform hover:-translate-y-1 p-2 transition text-gray-300">
								<BsNewspaper />
							</span>
							<a target="_blank" rel="noreferrer" href="https://copilot.github.com/" className="hover:text-yellow-400 transform hover:-translate-y-1 p-2 transition text-gray-300">
								<BiLinkExternal />
							</a>
						</div>
						<div className="p-2 text-gray-300">
							<h3 className=" text-2xl">
								GitHub Copilot y el futuro de la programación
							</h3>
							<div className="pt-2">
								<p className="text-sm font-mono text-gray-400">
									Con la aparición de GitHub Copilot muchos programadores han prendido las alarmas debido a lo que puede representar a futuro.
									<br />
									<br />
									Esta herramienta de Microsoft es una inteligencia artificial que usa los repositorios de GitHub y la IA de OpenAI para asistir a los programadores al escribir código. Se encarga de "escribir por ti" el código más repetitivo.
								</p>
								<div className="flex gap-5 pt-4">
									<span>GitHub</span>
									<span>OpenAI</span>
									<span>Microsoft</span>
									<span>IA</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-2 md:col-span-1 p-5 rounded-md bg-background-light transform hover:-translate-y-1 transition">
						<div className="flex justify-between text-2xl">
							<span className="hover:text-yellow-400 transform hover:-translate-y-1 p-2 transition text-gray-300">
								<BsNewspaper />
							</span>
							<a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=VJ2mIFLxVTk&t=348s" className="hover:text-yellow-400 transform hover:-translate-y-1 p-2 transition text-gray-300">
								<BiLinkExternal />
							</a>
						</div>
						<div className="p-2 text-gray-300">
							<h3 className=" text-2xl">
								GPT3, la más poderosa IA
							</h3>
							<div className="pt-2">
								<p className="text-sm font-mono text-gray-400">
									GTP3 es la tecera versión de GPT, una IA creada por OpenIA que se especializa en producir texto como un humano
									<br />
									<br />
									Esta Inteligencia Artificial es la más poderosa que existe actualmente, contando con 175 mil millones de parametros de machine learning. Esta IA hace uso de complejos modelos de Deep Learning.
									<br />
									Fue entrenada con todo el repositorio público de la humanidad en Internet, por lo que su capacidad para producir texto que se puede camuflar fácilmente con una persona es increiblemente alta.
								</p>
								<div className="flex gap-5 pt-4">
									<span>GPT3</span>
									<span>OpenAI</span>
									<span>Internet</span>
									<span>IA</span>
									<span>Fin del Mundo</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
