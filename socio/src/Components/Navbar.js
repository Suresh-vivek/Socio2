import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="outer-div">
      <div className="inner-left">
        <img src={require("../Assets/logo.png")} alt="Logo" />
        <b>Empowering the next Generation</b>
      </div>

      <div className="inner-right">
        <div class="links">
          <a href="#">
            <b>Contact Us </b>
          </a>

          <a href="#">
            <b>Donate</b>{" "}
          </a>

          <a href="#">
            <b>Download</b>
          </a>
        </div>

        <div>
          <img
            src={require("../Assets/children.png")}
            class="right-img"
            alt="children"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
