import {Link} from "react-router-dom"

const Navlink = ({text, fa_code, link}) => {
	return (
		<li>
			<Link to={link}>
				<div className="nav-link">
					<i className={fa_code}/> 
					<span>{text}</span>
				</div>
			</Link>
		</li>
	)
}

export default Navlink;