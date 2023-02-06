import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

import "./register-login.css";
import InputFormat from "../Input-and-textarea-Formats/InputFormat";

import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/counterSlice";

const Login = () => {
  const dispatch = useDispatch(); // dispach

  const push = useNavigate();

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
          sessionStorage.setItem("userId", response.data.id);
          dispatch(addTodo(response.data.destination)); //redux
          return push("/");
        } else {
          setErr(response.data.msg);
        }
      });
    }
  };
  return (
    <div>
      <div className="form-container">
        <div className="regForm">
          <h1 className="header">Log in</h1>
          <h4 className="errDisplayer">{err}</h4>
          <div className="inputdisplayer">
            <label>Name </label>

            <InputFormat
              InputClassName="inputPl"
              TextType="text"
              NameOfInput="name"
              OnPlaceHolder="Abebe kebede"
              AutoOption="off"
              OnChangingInputs={getName}
              ValueOfInput={name}
            />
          </div>
          <div className="inputdisplayer">
            <label>Password</label>

            <InputFormat
              InputClassName="inputPl"
              TextType="password"
              NameOfInput="password"
              OnPlaceHolder="**********"
              required
              OnChangingInputs={getPassword}
              ValueOfInput={password}
            />
          </div>

          <button className="submit-btn" onClick={submitt}>
            Login
          </button>
          <div>
            <div>
              <Link to="/formating/password" style={{ color: "lightblue" }}>
                Forgot password ?
              </Link>
            </div>
            <p style={{ color: "white" }}>
              If you don't have an account{" "}
              <Link to="/register" style={{ color: "lightblue" }}>
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
