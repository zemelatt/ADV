import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import "./register.css";

const Register = () => {
  const push = useNavigate();
  const [err, setErr] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const getName = (e) => {
    setName(e.target.value);
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const getPassword2 = (e) => {
    setPassword2(e.target.value);
  };
  const submitt = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password2", password2);
    const reg2x = /^[a-zA-Z_]+( [a-zA-Z+_]+)*$/;
    const emailValidator = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    let nameRegex = reg2x.test(name.trim());
    let nameLength = name.length;

    if (nameLength < 4) {
      setErr("Err: name should be more than 3 characters");
    } else if (!emailValidator.test(email)) {
      setErr("Err: not valid email format");
    } else if (!nameRegex) {
      setErr("Err: charcter pattern err!");
    } else if (password !== password2) {
      setErr("Err: password doesn't much!");
    } else {
      Axios.post("http://localhost:2222/member", formData).then((response) => {
        setErr(response.data.msg);
      });
      return push("/login");
    }
  };
  return (
    <div>
      <div className="form-container">
        <div className="regForm">
          <h4 className="errDisplayer">{err}</h4>
          <div className="inputdisplayer">
            {" "}
            <label>Name </label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Abebe kebede"
              value={name}
              onChange={getName}
            />
          </div>
          <div className="inputdisplayer">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              autoComplete="off"
              required
              onChange={getEmail}
            />
          </div>
          <div className="inputdisplayer">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              autoComplete="off"
              required
              onChange={getPassword}
            />
          </div>
          <div className="inputdisplayer">
            <label>Repeat your password</label>
            <input
              type="password"
              name="password2"
              value={password2}
              autoComplete="off"
              required
              onChange={getPassword2}
            />
          </div>

          <button className="submit-btn" onClick={submitt}>
            Submit
          </button>
          <p>
            If you have an account already{" "}
            <Link to="/login" style={{ color: "lightblue" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
