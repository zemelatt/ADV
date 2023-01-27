import React, { useEffect, useState } from "react";
import "./adv.css";
import Axios from "axios";
import Img from "../../asset/file.json"; //overview for gusts
import AdvList from "./AdvList";
const Adventure = () => {
  const [allAdv, setAllAdv] = useState([]);
  const [admin, setAdmin] = useState(false);
  let all = [...Img, ...allAdv]; // overview for gusts
  const userId = sessionStorage.getItem("role");

  let role = sessionStorage.getItem("role");
  useEffect(() => {
    function isAdmin() {
      if (role == "admin") {
        setAdmin(true);
      } else {
        setAdmin(false);
      }
    }
    isAdmin();
  });

  useEffect(() => {
    Axios.get(`http://localhost:2222/all-adventures`, {
      withCredentials: true,
    }).then((result) => {
      setAllAdv(result.data);
    });
  }, [allAdv]);

  return (
    <>
      <AdvList all={all} admin={admin} />
    </>
  );
};

export default Adventure;
