import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Work from "./components/Work/Work";
import Skills from './components/Skills/skills'
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/scrollToTop"

import "./App.scss";

const App = () => {
  return (
    <>
    <ScrollToTop/>
      <Router>
        <Navbar class="nav" />
        <div class="pages">
          <Intro id="intro" />
          <Skills id="skills" />
          <Work id="experience" />
          <Projects id="projects" />
          <Contact id="contact" />
        </div>
      </Router>
    </>
  );
};

export default App;
