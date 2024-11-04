import "./Navbar.css";
import logo from "../../assets/logo.png";
import Coin from "../Coin/Coin";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href={logo}>
            <img src={logo} alt="A guy with a bat" />
          </a>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#teams">Teams</a>
          <a href="#schedules">Schedules</a>
          <Coin></Coin>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
