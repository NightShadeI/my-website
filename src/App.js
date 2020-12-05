import Navigation from "./components/navigation.js";
import Subnav from "./components/subnav.js";
import Subnavlink from "./components/subnavlink.js";
import Home from "./components/home.js";
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
                <Subnavlink text="Introductions"/>
                <Subnavlink text="About me"/>
                <Subnavlink text="Hobbies"/>
                <Subnavlink text="Social media"/>
                <Subnavlink text="References"/>
              </Subnav>
              <Home/>
            </Route>
            <Route path="/skills">
              <Subnav>
                <Subnavlink text="Programming"/>
                <Subnavlink text="Web development"/>
                <Subnavlink text="Data science"/>
                <Subnavlink text="Leadership"/>
              </Subnav>
              <h1>Skills</h1>
            </Route>
            <Route path="/Work experience">
              <Subnav>
                <Subnavlink text="Junior engineers"/>
                <Subnavlink text="Macquarie bank"/>
                <Subnavlink text="Other"/>
              </Subnav>
              <h1>Work experience</h1>
            </Route>
            <Route path="/education">
              <Subnav>
                <Subnavlink text="Macquarie Uni"/>
                <Subnavlink text="Barker College"/>
                <Subnavlink text="Hornsby Tafe"/>
              </Subnav>
              <h1>Education</h1>
            </Route>
            <Route path="/projects">
              <Subnav>
                <Subnavlink text="Binger"/>
                <Subnavlink text="Reproduction Sim"/>
                <Subnavlink text="Log tracker"/>
                <Subnavlink text="Rotation calc"/>
                <Subnavlink text="Clinical trials"/>
                <Subnavlink text="Other"/>
              </Subnav>
              <h1>Projects</h1>
            </Route>
            <Route path="/contact me">
              <h1>Contact me</h1>
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
