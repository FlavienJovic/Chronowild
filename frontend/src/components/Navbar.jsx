import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "white",
  };
  return (
    <div className="navbar">
      <Link to="/">
        <img src="/src/assets/logo_chrono.png" alt="best logo ever" />
      </Link>
      <Link to="/admin" style={linkStyle}>
        Administration
      </Link>
    </div>
  );
}

export default Navbar;
