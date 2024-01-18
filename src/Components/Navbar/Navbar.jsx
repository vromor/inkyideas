import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../asset/inky.png";
import NavLinks from "./NavLinks";
import "./Navbar.css"
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navbarStyle = {
    background: "linear-gradient(to right, #ffffff, #fefae0)", // Professional color gradient
    color: "#370617",
    fontWeight: "bold",
    
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Light box shadow
  };

  return (
    <nav className="bg-darkblue text-white" style={navbarStyle}>
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="mr-8">
          <img src={Logo} alt="logo" className="h-12 cursor-pointer" />
        </Link>
        <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
        </div>
        <ul className="md:flex hidden items-center gap-6 fontcustom">
          <li className="menu-item">
            <Link to="/" className="text-lg hover:text-gray-400">
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/about" className="text-lg hover:text-gray-400">
              About Us
            </Link>
          </li>
          <NavLinks />
          <li className="menu-item">
            <Link to="/contact" className="text-lg hover:text-gray-400">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile nav */}
      <ul
        className={`
          md:hidden absolute top-16 w-full left-0 py-4 mobile-menu bg-gradient-to-r from-darkblue to-blue-600 transition-transform transform ${
            open ? "translate-x-0" : "-translate-x-full"
          }
        `}
      >
        <li className="menu-item">
          <Link to="/" className="text-lg block py-2 px-4 hover:bg-darkblue text-white"> {/* Improved hover effect */}
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/about" className="text-lg block py-2 px-4 hover-bg-darkblue text-white">
            About Us
          </Link>
        </li>
        <NavLinks />
        <li className="menu-item">
          <Link to="/contact" className="text-lg block py-2 px-4 hover:bg-darkblue text-white">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
