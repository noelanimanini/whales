import React from "react";
import { useSelector } from "react-redux";

function Map() {
  const whales = useSelector((state) => state.whales);
  console.log(whales);
  return <div>hello</div>;
}

export default Map;
