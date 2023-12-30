import { Link } from "react-router-dom";
import "../styles/NotFound.css"

function NotFound() {
  return (
    <div className="notFound">
      <p>Error 404 Page Not Found</p>
      <p>
        <p>Go to <Link to={"/"}> Homepage</Link> </p>
      </p>
    </div>
  );
}

export default NotFound;
