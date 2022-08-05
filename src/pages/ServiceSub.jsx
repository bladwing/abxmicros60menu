import { Link } from "react-router-dom";
import Service from "./Service";


export const Primebottleunit = () => {
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
  export const Cleanerpack = () => {
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