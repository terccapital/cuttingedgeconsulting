import "../styles.css";
import { Check } from "lucide-react"; // Import checkmark icon

const StreamlineSection = () => {
  return (
    <section className="streamline-section">
      {/* Title */}
      <h2 className="streamline-title">Streamline Inefficiencies Across Your Business</h2>

      {/* Paragraph */}
      <p className="streamline-description">
      Reduce operational waste and drive smarter performance with targeted tech, automation, and cost solutions.
      </p>

      {/* Bullets + Button Container */}
      <div className="streamline-content">
        {/* Left Side: Bullet Points */}
        <div className="streamline-list-container">
          <ul className="streamline-list">
            <li><Check size={20} className="stream-check-icon" /> Simplify complex processes to improve workflow and save time.</li>
            <li><Check size={20} className="stream-check-icon" /> Use analytics to uncover and resolve performance gaps.</li>
            <li><Check size={20} className="stream-check-icon" /> Identify cost-saving opportunities and enhance financial health.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StreamlineSection;
