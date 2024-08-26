import ProjectCard from '../_components/ProjectCard';
import WildOasis from '../../public/wild.png';
import Forkify from '../../public/forkify.png';
import Inventory from '../../public/inventory.jpg';
import Hotel from '../../public/hotel.jpg';

const page = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-20">
			<div className="flex flex-col items-start justify-center">
				<span className="text-black font-medium text-xl">
					A collection of personal and passion projects
				</span>
			</div>
			<div className="slide-in-down grid grid-cols-2 gap-16">
				<ProjectCard
					title="The Wild Oasis"
					info="cabin booking website"
					image={WildOasis}
					tech={['Nextjs', 'Nodejs', 'PostgreSQL', 'AWS']}
				/>
				<ProjectCard
					title="Adstock"
					info="inventory management system"
					image={Inventory}
					tech={['Nextjs', 'Nodejs', 'PostgreSQL', 'AWS']}
				/>
				<ProjectCard
					title="Forkify"
					info="food ordering app"
					image={Forkify}
					tech={['Reactjs', 'Nodejs', 'MongoDB']}
				/>
				<ProjectCard
					title="CheckInn"
					info="hotel booking website"
					image={Hotel}
					tech={['Reactjs', 'Nodejs', 'MongoDB']}
				/>
			</div>
		</div>
	);
};

export default page;
