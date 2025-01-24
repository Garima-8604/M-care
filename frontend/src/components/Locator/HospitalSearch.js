import React, { useState } from "react";
import axios from "axios";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";  // <-- Import useNavigate
import "./HospitalSearch.css";

const HospitalSearch = () => {
  const [location, setLocation] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // <-- Initialize navigate function

  const fetchHospitals = async () => {
    if (!location) return;

    try {
      const response = await axios.get(
        `http://localhost:5000/api/hospitals?location=${location}`
      );
      setHospitals(response.data || []);
    } catch (err) {
      setError("Error fetching hospitals.");
    }
  };

  const handleSearch = () => {
    setHospitals([]);
    setError(null);
    fetchHospitals();
  };

  const renderStars = (rating) => {
    if (isNaN(rating) || rating < 0 || rating > 5) return null;

    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <span className="stars">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} color="gold" />
        ))}
        {halfStar && <FaStarHalfAlt color="gold" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} color="gold" />
        ))}
      </span>
    );
  };

  const handleBookNow = (hospitalName) => {
    // Navigate to the hospital details page using the hospital name
    navigate(`/${hospitalName}`);
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
            onChange={(e) => setLocation(e.target.value)}
            className="location-input"
          />
        </div>
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      <div className="appointment-map">
        <iframe
          src={`https://www.google.com/maps?q=hospitals near ${location}&output=embed`}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="map"
        ></iframe>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="hospital-list">
        {hospitals.length > 0 ? (
          hospitals.map((hospital, index) => (
            <div key={index} className="hospital-card">
              <div className="hospital-photo-container">
                {hospital.photoUrl && (
                  <img
                    src={hospital.photoUrl}
                    alt={hospital.name}
                    className="hospital-photo"
                  />
                )}
              </div>
              <div className="hospital-details">
                <h2>
                  {hospital.name}
                  <button
                    className="book-now"
                    onClick={() => handleBookNow(hospital.name)} // Handle the "Book Now" click
                  >
                    Book Now
                  </button>
                </h2>
                <p>{hospital.vicinity}</p>
                <div className="rating">
                  Rating: {hospital.rating || "N/A"}{" "}
                  {hospital.rating && renderStars(hospital.rating)}
                </div>
                <p>Timings: {hospital.opening_hours?.open_now ? "Open Now" : "Closed"}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Please enter location</p>
        )}
      </div>
    </div>
  );
};

export default HospitalSearch;
