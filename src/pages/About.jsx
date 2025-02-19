import "../styles.css";
import Navbar from "../components/Navbar";
import WhoWeAreSection from "../components/WhoWeAreSection"; // Your about section component
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <WhoWeAreSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;
