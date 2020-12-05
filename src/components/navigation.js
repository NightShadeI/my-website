import Navlink from './navlink.js'

const Navigation = () => {
	return (
		<div className="navbar">
			<div className="nav-profile">
				<img src="/images/bird.jpg" alt="me"/>
			</div>
			<div className="nav-links">
				<ul>
					<Navlink text="Home" fa_code="fa fa-home"/>
					<Navlink text="Skills" fa_code="fa fa-pie-chart"/>
					<Navlink text="Work experience" fa_code="fa fa-briefcase"/>
					<Navlink text="Education" fa_code="fa fa-graduation-cap"/>
					<Navlink text="Projects" fa_code="fa fa-star"/>
					<Navlink text="Contact me" fa_code="fa fa-question"/>
				</ul>
			</div>
		</div>
	)
}

export default Navigation;