import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
	return (
		<footer className="w-full bg-background">
			<div className="md:px-20 px-4 pb-2 flex justify-between text-white">
				<div className="flex-initial self-center">
					<h1>© Rodrigo 2021</h1>
				</div>
				<div className="flex-initial flex gap-10 text-xl self-center">
					<a target="_blank" rel="noreferrer" href="https://github.com/RubenRodrigo" className="hover:text-yellow-400 transform hover:-translate-y-1 p-2 transition text-gray-300">
						<FaGithub />
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ruben-cha%C3%B1i-3743641b4/" className="hover:text-yellow-400 transform hover:-translate-y-1 p-2 transition text-gray-300">
						<FaLinkedinIn />
					</a>
					<a target="_blank" rel="noreferrer" href="https://twitter.com/cinnaba79941532" className="hover:text-yellow-400 transform hover:-translate-y-1 p-2 transition text-gray-300">
						<FaTwitter />
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.facebook.com/ruben.chani.509" className="hover:text-yellow-400 transform hover:-translate-y-1 p-2 transition text-gray-300">
						<FaFacebookF />
					</a>
				</div>
			</div>
		</footer>
	)
}
