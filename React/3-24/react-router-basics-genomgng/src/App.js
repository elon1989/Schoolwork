import "./styles.css";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import { Switch, Route, Link, useHistory } from "react-router-dom";

export default function App() {
  const history = useHistory();
  return (
    <div className="App">
      <h1>Hello React Router</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
      <button
        onClick={() => {
          history.push("./about");
        }}
      >
        About
      </button>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={() => <About />} />
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}
