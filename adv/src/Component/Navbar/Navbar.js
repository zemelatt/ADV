import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

import "./navbar.css";
import "./humburger.css";
const Navbar = () => {
  const [burger, setBerger] = useState("humburger ");
  const [menuClick, setMenu] = useState(false);
  const [dropdown, setDrop] = useState(false);
  const [dropClass, setClass] = useState("hidden");
  const drop = () => {
    if (!dropdown) {
      setDrop(true);
      setClass("dropdown");
    } else {
      setDrop(false);
      setClass("hidden");
    }
  };

  const updatemenu = () => {
    if (!menuClick) {
      setBerger("humburger is-active");
      setMenu(true);
    } else {
      setBerger("humburger");
      setMenu(false);
    }
  };
  const sidebar = () => {
    setBerger("humburger");
    setMenu(false);
  };
  const outt = () => {
    setDrop(false);
    setClass("hidden");
  };
  return (
    <>
      <div id="navbar">
        <nav onMouseLeave={outt}>
          <h3 className="logo">
            <a href="/">ADV</a>
          </h3>
          <AiOutlineDown className="nav drop" onMouseEnter={drop} />
          <div onMouseLeave={drop} className={dropClass}>
            <Link to="/register">
              <p style={{ color: "blue" }}>Be a Member</p>
            </Link>
          </div>

          <NavLink to="/add-adventure" className="nav">
            Add
          </NavLink>

          <NavLink to="/adv" className="nav">
            Adventure
          </NavLink>
          <NavLink to="/" className="nav">
            Home
          </NavLink>
        </nav>
        <button className={burger} onClick={updatemenu}>
          <div className="bar"></div>
        </button>
      </div>
      {menuClick && (
        <div className="side-bar" onClick={sidebar}>
          <nav className="side-Option">
            <NavLink to="/home" id="burger-op">
              Home
            </NavLink>
            <NavLink to="/adv" id="burger-op">
              Adventure
            </NavLink>
            <NavLink to="/abou" id="burger-op">
              About
            </NavLink>
            <NavLink to="/abou" id="burger-op">
              Be a member
            </NavLink>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
