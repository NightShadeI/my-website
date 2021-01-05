import {Route, Redirect} from "react-router-dom"
import Message from "./message.js"
import MessageImage from "./messageimage.js"

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
						<span>If you have any quesions, don't hesitate to contact me using the <a href="/contact">contact me</a> link here or via the navigation bar</span>
					</Message>
				</div>
			</Route>
			<Route path="/home/about">
				<div className = "messagebox">
					<h1>About me</h1>
					<Message>
						<span>Ever since the age of around 15, I have been a keen software developer, enjoying the experience and challenges in which it provides. I first learnt about programming making games on a platform called scratch (for a school project), I loved it so much I continued to pursue software development subjects at school. My first real programming language was python, which I have used as the stepping stone for all the knowledge I have today (even some slightly different areas such as web development and artificial intelligence).</span>
					</Message>
					<Message>
						<span>Using my knowledge, I have made many projects, some of which are used by thousands of people that I still love to now contribute to in my spare time. I have always been keen to help and teach others as well which is probably why I started my first casual/part-time job at Junior engineers.</span>
					</Message>
					<Message>
						<span>Outside of work, education and programming I love to mountain bike or travel when I get the chance. I also like helping out at my church. On hot summer days (such as now) it is often nice to play games or relax in front of the television for a day watching Sci-fi shows or playing stratgic games (I love to challenge myself!). You can read more about my hobbies in the hobbies section.</span>
					</Message>
				</div>
			</Route>
			<Route path="/home/hobbies">
				<div className = "messagebox">
					<h1>Hobbies</h1>
					<Message>
						<span>While I have always loved development, I have a few other interests you can read about here to learn more about me!</span>
					</Message>
					<Message>
						<span>One thing I love to do when it is not too hot is to get out mountain biking. Near where I live there are some fantastic bike riding tracks such as Hornsby mountain bike trail and Westleigh mountain bike track. </span>
					</Message>
					<MessageImage src="/images/hornsbytracks.jpg" alt="Hornsby tracks" caption="The hornsby tracks"/>
					<Message>
						<span>I am also a big fan of travelling including canyoning. Just earlier this year I went to Empress falls (in the blue mountains) which included swimming and abseiling on a half-day long walk. I have visited Japan which was a personal highlight of mine, experiencing another culture and bringing home many stories.</span>
					</Message>
					<MessageImage src="/images/empressfalls.jpg" alt="Empress falls" caption="Empress falls"/>
					<Message>
						<span>I love gaming and watching movies as well in my spare time. I am not a very serious gamer but prefer more casual and stratgic games. This means I enjoy games like Runescape, World of Tanks, chess and many others. I like learning and thinking about science on the side so sci-fi movies are a great way to pass time. Right now i'm into Stargate and 24.</span>
					</Message>					
					<Message>
						<span>Finally, I enjoy helping at my church. This includes assistance during Youth group sessions, managing technical equipment during services and volunteering to serve Jesus where I can.</span>
					</Message>
					<MessageImage src="/images/church.jpg" alt="My chruch" caption="St pauls anglican church"/>
				</div>
			</Route>
			<Route path="/home/links">
				<div className = "messagebox">
					<h1>Links</h1>
					<Message>
						<span>On this page you can find a few links to some various media I am a part of!</span>
					</Message>
					<Message>
						<span>- My LinkedIn profile can be found <a href="https://www.linkedin.com/in/thomas-tapner-1b5970158/">here</a></span><br/>
						<span>- My Stack overflow profile can be found <a href="https://stackoverflow.com/users/7058803/nightshade">here</a></span><br/>
						<span>- My Github profile can be found <a href="https://github.com/NightShadeI">here</a></span><br/>
						<span>- My Leetcode profile can be found <a href="https://leetcode.com/NightShadeI/">here</a></span>
					</Message>
					<Message>
						<span>If you wish to get into contact with me, don't hesitate to contact me using the <a href="/contact">contact me</a> link here or via the navigation bar</span>
					</Message>
				</div>
			</Route>
			<Route path="/">
				<Redirect to="/home/introductions"/>
			</Route>
		</div>
	)
}

export default Home;