import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

import "../adv.css";
import List from "../list";

const MyAdv = () => {
  const { id } = useParams();
  const [advs, setAdvs] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:2222/my-adv/${id}`, {
      withCredentials: true,
    }).then((response) => {
      setAdvs(response.data);
    });
  }, []);

  return (
    <div>
      <List advs={advs} admin={true} />
    </div>
  );
};

export default MyAdv;
