import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import CreateUser from "./pages/CreateUser";
import CreateProfile from "./pages/CreateProfile";
import ProfilePage from "./pages/ProfilePage";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import CostSavingsRecovery from "./pages/CostSavingsRecovery";
import DataAutomation from "./pages/DataAutomation";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/create-profile" element={<CreateProfile />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/cost-savings-recovery" element={<CostSavingsRecovery />} />
      <Route path="/data-automation" element={<DataAutomation />} />
      <Route path="/software-development" element={<SoftwareDevelopment />} />
    </Routes>
  );
}

export default App;