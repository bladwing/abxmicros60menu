import { BrowserRouter as Router, Link } from "react-router-dom";
import Navigator from "./components/Navigator";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">
          <h1>ABX Micros 60</h1>
        </Link>
        <Menu />
        <Navigator />
      </Router>
    </div>
  );
}

export default App;

