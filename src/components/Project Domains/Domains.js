
import "./Domains.scss";

const Domains = ({ img, title, active, setSelected, id }) => {
  return (
    <div class={active ? "main-item active" : "main-item"} onClick={() => setSelected(id)}>
      <img class="img" src={img} alt="" />
      <h1>{title}</h1>
    </div>
  );
};

export default Domains;
