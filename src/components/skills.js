import {Route, Redirect, Link} from "react-router-dom"
import {BannerLeft, BannerRight} from "./banner.js"

const Skills = () => {
	return (
		<div className="skills">
			<Route path="/skills/programming">
				<BannerLeft src="/images/python.png" heading="Python" bgcolour="#1b294b">
					<p>Python is one of the first programming languages I learnt. I did this from a platform called Grok learning during my time in highschool. Ever since then it has been one of my goto languages for quick easy development, being a scripting language. I have always also felt the concepts are very easy to transfer to other languages and as such I have picked up on some of the other languages I describe on this page fairly quickly.</p>
					<p>I have demonstrated knowledge of python and some of my projects making use of it can be found below.</p>
					<span>⭐ <a href="https://github.com/NightShadeI/Revolution-Rotation-Calculator-">Rotation calculator</a>. Used by over 80,000 people.</span><br/>
					<span>⭐ <a href="https://github.com/NightShadeI/python-messaging-app">Python messenger</a>. Makes use of sockets to message live with others.</span><br/>
					<span>⭐ <a href="https://github.com/NightShadeI/Distributed-Systems-Project">Load distributor</a> for a distributed network using python.</span><br/>
					<span>⭐ Many of the web applications I have developed use python as a backend. Check them out in the <Link to="/skills/webdev">web development</Link> section.</span>
				</BannerLeft>
				<BannerRight src="/images/java.png" heading="Java" bgcolour="#610c04">
					<p>Java has been one of the primary languages I have been learning throughout my degree and thus I have much exposure to it. Most of my time spent with it has been around writing object oriented code using design patterns (from the head first design patterns <a href="https://www.booktopia.com.au/head-first-design-patterns-eric-freeman/ebook/9781449331498.html">textbook</a>). I also have experience in user interface programs with it, as well as a little mobile application development to make Android apps.</p>
					<p>Often I like to use a language such as python to prototype some idea and then develop the idea in Java or C (below) being languages that can run more efficiently.</p>
					<p>Below I list some of my projects I have done with Java</p>
					<span>⭐ Designing of efficient algorithms to solve problems such as the <a href="https://en.wikipedia.org/wiki/Space_partitioning">space-partition</a> problem, maximum flow (but min cost) problem and many others.</span><br/>
					<span>⭐ User interface design, designing a basic strategy game.</span>
					<span>⭐ I have also used java to design and render computer graphics with open GL.</span>
				</BannerRight>
				<BannerLeft src="/images/C.png" heading="C language" bgcolour="darkgreen">
					<p>C and C++ are languages that I have picked up fairly well despite the fact I have had limited exposure to them. These languages I learnt during my time in the systems programming course at my university and through lots of self learning. This is a language I wish to explore further and plan to learn it more over this summer to re-engineer my rotation calculator application I made in python (translating it into C++).</p>
					<p>In the course at university, we were required to use it to read low level binary files, understanding the underlying structure within them. This allowed us to reverse engineer and populate a C struct stored within the binary file.</p>
					<p>Over my summer so far I have used it to complete over 50 <a href="https://leetcode.com/NightShadeI/">leetcode</a> challenges, often achieving a result within the top 90% of the most efficient solutions. Leetcode is a site with numerous coding puzzles to try solve in any language of your choice.</p>
				</BannerLeft>
				<BannerRight src="/images/scala.png" heading="Scala" bgcolour="darkorange">
					<p>Scala is one of the functional programming languages I know. This was a language that I used in my subject Programming languages at Macquarie university. We used scala to design a compiler over the semester that was for a language called the "fun" language.</p>
					<p>Lots of my test case design knowledge also comes from scala where for each weekly project and assignments done, I made some relevant test cases (up to 80 per project) that tested all boundaries including lots of edge cases.</p>
				</BannerRight>
			</Route>
			<Route path="/skills/webdev">
				<BannerLeft src="/images/html.png" heading="HTML5 Bundle" bgcolour="#1b294b">
					<p>I had my first exposure to HTML, CSS and javascript in my second year university course - web development. I have been enjoying web development ever since. Some of my projects are listed below all which used the python bottle library as the backend.</p>
					<p>⭐ One of my first projects utilising these for front end development was to create a website for a clan of many players I lead within a game. It tracks multiple attributes allowing the clan to be run better. The website can be found <a href="https://nightshade.pythonanywhere.com/">here</a>. Username: robinbatty Password: kttass</p>
					<p>⭐ Part of my experience with this also took place at Macquarie bank where I developed Alteryx Smart Analyser with a team of people. The software helps Macquarie bank analyse <a href="https://www.alteryx.com/">Alteryx</a> workflows.</p>
				</BannerLeft>
				<BannerRight src="/images/react.png" heading="React" bgcolour="#301934">
					<p>During my 3rd year of university I undertook an elective subject "Advanced web development" to learn more about the world of web development - enjoying it so much. During this time we learnt about the react library for faster web development. The website you are reading here is built from react.</p>
					<p>Below I list some of the projects which demonstrate my knowledge that I have designed with react on the public internet which are free to view. You can read more about them within the projects section.</p>
					<span>⭐ <a href="http://bingerr.herokuapp.com/">Binger</a>. A social media platform like twitter</span><br/>
					<span>⭐ <a href="https://reproduction-sim.herokuapp.com/">Reproduction simulator</a>. A simulator I made in a group that simulates the spread of disease</span>
				</BannerRight>
				<BannerLeft src="/images/node.png" heading="NodeJS" bgcolour="#610c04">
					<p>In addition to python, I also have experience in NodeJS as well as its library, express for developing backends. All my projects above created with react were also designed using express as a backend (following the MERN stack).</p>
				</BannerLeft>
			</Route>
			<Route path="/skills/databases">
				<BannerLeft src="/images/SQL.png" heading="MySQL" bgcolour="#1b294b">
					<p>My first exposure to SQL was within my first year of university which I have since incorporated in many projects including varients such as MySQL and SQLite.</p>
					<p>⭐ My primary project which makes use of a 500Mb SQL database (using index's and other query optimisations) is the clan website I host on a platform called pythonanywhere. The website is used to help leaders make informed decisions based on live clan statistics. It can be accessed <a href="https://nightshade.pythonanywhere.com/">here</a> with Username: robinbatty Password: kttass</p>
				</BannerLeft>
				<BannerRight src="/images/mongodb.png" heading="MongoDB" bgcolour="black">
					<p>I have been using MongoDB ever since I was first exposed to the notion of non-relational databases in the big data subject at Macquarie university. The schemaless design has its own advantages for both the application and ease of development.</p>
					<p>Some of my projects designed in MongoDB are listed below. All these projects also incorporate account management such as hashed passwords with the bcrypt algorithm.</p>
					<span>⭐ <a href="http://bingerr.herokuapp.com/">Binger</a>. A social media platform like twitter</span><br/>
					<span>⭐ <a href="https://reproduction-sim.herokuapp.com/">Reproduction simulator</a>. A simulator I made in a group that simulates the spread of disease</span>
				</BannerRight>
			</Route>
			<Route path="/">
				<Redirect to="/skills/programming"/>
			</Route>
		</div>
	)
}

export default Skills;