import React, { useState, useRef } from "react";
import "./AppointmentSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import NearbyHospitals from "./NearbyHospitals"; // Import the NearbyHospitals component

const AppointmentSearch = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const dateInputRef = useRef(null); // Ref to trigger the date picker

  // Function to handle location change
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Function to handle date change
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  // Function to trigger date picker on click
  const openDatePicker = () => {
    dateInputRef.current.showPicker(); // Trigger the native date picker
  };

  // Function to handle Enter button click to send request
  const handleSearch = () => {
    if (location.trim() !== "") {
      // Trigger the search for nearby hospitals
      console.log("Fetching hospitals for location:", location);
    } else {
      alert("Please enter a location.");
    }
  };

  return (
    <div>
      <div className="appointment-search">
        <div className="input-container">
          <FontAwesomeIcon icon={faLocationDot} className="icon" />
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={handleLocationChange}
            className="location-input"
          />
        </div>
        <div className="input-container">
          <FontAwesomeIcon
            icon={faCalendar}
            className="icon"
            onClick={openDatePicker} // Trigger date picker on click
          />
          <input
            ref={dateInputRef}
            type="date"
            value={date}
            onChange={handleDateChange}
            className="date-input"
            style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }} // Remove default icon
          />
        </div>
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>

      {/* Pass location to NearbyHospitals to fetch data */}
      <NearbyHospitals location={location} />
    </div>
  );
};

export default AppointmentSearch;
