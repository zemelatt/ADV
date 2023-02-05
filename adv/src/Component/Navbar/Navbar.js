import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

import Axios from "axios";
import "./navbar.css";
import "./humburger.css";

import { useSelector } from "react-redux";
import Login from "./Login";

const Navbar = () => {
  const push = useNavigate();
  const toKnowRole = useSelector((state) => state.userRole);
  const userId = sessionStorage.getItem("userId");

  const [burger, setBerger] = useState("humburger ");
  const [menuClick, setMenu] = useState(false);
  const [dropdown, setDrop] = useState(false);
  const [dropClass, setClass] = useState("hidden");
  const [login, setlogin] = useState(false);

  const [sideUp, setUp] = useState(false);
  const [activeOption, setOption] = useState("");

  // chiking if  user is logged in
  useEffect(() => {
    (function getUser() {
      const incomingRole = JSON.stringify(toKnowRole.todoReducer[0]);
      const adminRole = JSON.stringify({ text: "admin" });
      if (incomingRole) {
        if (incomingRole == adminRole) {
          setlogin(true);
        } else if (incomingRole.length > 15) {
          setlogin(true);
        } else {
          setlogin(false);
        }
      } else {
        setlogin(false);
      }
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
    if (burger !== "humburger is-active") {
      setBerger("humburger is-active");
      setOption("activate");
      setDrop(false);
      setClass("hidden");
      setUp(false);
    } else {
      setOption(" ");
      setBerger("humburger");
    }
  };
  const sidebar = () => {
    setBerger("humburger");
    setMenu(false);
    setOption(" ");
  };
  const logout = () => {
    sessionStorage.clear("role");
    sessionStorage.clear("userId");
    sessionStorage.clear("persist:root");
    localStorage.clear("persist:root");
    localStorage.clear("delete");
    setlogin(false);
    Axios.get("http://localhost:2222/delete-token", {
      withCredentials: true,
    }).then(() => {
      window.location.reload("/");
    });
    push("/");
  };

  return (
    <>
      <div>
        <h1 className="infos">Share Your Adventures !!</h1>
      </div>
      <div id="navbar">
        <nav className="subnav">
          <h3 className="logo">
            <a href="/" style={{ color: "white" }}>
              ADV
            </a>
          </h3>
          {sideUp ? (
            <AiFillCaretUp className="navLink drop" onClick={drop} />
          ) : (
            <AiFillCaretDown className="navLink drop" onClick={drop} />
          )}
          <div className={dropClass}>
            <div onClick={() => setClass("hidden")}>
              <div>
                {login ? (
                  <>
                    <p>
                      <Link to={`/my-adv/${userId}`} style={{ color: "white" }}>
                        Your Adventures
                      </Link>
                    </p>
                    <p
                      onClick={logout}
                      style={{ cursor: "pointer", color: "red" }}
                    >
                      logout
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
          <NavLink to="/add-adventure" className="navLink">
            Add
          </NavLink>
          <NavLink to="/adv" className="navLink">
            Adventure
          </NavLink>
          <NavLink to="/" className="navLink">
            Home
          </NavLink>
        </nav>
        <button className={burger} onClick={updatemenu}>
          <div className="bar"></div>
        </button>
      </div>

      <Login
        sidebar={sidebar}
        activeOption={activeOption}
        login={login}
        userId={userId}
        logout={logout}
      />
    </>
  );
};

export default Navbar;
