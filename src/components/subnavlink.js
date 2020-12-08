import {Link} from 'react-router-dom'

const Subnavlink = ({text, link}) => {
	return (
		<li>
			<Link to={link}>
				<div className="nav-link subnav-link">
					<span>{text}</span>
				</div>
			</Link>
		</li>
		
	)
}

export default Subnavlink;