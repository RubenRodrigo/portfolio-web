import { Drawer } from "./Drawer";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { LogoComponent } from './LogoComponent';

export const Navbar = () => {

	const navRef = useRef<HTMLDivElement>(null)
	const [isOpen, setIsOpen] = useState(false);
	const [colorChange, setColorchange] = useState(false);

	useEffect(() => {
		const onScroll: EventListener = (e: Event) => {
			if (navRef.current) {
				const newShowNav = window.scrollY > navRef.current.clientHeight - 50
				if (newShowNav) {
					setColorchange(true)
				} else {
					setColorchange(false)
				}
			}
		}
		document.addEventListener("scroll", onScroll)
		return () => {
			document.removeEventListener("scroll", onScroll)
		}
	}, [])
	return (
		<>
			<div
				ref={navRef}
				className={`${colorChange ? "nav-active" : ""} w-full fixed z-20`}
			>
				<div className="flex justify-between py-2 md:py-5 px-4 md:px-16 ">
					<div className="flex-initial">
						<LogoComponent />
					</div>
					<div className="flex-1 flex gap-10 justify-end">
						<div className="flex-1 md:gap-5 hidden md:flex self-center justify-end">
							<h1 className="font-bold text-gray-200 border-animated">
								+51 963 566 493
							</h1>
							<span className="font-bold text-gray-500">/</span>
							<a
								href="mailto:rodrigohde905@gmail.com"
								className="font-bold text-gray-200 relative border-animated">
								rodrigohde905@gmail.com
							</a>
							<span className="font-bold text-gray-500">/</span>
							<a href="/CV_Ruben_Rodrigo.pdf" target="_blank">
								<h1 className="font-bold text-gray-200 relative border-animated">
									Descarga mi CV
								</h1>
							</a>
							<span className="font-bold text-gray-500">/</span>
						</div>
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
				<Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
			}
		</>
	)
}
