const Subnav = (props) => {

	const styles = props.nocontent ? {display: "none"} : {}

	return (
		<div className="subnav" style={styles}>
			<ul>
				{props.children}
			</ul>
			<div id="menu" className="nav-link subnav-link" onClick={e => props.clickHandler(e)}>
				<span><i className="fa fa-bars"/></span>
			</div>
		</div>
	)
}

export default Subnav;