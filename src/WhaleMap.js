import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { store } from "./index";
import { reducer } from "./reducer";

function WhaleMap(props) {
  const getUsers = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((x) => displayUsers(x));
  };

  const displayUsers = (x) => {
    let results = x.results;
    console.log(results);
    return Object.keys(results).map((x) => (
      <div>
        <h1>{results[x].name.first}</h1>
        {console.log(results[x].name.first)}
      </div>
    ));
  };
  return <div>{getUsers()}</div>;
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    whales: state.whales,
  };
};

export default connect(mapStateToProps, null)(WhaleMap);
