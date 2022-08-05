import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Setup from "./pages/Setup";
import Service from "./pages/Service";
import Mechanic from "./pages/Mechanic";
import Cycle from "./pages/Cycle";
import Calibration from "./pages/Calibrations";
import QC from "./pages/Qc";
import {Primebottleunit, Cleanerpack} from "./pages/ServiceSub"
import Results from "./pages/Results";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
      <Link to="/"> <h1>ABX Micros 60</h1></Link>
      <div className="MainMenu">
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/results">1.Reults</Link>
            </li>
            <li>
              <Link to="/qc">2.Q.C.</Link>
            </li>
            <li>
              <Link to="/calibration">3.Calibration</Link>
            </li>
            <li>
              {" "}
              <Link to="/service">4.Service</Link>
            </li>
            <li>
              {" "}
              <Link to="/setup">5.Setup</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/results" element={<Results />} />
          <Route path="/qc" element={<QC />} />
          <Route path="/calibration" element={<Calibration />} />
          <Route path="/service" element={<Service />} />
          <Route path="/primebottleunit" element={<Primebottleunit />} />
          <Route path="/cleanerpack" element={<Cleanerpack />} />
          <Route path="/mechanic" element={<Mechanic />} />
          <Route path="/cycle" element={<Cycle />} />
          <Route path="/Setup" element={<Setup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const MainMenu = () => {
  return (
    <div>
      <h2> Main Menu</h2>
    
    </div>
  );
};








