import {Route, Redirect} from "react-router-dom"
import Banner from "./banner.js"

const Skills = () => {
	return (
		<div className="skills">
			<Route path="/skills/programming">
				<Banner/>
				<Banner/>
			</Route>
			<Route path="/skills/webdev">
				<h1>Web development</h1>
			</Route>
			<Route path="/skills/datasci">
				<h1>Data science</h1>
			</Route>
			<Route path="/skills/leadership">
				<h1>Leadership</h1>
			</Route>
			<Route path="/">
				<Redirect to="/skills/programming"/>
			</Route>
		</div>
	)
}

export default Skills;