import React, { useState } from 'react'
import { FaAws, FaCss3, FaDocker, FaJava, FaLinux, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { DiGit, DiPostgresql } from 'react-icons/di'
import { SiDjango, SiExpress, SiJavascript, SiMongodb, SiNextdotjs, SiRedux, SiSpringboot, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { SubTitle } from '../SubTitle'

interface Props {
	title: string,
	description?: string,
	children: JSX.Element | JSX.Element[]
}

const AreaContainer = ({ title, description, children }: Props) => {
	return (
		<div className="w-full animate__animated animate__fadeIn">
			<h3 className="text-2xl uppercase hover:text-yellow-300 tracking-wider pb-2">
				{title}
			</h3>
			<p className="py-4 font-mono text-gray-400">{description}</p>
			<div className="py-4">
				{children}
			</div>
		</div>
	)
}

export const Skills = () => {

	const [area, setArea] = useState('backend')

	return (
		<div
			className="w-full min-h-screen relative"
		>
			<div className="max-w-screen-lg mx-auto pt-32 px-4 ">
				<div className="w-full">
					<SubTitle value="Habilidades" />
					<div className="text-gray-300">
						<div className="flex py-20 md:flex-row flex-col gap-10 w-full">
							<div className="flex-1 md:flex-initial md:w-60 text-gray-300 flex flex-col">
								<button
									onClick={() => setArea('backend')}
									className={`text-left px-3 py-5 cursor-pointer border-l-2 font-mono font-semibold text-lg hover:bg-gray-500 hover:bg-opacity-30 ${area === 'backend' && 'bg-gray-500 bg-opacity-30 border-yellow-500 text-yellow-300'}`}
								>Backend</button>
								<button
									onClick={() => setArea('frontend')}
									className={`text-left px-3 py-5 cursor-pointer border-l-2 font-mono font-semibold text-lg hover:bg-gray-500 hover:bg-opacity-30 ${area === 'frontend' && 'bg-gray-500 bg-opacity-30 border-yellow-500 text-yellow-300'}`}
								>Frontend</button>
								<button
									onClick={() => setArea('otros')}
									className={`text-left px-3 py-5 cursor-pointer border-l-2 font-mono font-semibold text-lg hover:bg-gray-500 hover:bg-opacity-30 ${area === 'otros' && 'bg-gray-500 bg-opacity-30 border-yellow-500 text-yellow-300'}`}
								>Otros</button>
							</div>
							<div className="flex-1 p-2 text-gray-300">
								{
									area === 'backend' &&
									<AreaContainer title="Backend" description="Lenguajes de programación y frameworks con los que más tengo experiencia: ">
										<div className="flex md:gap-8 gap-4">
											<div className="px-4 border-r-4 self-center">
												<FaPython className="w-16 h-16" />
												<p className="font-mono text-center text-sm text-gray-400 pt-4">Python</p>
											</div>
											<div className="self-center flex md:gap-10 justify-around w-full">
												<div className="flex-initial">
													<SiDjango className="w-16 h-16" />
													<p className="font-mono text-center text-sm text-gray-400  pt-4">Django</p>
												</div>
												<div className="flex-initial">
													<svg fill="none" height="4rem" width="4rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154 154"><circle cx="77" cy="77" fill="#a0a0a0" r="77" /><path d="M81.375 18.667l-38.75 70H77.5l-3.875 46.666 38.75-70H77.5z" fill="#fff" /></svg>
													<p className="font-mono text-center text-sm text-gray-400 pt-4">Fast API</p>
												</div>
											</div>
										</div>
										<br />
										<p className="py-4 font-mono text-gray-400">Tengo un conocimiento básico en: </p>
										<div className="flex md:flex-row flex-col gap-5 justify-between">
											<div className="flex gap-8 px-4 md:justify-between justify-center">
												<div className="self-center">
													<FaNodeJs className="w-10 h-10 md:w-12 md:h-12" />
													<p className="font-mono text-center text-sm text-gray-400 pt-4">NodeJS</p>
												</div>
												<div className="self-center flex gap-10">
													<div className="flex-initial">
														<SiExpress className="w-10 h-10 md:w-12 md:h-12" />
														<p className="font-mono text-center text-sm text-gray-400 pt-4">Express</p>
													</div>
												</div>
											</div>
											<div className="flex gap-8 md:justify-around justify-center">
												<div className="self-center">
													<FaJava className="w-10 h-10 md:w-12 md:h-12" />
													<p className="font-mono text-center text-sm text-gray-400 pt-4">Java</p>
												</div>
												<div className="self-center flex gap-10">
													<div className="flex-initial">
														<SiSpringboot className="w-10 h-10 md:w-12 md:h-12" />
														<p className="font-mono text-center text-sm text-gray-400 pt-4">SpringBoot</p>
													</div>
												</div>
											</div>
											{/* <div className="flex gap-8 px-4">
												<div className="self-center">
													<SiCsharp className="w-16 h-16" />
													<p className="font-mono text-center text-sm text-gray-400 pt-4">C#</p>
												</div>
												<div className="self-center flex gap-10">
													<div className="flex-initial">
														<SiExpress className="w-16 h-16" />
														<p className="font-mono text-center text-sm text-gray-400 pt-4">.NetCore</p>
													</div>
												</div>
											</div> */}
										</div>
									</AreaContainer>
								}
								{
									area === 'frontend' &&
									<AreaContainer title="Frontend" description="Me desempeño principalmente en las siguientes tecnologías">
										<div className="flex gap-8">
											<div className="px-4 border-r-4 flex">
												<div className="self-center">
													<div className="flex justify-center">
														<SiJavascript className="md:w-16 md:h-16 w-10 h-10" />
													</div>
													<p className="font-mono text-center text-sm text-gray-400 pt-4">JavaScript</p>
												</div>
											</div>
											<div className="self-center w-full flex flex-col gap-8">
												<div className="flex gap-10 justify-around">
													<div className="flex-initial">
														<FaReact className="md:w-16 md:h-16 w-10 h-10" />
														<p className="font-mono text-center text-sm text-gray-400  pt-4">React</p>
													</div>
													<div className="flex-initial">
														<SiRedux className="md:w-16 md:h-16 w-10 h-10" />
														<p className="font-mono text-center text-sm text-gray-400  pt-4">Redux</p>
													</div>
												</div>
												<div className="flex gap-10 justify-around">
													<div className="flex-initial">
														<SiNextdotjs className="md:w-16 md:h-16 w-10 h-10" />
														<p className="font-mono text-center text-sm text-gray-400 pt-4">NextJS</p>
													</div>
													<div className="flex-initial">
														<div className="flex justify-center">
															<SiTypescript className="md:w-16 md:h-16 w-10 h-10" />
														</div>
														<p className="font-mono text-center text-sm text-gray-400 pt-4">TypeScript</p>
													</div>
												</div>
											</div>
										</div>
										<br />
										<br />
										<div className="flex gap-8">
											<div className="self-center w-full flex flex-col gap-8">
												<div className="flex gap-10 justify-around">
													<div className="flex-initial">
														<FaCss3 className="md:w-16 md:h-16 w-10 h-10" />
														<p className="font-mono text-center text-sm text-gray-400 pt-4">CSS</p>
													</div>
												</div>
											</div>
											<div className="self-center w-full flex flex-col gap-8">
												<div className="flex gap-10 justify-around">
													<div className="flex-initial">
														<div className="flex justify-center">
															<SiTailwindcss className="md:w-16 md:h-16 w-10 h-10" />
														</div>
														<p className="font-mono text-center text-sm text-gray-400  pt-4">Tailwindcss</p>
													</div>
												</div>
											</div>
										</div>
									</AreaContainer>
								}
								{
									area === 'otros' &&

									<AreaContainer title="Otros" description="Tengo un buen manejo de las siguientes tecnologías">
										<div className="flex flex-col gap-8">
											<div className="self-center flex gap-10 justify-around w-full">
												<div className="flex-initial">
													<div className="flex justify-center">
														<SiMongodb className="md:w-16 md:h-16 w-10 h-10" />
													</div>
													<p className="font-mono text-center text-sm text-gray-400  pt-4">MongoDB</p>
												</div>
												<div className="flex-initial">
													<div className="flex justify-center">
														<DiPostgresql className="md:w-16 md:h-16 w-10 h-10" />
													</div>
													<p className="font-mono text-center text-sm text-gray-400  pt-4">Postgresql</p>
												</div>
												<div className="flex-initial">
													<div className="flex justify-center">
														<FaDocker className="md:w-16 md:h-16 w-10 h-10" />
													</div>
													<p className="font-mono text-center text-sm text-gray-400  pt-4">Docker</p>
												</div>
											</div>
											<div className="self-center flex gap-10 justify-around w-full">
												<div className="flex-initial">
													<div className="flex justify-center">
														<DiGit className="md:w-16 md:h-16 w-10 h-10" />
													</div>
													<p className="font-mono text-center text-sm text-gray-400  pt-4">Git</p>
												</div>
												<div className="flex-initial">
													<div className="flex justify-center">
														<FaLinux className="md:w-16 md:h-16 w-10 h-10" />
													</div>
													<p className="font-mono text-center text-sm text-gray-400  pt-4">Linux</p>
												</div>
											</div>
											<div className="self-center w-full">
												<div className="flex justify-center ">
													<FaAws className="md:w-16 md:h-16 w-10 h-10" />
												</div>
												<p className="font-mono text-center text-sm text-gray-400  pt-4">Aws - EC2 - RDS - S3</p>
											</div>
										</div>
									</AreaContainer>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
