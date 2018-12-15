import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark">
      <img className="logo" src="liberty.jpg" alt="Logo"/><h4>MedView</h4>
  </nav>
);

export default Navbar;
