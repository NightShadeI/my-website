import Navlink from './navlink.js'

const Navigation = () => {
	return (
		<div className="navbar" id="navbar">
			<div className="nav-profile">
				<img src="/images/avatar-me.jpg" alt="me"/>
			</div>
			<div className="nav-links">
				<ul>
					<Navlink text="Home" fa_code="fa fa-home" link="/home/introductions"/>
					<Navlink text="Skills" fa_code="fa fa-pie-chart" link="/skills/programming"/>
					<Navlink text="Experience" fa_code="fa fa-briefcase" link="/experience/jnreng"/>
					<Navlink text="Education" fa_code="fa fa-graduation-cap" link="/education/macquni"/>
					<Navlink text="Projects" fa_code="fa fa-star" link="/projects/binger"/>
					<Navlink text="Contact me" fa_code="fa fa-question" link="/contact"/>
				</ul>
			</div>
		</div>
	)
}

export default Navigation;