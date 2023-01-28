import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import "./login.css";

const Login = () => {
  const push = useNavigate();
  // const [username, setUsername] = useRecoilState(textState); //recoil
  const [err, setErr] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const getName = (e) => {
    setName(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const submitt = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("password", password);

    if (!name.trim()) {
      setErr("Err: name is empty");
    } else if (!password.trim()) {
      setErr("Err: password is empty");
    } else {
      Axios.post("http://localhost:2222/login", formData, {
        withCredentials: true,
      }).then((response) => {
        if (response.data.msg == undefined) {
          sessionStorage.setItem("role", response.data.destination);
          sessionStorage.setItem("userId", response.data.id);
          // setUsername([response.data.destination, response.data.id]);
          return push("/");
        } else {
          setErr(response.data.msg);
        }
      });
    }
  };
  return (
    <div>
      <div className="login-container">
        <div className="logForm">
          <h1 style={{ color: "bisque" }}>Log in</h1>
          <h4 className="errDisplayer">{err}</h4>
          <div className="logdisplayer">
            <label className="labelName">Name </label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Abebe kebede"
              value={name}
              onChange={getName}
              id="inputlogin"
            />
          </div>
          <div className="logdisplayer">
            <label className="labelName">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="*********"
              autoComplete="off"
              required
              onChange={getPassword}
              id="inputlogin"
            />
          </div>

          <button className="login-btn" onClick={submitt}>
            Login
          </button>
          <p>
            If you don't have an account{"  "}
            <Link to="/register" style={{ color: "lightblue" }}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
