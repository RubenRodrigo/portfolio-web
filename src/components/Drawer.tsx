import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { NavItems } from '../staticData';

interface Props {
	isOpen: boolean;
	setIsOpen: (active: boolean) => void;
}

export const Drawer = ({ isOpen, setIsOpen }: Props) => {
	return (
		<aside
			className={`${isOpen ? '-translate-x-0' : 'translate-x-full'} transform overflow-auto w-screen h-screen fixed right-0 top-0 z-30 transition-all duration-500 ease-in-out flex`}
		>
			<div
				className="h-full md:w-6/12 xl:w-9/12 bg-black bg-opacity-40"
				onClick={() => setIsOpen(false)}
			/>
			<div className="shadow-2l flex flex-col h-full md:w-6/12 xl:w-3/12 w-full bg-background overflow-y-auto text-menu-color md:px-10 py-5 px-5">
				<div className="flex-initial flex justify-end">
					<div>
						<button
							className="text-4xl self-center hover:text-white transition-colors duration-500 ease-linear"
							onClick={() => setIsOpen(false)}
						>
							<AiOutlineClose />
						</button>
					</div>
				</div>
				{
					isOpen &&
					<div className="flex-1 flex flex-col justify-between">
						<div className="flex-initial flex flex-col px-6 py-10 gap-8 animate__animated animate__fadeInUp animate__fast">
							{
								NavItems.map(item => (
									<div key={item.id}>
										<a href={`/#${item.titleId}`} onClick={() => setIsOpen(false)}>
											<h2
												className="text-2xl font-bold py-2 hover:text-white transition-colors duration-500 ease-linear cursor-pointer"
											>
												{item.title}
											</h2>
										</a>
									</div>
								))
							}
						</div>
						<div className="flex-initial flex flex-col px-6 pb-20 gap-5">
							<div className="flex-initial flex gap-10 text-xl">
								<a target="_blank" rel="noreferrer" href="https://github.com/RubenRodrigo" className="hover:text-yellow-400 transform hover:-translate-y-1 p-2 transition text-gray-300">
									<FaFacebookF />
								</a>
								<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ruben-cha%C3%B1i-3743641b4/" className="hover:text-yellow-400 transform hover:-translate-y-1 p-2 transition text-gray-300">
									<FaLinkedinIn />
								</a>
								<a target="_blank" rel="noreferrer" href="https://twitter.com/cinnaba79941532" className="hover:text-yellow-400 transform hover:-translate-y-1 p-2 transition text-gray-300">
									<FaTwitter />
								</a>
								<a target="_blank" rel="noreferrer" href="https://www.facebook.com/ruben.chani.509" className="hover:text-yellow-400 transform hover:-translate-y-1 p-2 transition text-gray-300">
									<FaGithub />
								</a>
							</div>
							<div className="flex-initial">
								<h1>© Rodrigo 2021. Todos los derechos reservados.</h1>
							</div>
						</div>
					</div>
				}
			</div>
		</aside>
	)
}
