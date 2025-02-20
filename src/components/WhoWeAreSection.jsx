import "../styles/WhoWeAreSection.css";
import "../styles/Global.css";

const About = () => {
  return (
    <section className="about-section">
      {/* Left Side - Title & Paragraph */}
      <div className="about-text">
        <h2 className="about-title">Who We Are</h2>
        <p className="about-description">
        Cutting Edge Consulting LLC was founded in 2022 by Douglas Terc and Timin Sonik with one goal in mind - to bridge the expansive communication gap between Integrators and Operators.<br />
        <br />
        Operators work in a business day-to-day and often lack the time or resources to make tangible changes within the daily operations of the business. Our Integrators bring these resources to the table, working side-by-side with your Operators to drive tangible changes, streamline inefficiencies, and improve you processes.<br />
        <br />
        When you partner with Cutting Edge, you can utilize on one of our services, or combine multiple - we work with you each step of the way to innovate, revamp, and scale your business.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="about-image">
        <img src="/Charlotte-Pic-1.jpg" alt="About Us" />
      </div>
    </section>
  );
};

export default About;