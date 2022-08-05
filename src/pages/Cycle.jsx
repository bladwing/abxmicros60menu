import { Link } from "react-router-dom";
import Service from "./Service";


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

  export default Cycle;