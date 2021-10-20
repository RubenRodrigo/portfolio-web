import InitImage from '../assets/image-1.jpg'

export const Container = () => {
	return (
		<div className="max-w-screen-2xl mx-auto p-10">
			<div className="grid grid-cols-2 gap-8">
				<div className="col-span-1">
					<img src={InitImage} alt="code" />
				</div>
				<div className="col-span-1 p-8">
					<h3 className="text-6xl">Lorem, ipsum dolor sit amet.</h3>
					<br />
					<p className="py-6 text-gray-700 text-lg leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aliquid aliquam dignissimos totam voluptatibus recusandae temporibus ex et? Mollitia repellendus voluptatem impedit tempora maiores. Non itaque similique accusantium numquam ratione!</p>
				</div>
			</div>
		</div>
	)
}
