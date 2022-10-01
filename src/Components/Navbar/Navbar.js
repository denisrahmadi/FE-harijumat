import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Image/logo_hari_jumat.jpeg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top warna-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} width="128" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item ">
              <Link to={"/"} className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/class"} className="nav-link">
                Class
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/contact"} className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item text-end text-white">
              <Link to={"/login"} className="nav-link">
                Sign In
              </Link>
            </li>
            <h2>|</h2>
            <li className="nav-item text-end text-white">
              <Link to={"/regist"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
