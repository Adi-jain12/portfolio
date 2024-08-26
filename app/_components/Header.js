import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
	return (
		<header className="py-4 mx-10">
			<div className="flex justify-between items-center max-w-7xl mx-auto">
				<Logo />
				<Navigation />
			</div>
		</header>
	);
}

export default Header;
