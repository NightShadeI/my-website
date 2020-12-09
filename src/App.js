import Navigation from "./components/navigation.js";
import Subnav from "./components/subnav.js";
import Subnavlink from "./components/subnavlink.js";
import Home from "./components/home.js";
import Skills from "./components/skills.js";
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <div className="page-content">
          <Switch>
            <Route path="/home">
              <Subnav>
                <Subnavlink text="Introductions" link="/home/introductions"/>
                <Subnavlink text="About me" link="/home/about"/>
                <Subnavlink text="Hobbies" link="/home/hobbies"/>
                <Subnavlink text="Links" link="/home/links"/>
              </Subnav>
              <div className="page-display">
                <Home/>
              </div>
            </Route>
            <Route path="/skills">
              <Subnav>
                <Subnavlink text="Programming" link="/skills/programming"/>
                <Subnavlink text="Web development" link="/skills/webdev"/>
                <Subnavlink text="Data science" link="/skills/datasci"/>
                <Subnavlink text="Leadership" link="/skills/leadership"/>
              </Subnav>
              <div className="page-display">
                <Skills/>
              </div>
            </Route>
            <Route path="/experience">
              <Subnav>
                <Subnavlink text="Junior engineers" link="/experience/jnreng"/>
                <Subnavlink text="Macquarie bank" link="/experience/mqbank"/>
                <Subnavlink text="Other" link="/experience/other"/>
              </Subnav>
              <div className="page-display">
                <h1>Experience</h1>
              </div>
            </Route>
            <Route path="/education">
              <Subnav>
                <Subnavlink text="Macquarie Uni" link="/education/macquni"/>
                <Subnavlink text="Barker College" link="/education/barker"/>
              </Subnav>
              <div className="page-display">
                <h1>Education</h1>
              </div>
            </Route>
            <Route path="/projects">
              <Subnav>
                <Subnavlink text="Binger" link="/projects/binger"/>
                <Subnavlink text="Reproduction Sim" link="/projects/reproductionsim"/>
                <Subnavlink text="Log tracker" link="/projects/logtracker"/>
                <Subnavlink text="Rotation calc" link="/projects/rotationcalc"/>
                <Subnavlink text="Clinical trials" link="/projects/trials"/>
                <Subnavlink text="Other" link="/projects/other"/>
              </Subnav>
              <div className="page-display">
                <h1>Projects</h1>
              </div>
            </Route>
            <Route path="/contact">
              <div className="page-display">
                <h1>Contact me</h1>
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
