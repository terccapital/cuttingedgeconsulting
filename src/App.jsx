import "./styles.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BusDiagSection from "./components/BusDiagSection";
import UnlockPotential from "./components/UnlockPotential";
import StreamlineSection from "./components/StreamlineSection";
import ContactUsSection from "./components/ContactUsSection";
import Footer from "./components/Footer"; 

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BusDiagSection />
      <UnlockPotential />
      <StreamlineSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}

export default App;

