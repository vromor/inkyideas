import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../asset/Logo.png";
import NavLinks from "./NavLinks";
import "./Navbar.css";

import background from "../../asset/background.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navbarStyle = {
    background: `url(${background})`, // Wrap the url in backticks and use template literals
    backgroundSize: "cover",
    height: "13vh",
    padding: "8px 0",
    color: "white",
  };

  return (
    <nav className="white" style={navbarStyle}>
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-8 fontcustom">
          <li className="colorm menu-item">
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li className="colorm menu-item">
            <Link to="/about" className="py-7 px-3 inline-block">
              About Us
            </Link>
          </li>
          <NavLinks />
          <li className="colorm menu-item">
            <Link to="/contact" className="py-7 px-3 inline-block">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile nav */}
        <ul
          className={`
          md:hidden white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 mobile-menu ${
            open ? "left-0" : "left-[-100%]"
          }
          `}
        >
          <li className="colorm menu-item">
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li className="colorm menu-item">
            <Link to="/about" className="py-7 px-3 inline-block">
              About Us
            </Link>
          </li>
          <NavLinks />
          <li className="colorm menu-item">
            <Link to="/contact" className="py-7 px-3 inline-block">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
