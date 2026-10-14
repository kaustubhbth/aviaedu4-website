import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="page-banner">
      <div className="container">
        <h1>Page not found</h1>
        <p>
          The page you are looking for may have moved or is no longer available.
        </p>
        <Link className="home-btn" to="/">
          Return to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
