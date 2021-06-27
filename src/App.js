import "./App.css";
import Navbar from "./NavBar";
import Home from "./Home";
import Whale from "./Whale";
import Map from "./WhaleMap";
import history from "./history";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter history={history}>
        <Navbar />

        <Switch>
          <Route exact path="/" render={() => <Home />} />

          <Route exact path="/whalelocations" render={() => <Map />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
