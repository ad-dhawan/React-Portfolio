// import { useState } from 'react';
// import Topbar from "./components/TopBar/Topbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
// import Menu from "./components/Menu/Menu";

import './App.scss'

function App() {
  // const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div class="app">
      {/* <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
      <div class="sections">
        <Intro />
        <Portfolio />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
