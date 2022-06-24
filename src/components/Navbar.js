import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import logo1 from "../logos/logo1.jpeg";
import menu2 from "../logos/menu2.png";
import close from "../logos/close.png";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            SYG
            <img src={logo1} alt="company symbol" className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <img src={close} alt="close" className="fas fa-times" />
            ) : (
              <img src={menu2} alt="menu2" className="fas fa-bars" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                PeopleWishes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Godwin
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up "
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                SIGN UP Mobile
              </Link>
            </li>
          </ul>
          {button && <Button>SIGN UP WEB</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
