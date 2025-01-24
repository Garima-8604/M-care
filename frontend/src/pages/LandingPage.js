import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProfileSection from "../components/LandingPage/ProfileSection";
import NavBar from "../components/LandingPage/NavBar";
import HeroSection from "../components/LandingPage/HeroSection";

const LandingPage = () => {
  const location = useLocation();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userEmail = location.state?.userEmail || JSON.parse(localStorage.getItem("user")).email;
        
        // Fetch profile data by email
        const response = await axios.get(`http://localhost:5000/api/profile/${userEmail}`);
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setProfileData(null); // Optionally reset profile data
        // setErrorMessage("Failed to load profile data. Please try again later.");
      }
    };
    

    fetchProfileData();
  }, [location.state]);

  if (!profileData) {
    return <p>Loading...</p>; // Add a loader here if desired
  }

  return (
    <div>
      <NavBar profileData={profileData} />
      <HeroSection />
      <ProfileSection profileData={profileData} />
    </div>
  );
};

export default LandingPage;
