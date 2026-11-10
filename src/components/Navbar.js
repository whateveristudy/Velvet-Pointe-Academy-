import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";
import "../styles/NavBar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

const NavBar = () => {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (

    <div className="navbar">
      <div
        className="leftSide"
        id={openLinks ? "open" : "close"}
      >

        <Link to="/" className="logoLink">
          <img src={logo} alt="Velvet Pointe Academy" />
          <span>Velvet Pointe Academy</span>
        </Link>
        <div className="hiddenLinks">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/classes">Classes</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/apply">Apply Now</Link>

        </div>

      </div>

      <div className="rightSide">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/classes">Classes</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/apply" className="applyLink">
          Apply Now
        </Link>

        <button onClick={toggleNavbar} aria-label="Toggle navigation">
          <ReorderIcon />
        </button>

      </div>

    </div>
  );
};
export default NavBar;



