import React from "react";
import { connect, useSelector } from "react-redux";
import { store } from "./index";

function WhaleMap(props) {
  console.log(props);
  // const test = () => {
  //   return props.whales.map((x) => (
  //     <div key={x.name} id={x.id}>
  //       {x.species}{" "}
  //     </div>
  //   ));
  // };
  return <div>something</div>;
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    whales: state.whales,
  };
};

export default connect(mapStateToProps, null)(WhaleMap);
