import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
      <ul></ul>
    </div>
  );
};
const Results = () => {
  return (
    <div>
      <h2> Results</h2>

      <table className="resultsTable">
        <tbody>
          <tr>
            <td>WBC</td>
            <td>RBC</td>
            <td>HGB</td>
            <td>HCT</td>
            <td>MCV</td>
            <td>MCH</td>
            <td>MCHC</td>
            <td>PLT</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const QC = () => {
  return (
    <div>
      <h2> Q.C.</h2>
      <ul>
        <li>
          <Link to="">1.Automatic</Link>
        </li>
        <li>
          <Link to="">2.Analysys</Link>
        </li>
        <li>
          <Link to="">3.Prt.Targets</Link>
        </li>
        <li>
          <Link to="">4.Statistics</Link>
        </li>
        <li>
          <Link to="">5.Graphs</Link>
        </li>
      </ul>
    </div>
  );
};
const Calibration = () => {
  return (
    <div>
      <h2>Calibration</h2>
      <ul>
        <li>
          <Link to="">1.Auto calibration</Link>
        </li>
        <li>
          <Link to="">2.Coefficients</Link>
        </li>
      </ul>
    </div>
  );
};
const Service = () => {
  return (
    <div>
      <h2>Service</h2>
      <ul>
        <li>
          <Link to="">1.Backflush</Link>
        </li>
        <li>
          <Link to="">2.Drain chambers </Link>
        </li>
        <li>
          <Link to="/primebottleunit">3.Prime Bottle Unit</Link>
        </li>
        <li>
          <Link to="">4.Concentrated Cleaning</Link>
        </li>
        <li>
          <Link to="/mechanic">5.Mechanic </Link>
        </li>
        <li>
          <Link to="/cycle">6.Cycle # </Link>
        </li>
        <li>
          <Link to="/mechanic">7.Technician </Link>
        </li>
        <li>
          <Link to="/mechanic">8.Autoclean </Link>
        </li>
      </ul>
    </div>
  );
};

const Primebottleunit = () => {
  return (
    <div>
      <Service />
      <h2>Prime bottle unit</h2>
      <ul>
        <li>
          <Link to="">1.All reagents</Link>
        </li>
        <li>
          <Link to="">2.Dulient</Link>
        </li>
        <li>
          <Link to="">3.Lyse</Link>
        </li>
        <li>
          <Link to="/cleanerpack">4.Cleaner Pack unit</Link>
        </li>
      </ul>
    </div>
  );
};
const Cleanerpack = () => {
  return (
    <div>
      <Primebottleunit />
      <h2>Cleaner Pack</h2>
      <ul>
        <li>
          <Link to="">1.Chg. Pack</Link>
        </li>
        <li>
          <Link to="">2.Capacity</Link>
        </li>
        <li>
          <Link to="">3.Prime Pack</Link>
        </li>
      </ul>
    </div>
  );
};
const Mechanic = () => {
  return (
    <div>
      <Service />
      <h2>Mechanic</h2>
      <ul>
        <li>
          <Link to="">1.Check sensor</Link>
        </li>
        <li>
          <Link to="">2.Needle U/D </Link>
        </li>
        <li>
          <Link to="">3.Carriage L/R </Link>
        </li>
        <li>
          <Link to="">4.Liquid syringe</Link>
        </li>
        <li>
          <Link to="">5.Pressure syringe</Link>
        </li>
        <li>
          <Link to="">6.Park</Link>
        </li>
      </ul>
    </div>
  );
};

const Cycle = () => {
  return (
    <div>
      <Service />
      <h2>Cycle #</h2>
      <ul>
        <li>
          <Link to="">1.Startup</Link>
        </li>
        <li>
          <Link to="">2.Standby </Link>
        </li>
        <li>
          <Link to="">3.CBC </Link>
        </li>
      </ul>
    </div>
  );
};
const Setup = () => {
  return (
    <div>
      <h2>Setup</h2>
      <ul>
        <li>
          <Link to="">1.Results</Link>
        </li>
        <li>
          <Link to="">2.Chg. Lab. Limits </Link>
        </li>
        <li>
          <Link to="">3.Special </Link>
        </li>
        <li>
          <Link to="">4.Date Time</Link>
        </li>
        <li>
          <Link to="">5.Host options</Link>
        </li>
        <li>
          <Link to="">5.Barcode</Link>
        </li>
      </ul>
    </div>
  );
};
