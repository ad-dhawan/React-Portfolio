import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
// import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import Work from "./components/Work/Work";
import Skills from './components/Skills/skills'
// import Contact from "./components/Contact/Contact";

import "./App.scss";

const App = () => {
  return (
    <>
      <Router>
        <Navbar class="nav" />
        <div class="pages">
          {/* <Switch>
            <Route exact path="/" component={Intro} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/projects" component={Projects} />
          </Switch> */}
          <Intro id="intro" />
          <Skills id="skills" />
          <Work id="experience" />
          {/* <Portfolio id="portfolio" /> */}
          <Projects id="projects" />
        </div>
      </Router>
    </>
  );
};

export default App;
