import "../styles/Global.css";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BusDiagSection from "../components/BusDiagSection";
import UnlockPotential from "../components/UnlockPotential";
import StreamlineSection from "../components/StreamlineSection";
import ContactUsSection from "../components/ContactUsSection";
import WhoWeAreSection from "../components/WhoWeAreSection"; // Your about section component
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer"; 

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BusDiagSection />
      <UnlockPotential />
      <StreamlineSection />
      <WhoWeAreSection />
      <TeamSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}

export default Home;