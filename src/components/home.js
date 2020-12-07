import {Route, Redirect} from "react-router-dom"
import Message from "./message.js"

const Home = () => {

	return (
		<div className="home">
			<img src="/images/stars.jpg" id="stars" alt="stars"/>
			<Route path="/home/introductions">
				<div className = "messagebox">
					<h1>Welcome!</h1>
					<Message>
						<span>Hello there, and welcome to my website! 😊 This is a space where you can read about me (Thomas Tapner), my projects, my experience and the various skills that I have. I will continue to update this space over time as new knowledge comes to light.</span>
					</Message>
					<Message>
						<span>To navigate this website, you can navigate through the various sections on the left hand side. The top of the website contains sub-points for navigation, for more tailored information.</span>
					</Message>
					<Message>
						<span>This has been created using <a href="https://reactjs.org/">react</a> to design the user interface. The backend is built using express. All styling is done using regular CSS. All design is publically available on Github at <a href="https://github.com/NightShadeI/my-website">this</a> link.</span>				
					</Message>
					<Message>
						<span>If you have any quesions, don't hesitate to contact me using the <a href="/contact me">contact me</a> link here or via the navigation bar</span>
					</Message>
				</div>
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
	)
}

export default Home;