import {Route, Redirect} from "react-router-dom"

const Home = () => {
	return (
		<div className="home">
			<div className="home-body">
				<Route path="/home/introductions">
					<h1>Introductions</h1>
					<p>Hello there, and welcome to my website! This is a space where you can read about me (Thomas Tapner), my projects, my experience and the various skills that I have. I will continue to update this space over time as new knowledge comes to light.</p>
					<p>This has been created using <a href="https://reactjs.org/">react</a> to design the user interface. The backend is built using express. All styling is done using regular CSS. All design is publically available on Github at <a href="https://github.com/NightShadeI/my-website">this</a> link.</p>
					<p>If you have any quesions, don't hesitate to contact me using the <a href="/contact me">contact me</a> link here or the navigation bar</p>
				</Route>
				<Route path="/home/about">
					<h1>About me</h1>
					<p>Ever since the age of around 15, I have been a keen software developer, enjoying the experience and challenges in which it provides.</p>
				</Route>
				<Route path="/home/hobbies">
					<h1>Hobbies</h1>
				</Route>
				<Route path="/home/media">
					<h1>Social media</h1>
				</Route>
				<Route path="/home/references">
					<h1>References</h1>
				</Route>
				<Route path="/">
					<Redirect to="/home/introductions"/>
				</Route>
			</div>
			<div className="home-body">

			</div>
		</div>
	)
}

export default Home;