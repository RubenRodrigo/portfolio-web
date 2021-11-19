import { NavItem } from '../interfaces/NavItem'
import { Drawer } from "./Drawer";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { LogoComponent } from './LogoComponent';
interface Props {
	setNewNavState: (navItem: NavItem) => void
}

export const Navbar = ({ setNewNavState }: Props) => {

	const [isOpen, setIsOpen] = useState(false);

	const handleClickNavItem = (item: NavItem) => {
		setNewNavState(item);
	}

	const [colorChange, setColorchange] = useState(false);

	const changeNavbarColor = () => {
		var slide = document.querySelectorAll<any>('.swiper-slide-active')[0];
		if (slide.scrollTop >= 50) {
			setColorchange(true);
		}
		else {
			setColorchange(false);
		}
	};

	return (
		<>
			<div className={`${colorChange ? "bg-background shadow-lg" : ""} w-full fixed z-10`}>
				<div className="flex justify-between md:px-10 py-5 px-5">
					<div className="flex-1 flex gap-10">
						<LogoComponent />
						<div className="flex-1 md:gap-5 hidden md:flex self-center">
							<h1 className="font-bold text-gray-200">
								+51 963 566 493
							</h1>
							<span className="font-bold text-gray-500">/</span>
							<h1 className="font-bold text-gray-200">
								rodrigohde905@gmail.com
							</h1>
						</div>
					</div>
					<div className="flex-initial flex">
						<button
							className="text-4xl self-center text-gray-300"
							onClick={() => setIsOpen(true)}
						>
							<AiOutlineMenu />
						</button>
					</div>
				</div>
			</div>
			{
				<Drawer isOpen={isOpen} setIsOpen={setIsOpen} handleClickNavItem={handleClickNavItem} />
			}
		</>
	)
}
