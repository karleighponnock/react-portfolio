import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg text">
      <Link className="navbar-brand text" to="react-portfolio/">
        Karleigh Ponnock
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={
                window.location.pathname === "/portfolio" || window.location.pathname === "react-portfolio/"
                  ? "nav-link active text"
                  : "nav-link text"
              }
            >
              Portfolio
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active text" : "nav-link text"}
            >
             Contact
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
