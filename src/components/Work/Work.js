import "./Work.css";
import Timeline from "./Timeline";
import Flip from "react-reveal/Flip";

const Work = () => {
  return (
    <div class="work" id="experience">
      <h1>Experience</h1>
      <Flip bottom>
        <Timeline />
      </Flip>
    </div>
  );
};

export default Work;
