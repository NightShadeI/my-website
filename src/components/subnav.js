import {useState} from "react"

const Subnav = (props) => {

	const [active, setActive] = useState(false)

	window.onresize = e => {
		console.log(window.innerWidth < 960);
		if (window.innerWidth < 960) {
			document.getElementById("navbar").style.transform = "translate(-100%)";
		} else {
			document.getElementById("navbar").style.transform = "translate(0%)";
		}
    	setActive(false)
  	}

	const clickHandler = e => {
		if (active) {
			document.getElementById("navbar").style.transform = "translate(-100%)";
		} else {
			document.getElementById("navbar").style.transform = "translate(0%)";
		}
		setActive(!active)
	}

	return (
		<div className="subnav">
			<ul>
				{props.children}
			</ul>
			<div id="menu" className="nav-link subnav-link" onClick={e => clickHandler(e)}>
				<span><i className="fa fa-bars"/></span>
			</div>
		</div>
	)
}

export default Subnav;