import {Route, Redirect} from "react-router-dom"
import {BannerLeft} from "./banner.js"

const Experience = () => {
	return (
		<div className="experience">
			<Route path="/experience/jnreng">
				<BannerLeft src="/images/JE.png" heading="Junior Engineers" bgcolour="rgba(27, 41, 75, 0.9)" bgimage="/images/je-bg.jpg">
					<p>This is the company I have been working at since February 2018. Here I mostly do content development for their online website called <a href="https://codeflix.com.au/">codeflix</a>. I also teach on at least a weekly basis, more in the holidays where I demonstrate some of my leadership skills.</p>
					<p>Most content development I have done with Junior engineers involves javascript and the python programming language. I have taught many languages to kids including Microbits, scratch, small basic, and many many more! 😊</p>
				</BannerLeft>
			</Route>
			<Route path="/experience/mqbank">
				<BannerLeft src="/images/mqbank.png" heading="Macquarie Bank" bgcolour="rgba(0, 0, 0, 0.9)" bgimage="/images/mqbank-bg.jpg">
					<p>During my third year industry project, I worked for Macquarie bank to help them speed up their analysis of Alteryx workflows. I worked within a group of 5 where we communicated together to develop a web application called Alteryx smart analyser. It would read the XML of an Alteryx file and neatly display a summary of their contents for the user to see.</p>
					<p>The project invovled constructing a topologically sorted graph which I challenged myself to make without any libraries for maximum control. The final result came out really nicely as shown below.</p>
					<img src="/images/alteryx.png" alt="Alteryx workflow" id="alteryx"/>
				</BannerLeft>
			</Route>
			<Route path="/experience/other">
				<div className="other">
					<h1 id="other-heading">Other experience</h1>
					<i>Content is accurate. Styling under development</i>
					<p>Below I list some of the other experience I have had.</p>
					<span>⭐ Worked with Telix Pharmaceuticals Limited to develop clinical trial randomization schemes</span><br/>
					<span>⭐ 2013 - 2017: I performed weekly paper runs</span><br/>
					<span>⭐ September 2015: Work experience with the Japanese foundation</span><br/>
					<span>⭐ July 2015: Work experience with Sydney observatory</span>
				</div>
			</Route>
			<Route path="/">
				<Redirect to="/experience/jnreng"/>
			</Route>
		</div>
	)
}

export default Experience;