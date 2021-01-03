import {useState, useEffect} from 'react';
import Navigation from "./components/navigation.js";
import Subnav from "./components/subnav.js";
import Subnavlink from "./components/subnavlink.js";
import Home from "./components/home.js";
import Skills from "./components/skills.js";
import Experience from "./components/experience.js"
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom"

function App() {

  const [active, setActive] = useState(false)

  useEffect(() => {
    if (active) {
    	document.getElementById("navbar").style.transform = "translate(0%)";
    } else {
      document.getElementById("navbar").style.transform = "translate(-100%)";
    }
  }, [active])

  const modifyNav = () => {
	  if (window.innerWidth < 960 && active) {
      setActive(false)
    } else if (window.innerWidth >= 960) {
      setActive(true)
    }
  }
  window.onresize = e => {
  	modifyNav()
  }

  const clickHandler = e => {
    setActive(!active)
  }

  return (
    <Router>
      <div className="App">
        <Navigation/>
        <div className="page-content">
          <Switch>
            <Route path="/home">
              <Subnav clickHandler={clickHandler}>
                <Subnavlink text="Introductions" link="/home/introductions"/>
                <Subnavlink text="About me" link="/home/about"/>
                <Subnavlink text="Hobbies" link="/home/hobbies"/>
                <Subnavlink text="Links" link="/home/links"/>
              </Subnav>
              <div className="page-display" onClick={() => modifyNav()}>
                <Home/>
              </div>
            </Route>
            <Route path="/skills">
              <Subnav clickHandler={clickHandler}>
                <Subnavlink text="Programming" link="/skills/programming"/>
                <Subnavlink text="Web development" link="/skills/webdev"/>
                <Subnavlink text="Databases" link="/skills/databases"/>
              </Subnav>
              <div className="page-display" onClick={() => modifyNav()}>
                <Skills/>
              </div>
            </Route>
            <Route path="/experience">
              <Subnav clickHandler={clickHandler}>
                <Subnavlink text="Junior Engineers" link="/experience/jnreng"/>
                <Subnavlink text="Macquarie Bank" link="/experience/mqbank"/>
                <Subnavlink text="Other" link="/experience/other"/>
              </Subnav>
              <div className="page-display" onClick={() => modifyNav()}>
                <Experience/>
              </div>
            </Route>
            <Route path="/education">
              <Subnav clickHandler={clickHandler}>
                <Subnavlink text="Macquarie Uni" link="/education/macquni"/>
                <Subnavlink text="Barker College" link="/education/barker"/>
              </Subnav>
              <div className="page-display" onClick={() => modifyNav()}>
                <div className="other">
                  <h1>Education</h1>
                  <i>Coming soon. Under development</i>
                </div>
              </div>
            </Route>
            <Route path="/projects">
              <Subnav clickHandler={clickHandler}>
                <Subnavlink text="Binger" link="/projects/binger"/>
                <Subnavlink text="Reproduction Sim" link="/projects/reproductionsim"/>
                <Subnavlink text="Log tracker" link="/projects/logtracker"/>
                <Subnavlink text="Rotation calc" link="/projects/rotationcalc"/>
                <Subnavlink text="Clinical trials" link="/projects/trials"/>
                <Subnavlink text="Other" link="/projects/other"/>
              </Subnav>
              <div className="page-display">
                <div className="other">
                  <h1>Projects</h1>
                  <i>Coming soon. Under development</i>
                </div>
              </div>
            </Route>
            <Route path="/contact">
              <Subnav nocontent={true}>
              </Subnav>
              <div className="page-display" onClick={() => modifyNav()}>
                <div className="other">
                  <h1>Contact me</h1>
                  <i>Coming soon. Under development</i>
                </div>
              </div>
            </Route>
            <Route path="/">
              <Redirect to="/home/introductions"/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
