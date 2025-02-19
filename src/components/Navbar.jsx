import { useState } from "react";
import "../styles.css";
import { Menu, X } from "lucide-react"; // Menu (☰) and Close (X) icons

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
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      {/* Right Side: Login & Hamburger */}
      <div className="nav-right">
        <a href="#login" className="login-btn">Log In</a>

        {/* Hamburger Menu (Only Visible on Mobile) */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


