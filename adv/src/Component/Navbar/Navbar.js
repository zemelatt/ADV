import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AiFillCaretUp, AiFillFacebook } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

import Axios from "axios";
import "./navbar.css";
import "./humburger.css";

import { useSelector } from "react-redux";
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
      // setMenu(true);
    } else {
      setOption("");
      setBerger("humburger");
      // setMenu(true);
    }
  };
  const sidebar = () => {
    setBerger("humburger");
    setMenu(false);
  };
  const logout = () => {
    sessionStorage.clear("role");
    sessionStorage.clear("userId");
    localStorage.clear("persist:root");

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
      {/* {menuClick && ( */}

      <nav onClick={sidebar} className={`side-Option ${activeOption}`}>
        <NavLink to="/" id="burger-op">
          Home
        </NavLink>
        <NavLink to="/adv" id="burger-op">
          Adventure
        </NavLink>
        <NavLink to="/add-adventure" id="burger-op">
          Add Adventure
        </NavLink>
        {login ? (
          <>
            <p>
              <Link id="op2" to={`/my-adv/${userId}`}>
                Your Adventures
              </Link>
            </p>
            <p
              id="op2"
              onClick={logout}
              style={{ background: "brown", cursor: "pointer" }}
            >
              logout
            </p>
          </>
        ) : (
          <>
            <Link id="op2" to="/login">
              Login
            </Link>
          </>
        )}
      </nav>
      {/* )} */}
    </>
  );
};

export default Navbar;
