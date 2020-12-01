const Navlink = ({text, fa_code}) => {
	return (
		<li>
			<div className="nav-link">
				<i className={fa_code}/> 
				<span>{text}</span>
			</div>
		</li>
	)
}

export default Navlink;