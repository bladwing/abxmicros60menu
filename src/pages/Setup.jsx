import { Link } from "react-router-dom";

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

  export default Setup;