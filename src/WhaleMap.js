import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { store } from "./index";
import { reducer } from "./reducer";

function WhaleMap(props) {
  const test = () => {
    console.log(props);
  };
  return <div>{test()}</div>;
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    whales: state.whales,
  };
};

export default connect(mapStateToProps, null)(WhaleMap);
