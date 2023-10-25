import Menu from './../Menu'
import Options from './../Options'

function Header() {
	return (
		<div className="header">
			<h1>Appka</h1>
			<div className="header-content">
				<Menu />
				<Options />
			</div>
		</div>
	);
}

export default Header;