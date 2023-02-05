import React, { useState } from "react";

const LoginErr = ({ classs, classs2, err, setclass2 }) => {
  return (
    <div className={classs2}>
      <div className={classs}>
        <h3 style={{ color: "black" }}>{err}</h3>
        <button className="portBtn" onClick={() => setclass2("home")}>
          <h1 style={{ color: "white" }}>OK</h1>
        </button>
      </div>
    </div>
  );
};

export default LoginErr;
