import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

function JumbotronContainer() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Welcome to Whaluck!</h1>
          <p>A place track resident whales in the puget sound</p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default JumbotronContainer;
