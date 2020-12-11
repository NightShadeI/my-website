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
                <Subnavlink text="Databases" link="/skills/databases"/>
              </Subnav>
              <div className="page-display">
                <Skills/>
              </div>
            </Route>
            <Route path="/experience">
              <Subnav>
                <Subnavlink text="Junior Engineers" link="/experience/jnreng"/>
                <Subnavlink text="Macquarie Bank" link="/experience/mqbank"/>
                <Subnavlink text="Other" link="/experience/other"/>
              </Subnav>
              <div className="page-display">
                <Experience/>
              </div>
            </Route>
            <Route path="/education">
              <Subnav>
                <Subnavlink text="Macquarie Uni" link="/education/macquni"/>
                <Subnavlink text="Barker College" link="/education/barker"/>
              </Subnav>
              <div className="page-display">
                <div className="other">
                  <h1>Education</h1>
                  <i>Coming soon. Under development</i>
                </div>
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
                <div className="other">
                  <h1>Projects</h1>
                  <i>Coming soon. Under development</i>
                </div>
              </div>
            </Route>
            <Route path="/contact">
              <div className="page-display">
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
