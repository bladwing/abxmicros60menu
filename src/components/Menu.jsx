import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="MainMenu">
      <ul>
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
          <Link to="/service">4.Service</Link>
        </li>
        <li>
          <Link to="/setup">5.Setup</Link>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
