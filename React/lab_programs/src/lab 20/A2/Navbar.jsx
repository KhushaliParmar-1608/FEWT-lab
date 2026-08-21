import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Detail from "./Detail";
import Login from "./Login";

function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/detail">Detail</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
