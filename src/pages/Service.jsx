import { Link } from "react-router-dom";

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
  
  

  export default Service;