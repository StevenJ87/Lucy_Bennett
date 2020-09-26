import React from "react";
import { Link } from "react-router-dom"
import './index.css';

function Nav() {
  return (
    <ul className="nav justify-content-center">
      <li>
        <Link className="nav-link" to="short">
          Short Cuts
      </Link>
      </li>
      <li>
        <Link className="nav-link" to="/medium">
          Medium Cuts
      </Link>
      </li>
      <li>
        <Link className="nav-link" to="/long">
          Long Cuts
      </Link>
      </li>
      <li>
        <Link className="nav-link" to="/natural">
          Natural Colors
      </Link>
      </li>
      <li>
        <Link className="nav-link" to="/fashion">
          Fashion Colors
      </Link>
      </li>
      <li>
        <Link className="nav-link" to="/styles">
          Styles
      </Link>
      </li>
    </ul>
  );
}

export default Nav;
