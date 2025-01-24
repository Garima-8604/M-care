import React, { useState } from "react";
import AppointmentHeader from "./AppointmentHeader";
import AppointmentSearch from "./AppointmentSearch";
import AppointmentMap from "./AppointmentMap";
import "./Appointment.css";

const AppointmentContainer = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="appointment-container">
      <AppointmentHeader />
      <AppointmentSearch
        location={location}
        date={date}
        onLocationChange={handleLocationChange}
        onDateChange={handleDateChange}
      />
      <AppointmentMap location={location} />
    </div>
  );
};

export default AppointmentContainer;
