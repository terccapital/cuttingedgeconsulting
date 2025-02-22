import "../styles/ProfilePage.css";
import "../styles/Global.css";
import { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch Profile on Load
  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (error) {
          console.error("Error fetching profile:", error.message);
        } else {
          setProfile(data);
        }
      }
      setLoading(false);
    };

    fetchProfile();
  }, []);

  // Logout Handler
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login"); // Redirect back to login page
  };

  if (loading) return <div className="profile-page">Loading your profile...</div>;

  return (
    <div className="profile-page">
      <div className="profile-card">
        {/* Logo Section */}
        <div className="profile-logo-bar">
          <img src="/cec-logo-white.png" alt="CEC Logo" className="profile-logo" />
        </div>

        {/* Welcome Message */}
        <h1 className="profile-title">
          Welcome, {profile.first_name} {profile.last_name}!
        </h1>

        {/* Profile Details */}
        <div className="profile-info">
          <div className="profile-info-item">
            <strong>Company:</strong> {profile.company}
          </div>
          <div className="profile-info-item">
            <strong>Profile Type:</strong> {profile.user_type}
          </div>
        </div>

        {/* Logout Button */}
        <button onClick={handleLogout} className="logout-button">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
