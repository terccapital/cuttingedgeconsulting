import "../styles/BusDiagSection.css";
import "../styles/Global.css";
import { useState, useEffect } from "react";

const BusDiagSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="busdiag-section">
      <img
        src={isMobile ? "/MobileBusinessDesign.png" : "/DesktopBusinessDesign.png"}
        alt="Business Diagnostic"
        className="responsive-image"
      />
    </section>
  );
};

export default BusDiagSection;