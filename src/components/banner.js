const BannerLeft = (props) => {

	return (
		<div className="banner-wrapper">
			{props.bgimage && <img src={props.bgimage} alt={props.heading} className="banner-background"/>}
			<div className="banner" style={{backgroundColor: props.bgcolour}}>
				<div className="banner-content">
					<div className="banner-logo banner-left">
						<img src={props.src} alt={props.heading}/>
						<h1>{props.heading}</h1>
					</div>
					<div className="banner-right banner-text">
						<h1 className="mobile-header">{props.heading}</h1>
						{props.children}
					</div>
				</div>
			</div>
		</div>
	)
}

const BannerRight = (props) => {
	return (
		<div className="banner-wrapper" style={{backgroundColor: props.bgcolour}}>
		{props.bgimage && <img src={props.bgimage} alt={props.heading} className="banner-background"/>}
			<div className="banner">
				<div className="banner-content">
					<div className="banner-left banner-text">
						<h1 className="mobile-header">{props.heading}</h1>
						{props.children}
					</div>
					<div className="banner-logo banner-right">
						<img src={props.src} alt={props.heading}/>
						<h1>{props.heading}</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export {BannerLeft, BannerRight};