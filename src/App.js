import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
// import Contact from "./components/Contact/Contact";

import './App.scss'

const App = () => {
  return (
    <>
      <Router>
        <Navbar class="nav" />
        <div class="pages">
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/projects" component={Projects} />
            {/* <Route path="/contact" component={Contact} /> */}
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
