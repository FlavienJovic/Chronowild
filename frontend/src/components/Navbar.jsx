import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="./src/assets/logo_chrono.png" alt="best logo ever" />
      </Link>
      <nav>
        <ul>
          <Link to="/">
            <li className="listPointer">Accueil</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
