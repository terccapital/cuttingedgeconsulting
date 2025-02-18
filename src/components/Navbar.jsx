import { Link } from "react-router-dom";
import "../styles.css"; // Import global styles

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div>
        <Link to="/">
          <img src="/cec-logo-white.png" alt="Cutting Edge Logo" className="logo" />
        </Link>
      </div>

      {/* Links */}
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

      {/* Login Button */}
      <div>
        <Link to="/login" className="login-btn">Log In</Link>
      </div>
    </nav>
  );
};

export default Navbar;

