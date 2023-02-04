import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import "./register.css";
import { nameValidator, EmailValidator, Password } from "./userValidator";

const Register = () => {
  const push = useNavigate();

  const [err, setErr] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [pass, setPass] = useState("none");
  const [Empass, setEmpass] = useState("none");
  const [passworderr, setPassworderr] = useState("none");

  const getName = (e) => {
    let isTrue = nameValidator(e.target.value.trim());
    if (isTrue) {
      setPass("pass");
      setErr("");
    } else {
      setPass("");
      setErr("name should be more than 5 characters");
    }
    setName(e.target.value);
  };
  const getEmail = (e) => {
    let nameRegex = EmailValidator(e.target.value);
    if (nameRegex) {
      setEmpass("Empass");
      setErr("");
    } else {
      setEmpass("");
      setErr("use valid email format");
    }
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
    const nameValidat = /^[a-zA-Z_]+( [a-zA-Z+_]+)*$/;
    const valdatedName = nameValidat.test(name);
    const emailValidator = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    let nameRegex = emailValidator.test(email.trim());

    console.log(valdatedName);
    if (!valdatedName) {
      setErr("Err: You cant use character in name !");
    } else if (name.trim().length < 6) {
      setErr("Err: name should be more than 5 letters!");
    } else if (password !== password2) {
      setErr("Err: password doesn't much!");
      setPassworderr("passERR");
    } else if (!nameRegex) {
      setErr("Err: use email format!");
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
          <h1 style={{ color: "bisque" }}>Register</h1>
          <h4 className="errDisplayer">{err}</h4>
          <div className="inputdisplayer">
            <label>Name </label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Abebe kebede"
              value={name}
              onChange={getName}
              className={`inputPl ${pass}`}
            />
          </div>
          <div className="inputdisplayer">
            <label>Email</label>
            <input
              className={`inputPl ${Empass}`}
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
              className={`inputPl ${passworderr}`}
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
              className={`inputPl ${passworderr}`}
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
          <div>
            <p style={{ color: "white" }}>
              If you have an account already{" "}
              <Link to="/login" style={{ color: "lightblue" }}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
