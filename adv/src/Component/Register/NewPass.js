import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import "./register.css";

const NewPass = () => {
  const { id } = useParams();
  console.log("id " + id);
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
          <h1 style={{ color: "bisque" }}>Insert Password</h1>
          <h4 className="errDisplayer">{err}</h4>

          <div className="inputdisplayer">
            <label>New Password</label>
            <input
              className="inputPl"
              type="password"
              name="password"
              value={password}
              autoComplete="off"
              required
              onChange={getPassword}
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
