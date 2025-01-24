import React, { useEffect, useState } from "react";
import "./HeroSection.css";


const HeroSection = () => {
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    const fetchAppointment = async () => {
      try {
        const response = await fetch("https://your-backend-url.com/api/appointments/next");
        const data = await response.json();

        if (data && data.success) {
          setAppointment(data.appointment);
        } else {
          setAppointment(null);
        }
      } catch (error) {
        console.error("Error fetching appointment:", error);
        setAppointment(null);
      }
    };

    fetchAppointment();
  }, []);

  return (
    <div className="hero-section">

      <div className="hero-center">
        <blockquote>
          “ASIA'S MOST TRUSTED <br /> PREGNANCY HEALTHCARE PLATFORM”
        </blockquote>
      </div>

    </div>
  );
};

export default HeroSection;
