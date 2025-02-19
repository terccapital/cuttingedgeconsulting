import "../styles.css";
import { Check } from "lucide-react"; // Import checkmark icon

const UnlockPotential = () => {
  return (
    <section className="unlock-section">
      {/* Title */}
      <h2 className="unlock-title">Unlock Your Full Potential</h2>

      {/* Paragraph */}
      <p className="unlock-description">
        From financial modeling to process automation, we turn complex data into actionable 
        strategies that drive growth and efficiency.
      </p>

      {/* Bullets + Button Container */}
      <div className="unlock-content">
        {/* Left Side: Bullet Points */}
        <div className="unlock-list-container">
          <ul className="unlock-list">
            <li><Check size={20} className="check-icon" /> Dynamic spreadsheet solutions in Microsoft Excel and Google Sheets</li>
            <li><Check size={20} className="check-icon" /> API integrations to enable the connection of multiple data silos</li>
            <li><Check size={20} className="check-icon" /> Data redundancy improvements and controls for efficient usage</li>
          </ul>
        </div>

        {/* Right Side: Centered Button */}
        <div className="unlock-btn-container">
          <a href="#learn-more" className="learn-more-btn">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default UnlockPotential;
