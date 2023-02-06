import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

import "./register-login.css";
import InputFormat from "../Input-and-textarea-Formats/InputFormat";

const ForgotPass = () => {
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
      <div className="form-container">
        <div className="regForm">
          <h1 className="header">Formating password</h1>
          <h4 className="errDisplayer">{err}</h4>
          <div className="inputdisplayer">
            <label>Name </label>
            <InputFormat
              InputClassName="inputPl"
              TextType="text"
              NameOfInput="name"
              OnPlaceHolder="your registered name"
              AutoOption="off"
              OnChangingInputs={getName}
              ValueOfInput={name}
            />
          </div>
          <div className="inputdisplayer">
            <label>Email</label>

            <InputFormat
              InputClassName="inputPl"
              TextType="email"
              NameOfInput="email"
              OnPlaceHolder="your registered email"
              AutoOption="off"
              OnChangingInputs={getEmail}
              ValueOfInput={email}
            />
          </div>

          <button className="submit-btn" onClick={submitt}>
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
