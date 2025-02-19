import "./styles.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BusDiagSection from "./components/BusDiagSection";
import UnlockPotential from "./components/UnlockPotential";
import StreamlineSection from "./components/StreamlineSection";
import ContactUsSection from "./components/ContactUsSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BusDiagSection />
      <UnlockPotential />
      <StreamlineSection />
      <ContactUsSection />
    </div>
  );
}

export default App;

