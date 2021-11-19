import { useRef } from 'react'
import { NavItem } from '../interfaces/NavItem'
interface Props {
	navItem: NavItem
}

export const ContainerCo = ({ navItem }: Props) => {

	const activeSlide = useRef<HTMLDivElement>(null)


	return (
		<div className="relative h-screen w-full text-white bg-main-background">
			<div
				className="absolute left-0 top-0 active h-full w-full bg-gray-600 overflow-hidden"
				style={{ zIndex: 100 }}
				ref={activeSlide}
			>
				<div className="overflow-y-auto h-full">
					<p className="text-5xl">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque earum sunt libero sequi eius vitae soluta, incidunt laborum dolor praesentium quos laudantium. Saepe placeat quisquam magnam cumque omnis corrupti tenetur, laborum iste quae quo culpa, voluptatibus vel fugiat atque tempora. Fuga dolore rem libero id harum dicta excepturi odio eius, obcaecati a architecto incidunt dolor, voluptatem doloribus, vero sunt quia eligendi unde facere blanditiis! Eos aperiam expedita consequatur, sunt mollitia quis cumque eveniet? Sapiente reprehenderit fugit totam eum quisquam necessitatibus iure natus eveniet, fuga eius non, blanditiis error! Enim, dolore? Dolor fugit possimus perspiciatis maxime assumenda. Impedit id ipsa obcaecati, quisquam ab autem, sapiente distinctio necessitatibus provident, fuga aspernatur perferendis pariatur. Officia quas repellat qui minus ut quam incidunt, labore itaque ad natus maxime voluptatibus numquam mollitia vitae ullam hic quia consequatur cum doloremque! Iusto consequuntur voluptatibus explicabo velit voluptatem ab quas natus nihil quasi cumque obcaecati voluptates cum ratione at, rem commodi eaque iure numquam! Molestiae qui quisquam, nesciunt maxime temporibus tempore repellat praesentium deserunt quo recusandae at eos impedit odit! Quae, culpa. Harum accusantium, quam sunt corporis pariatur tempora molestiae error sed similique itaque. Odio illo suscipit animi minima hic quam, sunt asperiores aliquid ducimus at? Officiis quia minima repellat mollitia, sed in sunt laudantium ad quod harum modi quis earum beatae! Praesentium odit illo eum saepe deserunt voluptate, eaque nobis sequi eius! Quidem facere vel quaerat maiores, ad cumque ab voluptatum error. Modi sunt pariatur at quos nulla inventore voluptatum aspernatur consequatur accusamus nisi? Soluta dolores, vel facere nemo fugiat delectus sint pariatur explicabo natus praesentium corrupti fuga officia provident magnam voluptate ad obcaecati placeat ipsa, maiores, deleniti beatae repellendus unde molestiae perferendis. Qui maiores id vero doloremque veritatis nobis, suscipit rem sit tempore quod in autem accusamus vel dolorem ipsam! Rerum sint nulla est dolorem possimus laboriosam eligendi magni illum doloremque obcaecati? Quam suscipit laudantium, dignissimos maiores excepturi aliquam possimus fugit dolorem nesciunt corrupti fugiat asperiores ut esse, ullam at molestias sequi provident. Ab consequuntur delectus beatae obcaecati eaque suscipit asperiores nobis dignissimos earum ea sequi non, eos id. Repellendus eius consectetur quidem quo! Perferendis fuga magnam animi corporis vel ullam alias provident sequi. Maiores neque quam perspiciatis eaque nesciunt, exercitationem impedit blanditiis libero consequuntur suscipit deleniti ducimus iure nemo incidunt iste numquam facilis ab. Beatae, magni id sint error ullam, sunt quos amet libero molestias, optio ut! Explicabo maiores reprehenderit qui necessitatibus eligendi dignissimos sapiente, voluptatibus similique cumque nesciunt a? Magni ad quo obcaecati minus repellendus deserunt error ex ipsa saepe quos illo labore, porro asperiores? Soluta, nemo, assumenda perspiciatis sequi minima cumque, quas voluptatem sint laboriosam maxime doloremque quod dolore. Provident beatae quos, nemo ex commodi quidem necessitatibus cum doloribus, ut ducimus ab ad, tenetur explicabo harum nihil sit suscipit maxime fuga omnis voluptates incidunt dolorum culpa quae? Cumque cum in corporis quibusdam fugit? In harum iste ut iusto adipisci reprehenderit a sunt officia, voluptatum magni beatae temporibus ullam vero. Quidem quasi, ex dignissimos in, aperiam et culpa velit eaque, ad cumque possimus accusamus?
					</p>
				</div>
			</div>
			<div className="absolute left-0 top-0 h-full w-full bg-gray-700" style={{ zIndex: 90 }}></div>
			<div className="absolute left-0 top-0 h-full w-full bg-gray-800" style={{ zIndex: 80 }}></div>
		</div >
	)
}
