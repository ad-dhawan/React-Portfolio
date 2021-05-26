import "./Projects.scss";
import Card from "./Card";

import Cheftastic from "../../Assets/Cheftastic.png";
import CryptoTracker from "../../Assets/bitcoin.png";
import CovidTracker from "../../Assets/CovidTracker.png";
import Zombaze from "../../Assets/zombaze.jpg";
import Graphics from "../../Assets/graphic.png";

const Projects = () => {
  return (
    <div class="projects" id="projects">
      <h1>Projects</h1>
      <div class="card-view">
        <Card
          img={Cheftastic}
          title="Cheftastic"
          description="An application with variety of recipes and shopping basket. It is live on Google Play Store and uses advance android libraries and components."
          link="https://play.google.com/store/apps/details?id=com.dhawan.cheftastic"
          linkText="Download"
        />
        <Card
          img={CryptoTracker}
          title="Crypto Tracker"
          description="A web application made using React JS to view and filter all the latest crypto currency details."
          link="https://crypto-update.netlify.app/"
          linkText="Visit Website"
        />
        <Card
          img={CovidTracker}
          title="Covid-19 Tracker"
          description="An application to see all the Covid-19 statistics and latest news from all over the world. It also lets you see all the cases in Indian States aswell. It is open source and available on github."
          link="https://github.com/ad-dhawan/Covid19India_tracker"
          linkText="View Source Code"
        />
        <Card
          img={Zombaze}
          title="Zombaze"
          description="An unbeatable FPS survival game in which the player have to solve the maze with zombies in it. This game uses AI in zombies to find and chase the player."
          link="https://github.com/ad-dhawan/ZombieWorld_Unity"
          linkText="View Source Code"
        />
        <Card
          img={Graphics}
          title="Graphic Designing"
          description="Yea, Sometimes I Design Too"
          link="https://www.instagram.com/anonymous.digiart/"
          linkText="View Artwork"
        />
      </div>
    </div>
  );
};

export default Projects;
