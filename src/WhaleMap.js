import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { store } from "./index";
import { reducer } from "./reducer";

function WhaleMap(props) {
  const [names, setNames] = useState({});
  const getUsers = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((x) => setNames(x));
  };

  const displayUsers = (names) => {
    console.log(names);
  };
  displayUsers(names);
  return <div>{getUsers()}</div>;
}

export default WhaleMap;
