import { Link } from "react-router-dom";
import Service from "./Service";

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
  export default Mechanic;