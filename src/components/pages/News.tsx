import React from 'react'

export const News = () => {
	return (
		<div className="relative w-full h-full">
			<div className="absolute top-2/4 xl:flex hidden z-10">
				<div className="self-center">
					<h3
						className="font-bold relative text-8xl text-gray-title opacity-40 lg:left-1/4 top-2/4"
						style={{ transform: "translate(-60%,-50%) rotate(-90deg)" }}
					>
						Intereses
					</h3>
				</div>
			</div>
			<div className="relative min-h-full bg-background z-0 flex flex-col">
				<div
					className="flex-1 flex max-w-screen-xl mx-auto w-full pt-24 md:pt-28 lg:pt-32 "
				>
				</div>
			</div>
		</div>
	)
}
