import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import "./login.css";

const ForgotPass = () => {
  // dispach

  const push = useNavigate();

  const [err, setErr] = useState("");
  const [name, setName] = useState("");
  const [email, setPassword] = useState("");
  const getName = (e) => {
    setName(e.target.value);
  };

  const getEmail = (e) => {
    setPassword(e.target.value);
  };

  const submitt = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);

    if (!name.trim()) {
      setErr("Err: name is empty");
    } else if (!email.trim()) {
      setErr("Err: password is empty");
    } else {
      Axios.post("http://localhost:2222/formating/password", formData, {
        withCredentials: true,
      }).then((response) => {
        if (response.data.msg == undefined) {
          return push(`/new-password/${response.data.next[0].id}`);
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
          <h1 style={{ color: "bisque" }}>Formating password</h1>
          <h4 className="errDisplayer">{err}</h4>
          <div className="logdisplayer">
            <label className="labelName">Name </label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="your registered name"
              value={name}
              onChange={getName}
              id="inputlogin"
            />
          </div>
          <div className="logdisplayer">
            <label className="labelName">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="your registered email"
              autoComplete="off"
              required
              onChange={getEmail}
              id="inputlogin"
            />
          </div>

          <button className="login-btn" onClick={submitt}>
            Format
          </button>
          <p style={{ color: "white" }}>
            If you don't have an account{"   "}
            <Link to="/register" style={{ color: "lightblue" }}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
