import "./App.css";
import { Jumbotron, Container } from "react-bootstrap";
import Navbar from "./NavBar";
import Home from "./Home";
import Whale from "./Whale";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
      <Home />
      <Whale />
    </div>
  );
}

export default App;
