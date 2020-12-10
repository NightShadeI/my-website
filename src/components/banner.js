const BannerLeft = (props) => {
	return (
		<div className="banner" style={{backgroundColor: props.bgcolour}}>
			<div className="banner-content">
				<div className="banner-logo banner-left">
					<img src={props.src} alt={props.heading}/>
					<h1>{props.heading}</h1>
				</div>
				<div className="banner-right banner-text">
					{props.children}
				</div>
			</div>
		</div>
	)
}

const BannerRight = (props) => {
	return (
		<div className="banner" style={{backgroundColor: props.bgcolour}}>
			<div className="banner-content">
				<div className="banner-left banner-text">
					{props.children}
				</div>
				<div className="banner-logo banner-right">
					<img src={props.src} alt={props.heading}/>
					<h1>{props.heading}</h1>
				</div>
			</div>
		</div>
	)
}

export {BannerLeft, BannerRight};