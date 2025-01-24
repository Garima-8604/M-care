import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NearbyHospitals.css";

const NearbyHospitals = ({ location }) => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // State to store any error messages

  const fetchHospitals = async (location) => {
    setLoading(true);
    setError(""); // Reset error on new request

    try {
      const GEOCODE_API_KEY = process.env.REACT_APP_GOOGLE_GEOCODE_API_KEY;
const PLACES_API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
      // Step 1: Fetch Latitude and Longitude from Geocoding API
      const geocodeResponse = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json`,
        {
          params: {
            address: location,
            key: GEOCODE_API_KEY,
          },
        }
      );

      console.log("Geocoding API Response:", geocodeResponse.data);

      // Check if there are any results
      if (!geocodeResponse.data.results.length) {
        setError("Location not found. Please enter a valid city.");
        setHospitals([]);
        return;
      }

      // Extract latitude and longitude from geocode response
      const { lat, lng } = geocodeResponse.data.results[0].geometry.location;

      // Step 2: Fetch Nearby Hospitals using Places API
      const placesResponse = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
        {
          params: {
            location: `${lat},${lng}`,
            radius: 5000, // radius in meters
            type: "hospital", // we are looking for hospitals
            key: PLACES_API_KEY,
          },
        }
      );

      console.log("Places API Response:", placesResponse.data);

      if (placesResponse.data.status !== "OK") {
        setError("No hospitals found in this area.");
        setHospitals([]);
        return;
      }

      // Transform and Set Data
      const hospitalDetails = placesResponse.data.results.map((hospital) => ({
        id: hospital.place_id,
        name: hospital.name,
        address: hospital.vicinity,
        rating: hospital.rating || "N/A",
      }));

      setHospitals(hospitalDetails);
    } catch (error) {
      console.error("Error fetching hospitals:", error);
      setError("An error occurred while fetching data.");
      setHospitals([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch hospitals when location changes
  useEffect(() => {
    if (location) {
      fetchHospitals(location);
    }
  }, [location]);

  return (
    <div className="nearby-hospitals">
      {loading && <p>Loading hospitals...</p>}
      {error && <p className="error-message">{error}</p>} {/* Display any error messages */}
      {hospitals.length > 0 ? (
        <ul>
          {hospitals.map((hospital) => (
            <li key={hospital.id} className="hospital-item">
              <h3>{hospital.name}</h3>
              <p>{hospital.address}</p>
              <p>Rating: {hospital.rating}</p>
            </li>
          ))}
        </ul>
      ) : !loading && !error ? (
        <p>No hospitals found for "{location}".</p>
      ) : null}
    </div>
  );
};

export default NearbyHospitals;
