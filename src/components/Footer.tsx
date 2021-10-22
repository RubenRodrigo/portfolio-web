import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
	return (
		<footer className="z-10 bottom-0 w-full xl:block fixed hidden">
			<div className="md:px-10 px-5 pb-2 flex justify-between text-white">
				<div className="flex-initial self-center">
					<h1>© Rodrigo 2021</h1>
				</div>
				<div className="flex-initial flex gap-10 text-xl self-center">
					<FaFacebookF />
					<FaLinkedinIn />
					<FaTwitter />
				</div>
			</div>
		</footer>
	)
}
