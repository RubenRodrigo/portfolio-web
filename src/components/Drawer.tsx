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
				className="h-full md:w-6/12 xl:w-8/12 bg-black bg-opacity-40"
				onClick={() => setIsOpen(false)}
			/>
			<div className="h-full md:w-6/12 xl:w-4/12 w-full bg-background overflow-y-auto text-menu-color md:px-10 py-5 px-5">
				<div className="flex justify-end">
					<div>
						<button
							className="text-4xl self-center"
							onClick={() => setIsOpen(false)}
						>
							<AiOutlineClose />
						</button>
					</div>
				</div>
				<div className="flex flex-col px-7 py-10 gap-8">
					{
						NavItems.map(item => (
							<div key={item.id}>
								<h2
									className="text-2xl font-bold"
									onClick={() => handleClickNavItem(item)}
								>
									{item.title}
								</h2>
							</div>
						))
					}
				</div>
			</div>
		</aside>
	)
}
