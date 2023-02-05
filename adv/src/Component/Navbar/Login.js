import React from "react";
import { NavLink, Link } from "react-router-dom";

const Login = ({ activeOption, sidebar, login, userId, logout }) => {
  return (
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
  );
};

export default Login;
