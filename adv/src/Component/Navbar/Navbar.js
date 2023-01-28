import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

import Axios from "axios";
import "./navbar.css";
import "./humburger.css";

const Navbar = () => {
  const userId = sessionStorage.getItem("userId");
  const navigate = useNavigate();

  const [burger, setBerger] = useState("humburger ");
  const [menuClick, setMenu] = useState(false);
  const [dropdown, setDrop] = useState(false);
  const [dropClass, setClass] = useState("hidden");
  const [login, setlogin] = useState(false);
  const [sideUp, setUp] = useState(false);

  // chiking if  user is logged in
  useEffect(() => {
    (function getUser() {
      let user = sessionStorage.getItem("role");
      if (user) {
        setlogin(true);
      }
      return user;
    })();
  });
  const drop = () => {
    if (!dropdown) {
      setDrop(true);
      setClass("dropdown");
      setUp(true);
    } else {
      setDrop(false);
      setClass("hidden");
      setUp(false);
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
  const logout = () => {
    sessionStorage.clear("role");
    sessionStorage.clear("userId");
    setlogin(false);
    Axios.get("http://localhost:2222/delete-token", {
      withCredentials: true,
    }).then((response) => {
      return navigate("/login");
    });
  };

  return (
    <>
      <div>
        <h1 className="infos">Share Your Adventures !!</h1>
      </div>
      <div id="navbar">
        <nav>
          <h3 className="logo">
            <a href="/" style={{ color: "white" }}>
              ADV
            </a>
          </h3>
          {sideUp ? (
            <AiFillCaretUp className="nav drop" onClick={drop} />
          ) : (
            <AiFillCaretDown className="nav drop" onClick={drop} />
          )}

          <div className={dropClass}>
            <div onClick={() => setClass("hidden")}>
              {" "}
              <div>
                {login ? (
                  <>
                    <p
                      onClick={logout}
                      style={{ cursor: "pointer", color: "red" }}
                    >
                      logout
                    </p>
                    <p>
                      <Link to={`/my-adv/${userId}`} style={{ color: "white" }}>
                        Your Adventures
                      </Link>
                    </p>
                  </>
                ) : (
                  <>
                    <Link to="/login" style={{ color: "white" }}>
                      Login
                    </Link>
                  </>
                )}
              </div>
            </div>
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
            <NavLink to="/" id="burger-op">
              Home
            </NavLink>
            <NavLink to="/adv" id="burger-op">
              Adventure
            </NavLink>
            <NavLink to="/about" id="burger-op">
              About
            </NavLink>
            <NavLink to="/login" id="burger-op">
              Create Account
            </NavLink>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
