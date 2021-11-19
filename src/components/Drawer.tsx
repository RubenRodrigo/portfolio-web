import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { NavItem } from '../interfaces/NavItem';
import { NavItems } from '../staticData';

interface Props {
	isOpen: boolean;
	setIsOpen: (active: boolean) => void;
	handleClickNavItem: (navItem: NavItem) => void;
}

export const Drawer = ({ isOpen, setIsOpen, handleClickNavItem }: Props) => {
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
										<h2
											className="text-2xl font-bold py-2 hover:text-white transition-colors duration-500 ease-linear cursor-pointer"
											onClick={() => handleClickNavItem(item)}
										>
											{item.title}
										</h2>
									</div>
								))
							}
						</div>
						<div className="flex-initial flex flex-col px-6 pb-20 gap-5">
							<div className="flex-initial flex gap-10 text-xl">
								<FaFacebookF />
								<FaLinkedinIn />
								<FaTwitter />
							</div>
							<div className="flex-initial">
								<h1>© Rodrigo 2021. No se que poner.</h1>
							</div>
						</div>
					</div>
				}
			</div>
		</aside>
	)
}
