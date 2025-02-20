import "../styles/HeroSection.css"; // Make sure styles are applied
import "../styles/Global.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>
        Transform Data Into <br />
        <span className="highlight">Strategic Solutions</span>
      </h1>
      <p>
        Data difficulties holding your business back? We help businesses unlock 
        actionable insights through advanced data analytics, automation, and process optimization.
      </p>
    </section>
  );
};

export default HeroSection;