import "../styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Side - Logo */}
      <img src="/cec-logo-white.png" alt="Cutting Edge Consulting" className="footer-logo" />

      {/* Right Side - Contact Info */}
      <div className="footer-info">
        <p>contact@cuttingedgeconsulting.tech</p>
        <p>(704) 941-8346</p>
        <p>Charlotte, NC</p>
      </div>
    </footer>
  );
};

export default Footer;
