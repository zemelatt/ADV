import React, { useState } from "react";
import Axios from "axios";
import "./register.css";

const Register = () => {
  const [err, setErr] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const getName = (e) => {
    setName(e.target.value);
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const submitt = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    const reg2x = /^[a-zA-Z_]+( [a-zA-Z+_]+)*$/;
    const emailValidator = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    let nameRegex = reg2x.test(name.trim());
    if (!name.trim()) {
      setErr("Err: name is empty");
    } else if (!emailValidator.test(email)) {
      setErr("Err: not valid email");
    } else if (!nameRegex) {
      setErr("Err: charcter err!");
    } else {
      Axios.post("http://localhost:2222/member", formData).then((response) => {
        setErr(response.data.msg);
      });
      setName("");
      setEmail("");
      setErr("");
    }
  };
  return (
    <div>
      <div className="form-container">
        <div className="regForm">
          <h4 className="errDisplayer">{err}</h4>

          <label>Name </label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Abebe kebede"
            value={name}
            onChange={getName}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            autoComplete="off"
            required
            onChange={getEmail}
          />

          <button className="submit-btn" onClick={submitt}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
