import React from "react";
import logo from "../images/HobbyCue Logo.svg";
import srchBtn from "../images/icons8_search 1.svg";
import explore from "../images/Group 2.svg";
import hoobies from "../images/Group 3.svg";
import save from "../images/save.svg";
import notifications from "../images/notifications.svg";
import cart from "../images/cart.svg";
import hlogo from "../images/hlogo.svg"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="search">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="input">
          <input type="text" placeholder="Search here..." />
          <button className="srchBtn">
            <img src={srchBtn} width="19px" />
          </button>
        </div>
        <div className="dropExplore">
        <div className="dropdown">
          <button
            className="explore"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={explore} alt="" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button className="dropdown-item" type="button">
                People Community
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Places - Venues
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Programs - Events
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Products - Store
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Blogs
              </button>
            </li>
          </ul>
        </div>
        </div>
        <div className="dropHobbie">
          <div className="dropdown">
            <button
              className="hoobies"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={hoobies} alt="" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button className="dropdown-item" type="button">
                  People - Community
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Places - Venues
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Programs - Events
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Products - Store
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Blogs
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <img src={save} alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={notifications} alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={cart} alt="" />
              </a>
            </li>
            <li>
            <button className="btn">
            Sign in
          </button>
            </li>
        
          </ul>
        </div>
        <div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
