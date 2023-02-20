import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Axios from "axios";

import "./register-login.css";
import InputFormat from "../Input-and-textarea-Formats/InputFormat";

const NewPass = () => {
  const { id } = useParams();
  const push = useNavigate();
  const [err, setErr] = useState("");
  const [password, setPassword] = useState("");
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const submitt = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("password", password);
    if (!password.trim()) {
      setErr("Err: pls insert the new password !");
    } else {
      Axios.post(`http://localhost:2222/newPassword/${id}`, formData).then(
        (response) => {
          setErr(response.data.msg);
        }
      );
      return push("/login");
    }
  };
  return (
    <div>
      <div className="form-container">
        <div className="regForm">
          <h1 className="header">Insert Password</h1>
          <h4 className="errDisplayer">{err}</h4>

          <div className="inputdisplayer">
            <label>New Password</label>
            <InputFormat
              InputClassName="inputPl"
              TextType="password"
              NameOfInput="password"
              OnPlaceHolder="Your New Password"
              OnChangingInputs={getPassword}
              ValueOfInput={password}
            />
          </div>

          <button className="submit-btn" onClick={submitt}>
            New Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPass;
