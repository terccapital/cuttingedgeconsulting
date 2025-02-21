import { useState } from "react";
import "../styles/Navbar.css";
import "../styles/Global.css";
import { Menu, X } from "lucide-react"; // Menu (☰) and Close (X) icons
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src="/cec-logo-white.png" alt="Logo" />
      </div>

      {/* Desktop Links (Hidden on Mobile) */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      {/* Right Side: Login & Hamburger */}
      <div className="nav-right">
        {/* Direct Link to Login Page */}
        <Link to="/login" className="login-btn">
          Log In
        </Link>

        {/* Hamburger Menu (Only Visible on Mobile) */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>Log In</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


