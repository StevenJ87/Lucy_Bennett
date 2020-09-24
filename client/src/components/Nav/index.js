import React from "react";
import { Link } from "react-router-dom"
import './index.css';

function Nav() {
  return (
    <ul className="nav justify-content-center">
      <li>
        <Link className="nav-link" to="/">
          About
      </Link>
      </li>
      <li>
        <Link className="nav-link" to="/projects">
          Projects
      </Link>
      </li>
    </ul>
  );
}

export default Nav;
