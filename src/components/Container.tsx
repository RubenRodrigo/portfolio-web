import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Projects } from './pages/Projects';
import { News } from './pages/News';
import { Networking } from './pages/Networking';
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

// install Swiper modules
export const Container = () => {

	return (
		<div className="bg-background relative" >
			<div id="home">
				<Home />
			</div>
			<div id="profile">
				<Profile />
			</div>
			<div id="projects">
				<Projects />
			</div>
			<div id="news">
				<News />
			</div>
			<div id="networking">
				<Networking />
			</div>
			<div className="hidden fixed bottom-0 left-10 orientation orientation-left md:flex flex-col gap-5 z-20">
				<div className="flex flex-col gap-5">
					<a target="_blank" rel="noreferrer" href="https://github.com/RubenRodrigo" className="hover:text-yellow-400 transform hover:-translate-y-1 p-2 transition text-gray-300">
						<FiGithub className="h-6 w-6" />
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ruben-cha%C3%B1i-3743641b4/" className="hover:text-yellow-400 transform hover:-translate-y-1 p-2 transition text-gray-300">
						<FiLinkedin className="h-6 w-6" />
					</a>
					<a target="_blank" rel="noreferrer" href="https://twitter.com/cinnaba79941532" className="hover:text-yellow-400 transform hover:-translate-y-1 p-2 transition text-gray-300">
						<FiTwitter className="h-6 w-6" />
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.facebook.com/ruben.chani.509" className="hover:text-yellow-400 transform hover:-translate-y-1 p-2 transition text-gray-300">
						<FiFacebook className="h-6 w-6" />
					</a>
				</div>
			</div>
			<div className="hidden fixed bottom-0 right-10 orientation orientation-right md:flex flex-col gap-5 z-20">
				<a href="/" className="hover:text-yellow-400 transform hover:-translate-y-1 p-2 transition text-gray-300 font-mono">rodrigohde905@gmail.com</a>
			</div>
		</div >
	)
}
