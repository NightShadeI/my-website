const Subnav = (props) => {
	return (
		<div className="subnav">
			<ul>
				{props.children}
			</ul>
		</div>
	)
}

export default Subnav;