
import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/LandingPage/NavBar";
import Header from "../components/Locator/Header";
import HospitalSearch from "../components/Locator/HospitalSearch";

const Locator = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // You can either use location.state or localStorage here
        const userEmail = JSON.parse(localStorage.getItem("user")).email;

        // Fetch profile data by email
        const response = await axios.get(`http://localhost:5000/api/profile/${userEmail}`);
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setProfileData(null); // Optionally reset profile data
      }
    };

    fetchProfileData();
  }, []);

  if (!profileData) {
    return <p>Loading...</p>; // Add a loader here if desired
  }

  return (
    <div>
      <NavBar profileData={profileData} />
      <Header />
      <HospitalSearch />
    </div>
  );
};

export default Locator;
