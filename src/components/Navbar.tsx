export const Navbar = () => {
	return (
		<>
			<div className="w-full p-4 border-b border-gray-500">
				{/* <svg viewBox="0 0 129.3500129699707 207.04200038909912" preserveAspectRatio="xMidYMid meet" class="css-g5ufxp" id="hcaedgba"><defs id="SvgjsDefs1001"></defs><g id="SvgjsG1007" featurekey="Wg4LIr-0" transform="matrix(10.47765827178955,0,0,10.47765827178955,2.665638687027001,-52.5531660959805)" fill="#111"><path d="M4.94 9.18 l-4.24 0 l0 -2.16 l0 0 l4.18 0 c4.46 0 4.74 6.76 0.88 7.62 c-0.28 0.08 -0.56 0.1 -0.88 0.1 l-2 0 l0 0.02 l0 5.24 l-2.18 0 l0 -7.44 l2.18 2.2 l5.28 5.24 l2.96 0 l-7.44 -7.44 l1.26 0 l0 0 c1.86 0 1.86 -3.38 0 -3.38 z"></path></g><g id="SvgjsG1008" featurekey="qafomr-0" transform="matrix(1.7000000476837158,0,0,1.7000000476837158,-1.040000081062317,166.038002204895)" fill="#111"><path d="M9 20 l-2.86 -4.58 l-1.72 0 l0 4.58 l-3.22 0 l0 -14 l4.98 0 c3.14 0 5.22 1.9 5.22 4.82 c0 1.86 -0.88 3.26 -2.36 3.98 l3.36 5.2 l-3.4 0 z M4.42 8.96 l0 3.72 l1.56 0 c1.3 0 2.2 -0.46 2.2 -1.86 c0 -1.38 -0.9 -1.86 -2.2 -1.86 l-1.56 0 z M19.18 9.42 c2.36 0 5.48 1.78 5.48 5.42 c0 3.66 -3.12 5.36 -5.48 5.36 s-5.48 -1.7 -5.48 -5.36 c0 -3.64 3.12 -5.42 5.48 -5.42 z M19.18 12.2 c-1.2 0 -2.42 0.92 -2.42 2.64 c0 1.66 1.22 2.58 2.42 2.58 s2.44 -0.92 2.44 -2.58 c0 -1.72 -1.24 -2.64 -2.44 -2.64 z M33.86 5.859999999999999 l3.16 0 l0 5.08 l0 9.06 l-3.16 0 l0 -1.04 c-0.14 0.36 -1.08 1.24 -2.68 1.24 c-2.38 0 -5.12 -1.7 -5.12 -5.42 c0 -3.58 2.74 -5.36 5.12 -5.36 c1.6 0 2.54 0.92 2.68 1.14 l0 -4.7 z M31.64 17.42 c1.3 0 2.36 -0.9 2.36 -2.64 c0 -1.68 -1.06 -2.58 -2.36 -2.58 c-1.36 0 -2.52 0.92 -2.52 2.58 c0 1.72 1.16 2.64 2.52 2.64 z M45.74 9.44 c0.28 0 0.56 0 0.82 0.06 l0 3.02 c-0.24 -0.06 -0.52 -0.06 -0.72 -0.06 c-1.92 0 -3.46 1.38 -3.62 3.3 l0 4.24 l-3.16 0 l0 -10.4 l3.16 0 l0 2.54 c0.48 -1.56 1.68 -2.7 3.52 -2.7 z M51.339999999999996 5.859999999999999 l0 2.66 l-3.16 0 l0 -2.66 l3.16 0 z M51.339999999999996 9.6 l0 10.4 l-3.16 0 l0 -10.4 l3.16 0 z M60.86 9.6 l3.16 0 l0 10.4 c0 3.16 -3.2 4.12 -5.52 4.12 c-1.1 0 -2.1 -0.18 -2.74 -0.52 l0 -2.58 c0.64 0.34 1.6 0.48 2.74 0.48 c1.86 0 2.36 -0.96 2.36 -1.5 l0 -1.04 c-0.14 0.36 -1.08 1.24 -2.68 1.24 c-2.38 0 -5.12 -1.7 -5.12 -5.42 c0 -3.58 2.74 -5.36 5.12 -5.36 c1.6 0 2.54 0.92 2.68 1.14 l0 -0.96 z M58.64 17.42 c1.3 0 2.36 -0.9 2.36 -2.64 c0 -1.68 -1.06 -2.58 -2.36 -2.58 c-1.36 0 -2.52 0.92 -2.52 2.58 c0 1.72 1.16 2.64 2.52 2.64 z M71.22 9.42 c2.36 0 5.48 1.78 5.48 5.42 c0 3.66 -3.12 5.36 -5.48 5.36 s-5.48 -1.7 -5.48 -5.36 c0 -3.64 3.12 -5.42 5.48 -5.42 z M71.22 12.2 c-1.2 0 -2.42 0.92 -2.42 2.64 c0 1.66 1.22 2.58 2.42 2.58 s2.44 -0.92 2.44 -2.58 c0 -1.72 -1.24 -2.64 -2.44 -2.64 z"></path></g></svg> */}
			</div>
			<div className="max-w-screen-2xl mx-auto p-10">
				<div className="flex justify-between pb-14">
					<h1 className="flex-1 text-2xl font-bold">
						Mi Portafolio Web
					</h1>
					<div className="flex-1 flex flex-row-reverse gap-10">
						<h1 className="text-gray-700">
							+51 963 566 493
						</h1>
						<span className="text-gray-700">/</span>
						<h1 className="text-gray-700">
							rodrigohde905@gmail.com
						</h1>
					</div>
				</div>
				<div className="w-full">
					<div className="grid grid-cols-5 gap-10">
						<div className="col-span-1 relative border-animated cursor-pointer">
							<h2 className="pb-5 tracking-wider">
								Inicio
							</h2>
						</div>
						<div className="col-span-1 relative border-animated cursor-pointer">
							<h2 className="pb-5 tracking-wider">
								Perfil Profesional
							</h2>
						</div>
						<div className="col-span-1 relative border-animated cursor-pointer">
							<h2 className="pb-5 tracking-wider">
								Proyectos
							</h2>
						</div>
						<div className="col-span-1 relative border-animated cursor-pointer">
							<h2 className="pb-5 tracking-wider">
								Noticia/Actualidad
							</h2>
						</div>
						<div className="col-span-1 relative border-animated cursor-pointer">
							<h2 className="pb-5 tracking-wider">
								Networking
							</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
