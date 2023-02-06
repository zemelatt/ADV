import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";

import fetchPosts from "./FetchApi";
import List from "./list";

import "./adv.css";

const Adventure = () => {
  const toKnowRole = useSelector((state) => state.userRole);
  const [admin, setAdmin] = useState(false);

  const incomingRole = JSON.stringify(toKnowRole.todoReducer[0]);
  const adminRole = JSON.stringify({ text: "admin" });

  useEffect(() => {
    function isAdmin() {
      if (incomingRole == adminRole) {
        setAdmin(true);
      } else {
        setAdmin(false);
      }
    }
    isAdmin();
  });

  const { data, error, isError, isLoading } = useQuery("users", fetchPosts);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <>
      <List advs={data} admin={admin} />
    </>
  );
};

export default Adventure;
