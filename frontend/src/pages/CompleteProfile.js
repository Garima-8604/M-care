import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./CompleteProfile.css";

const CompleteProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();


  // Initial form data with existing user data if available
  const [profileData, setProfileData] = useState(null);
  const user = location.state?.profileData;

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfileData({
      ...profileData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the profile data to the backend
      const response = await axios.post(
        "http://localhost:5000/api/update-profile",
        { email: user.email, ...profileData }
      );

      console.log("Profile updated:", response.data);
      // Navigate to the landing page or any other page after successful profile completion
      navigate("/user",  { state: { userEmail: response.data.user.email } });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  const handleSkip = () => {
    // Navigate to the landing page if user chooses to skip
    navigate("/user");
  };

  return (
    <div className="complete-profile-container">
      <div className="complete-profile-box">
        <h2 className="complete-profile-header">Complete Your Profile</h2>
        {error && <p className="error-message">{error}</p>}
        
        <form className="complete-profile-form" onSubmit={handleSubmit}>
          <label className="complete-profile-label">Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            className="complete-profile-input"
            value={profileData.age}
            onChange={handleChange}
            required
          />

          <label className="complete-profile-label">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            placeholder="Enter your weight"
            className="complete-profile-input"
            value={profileData.weight}
            onChange={handleChange}
            required
          />

          <label className="complete-profile-label">
            Are you currently pregnant?
          </label>
          <input
            type="checkbox"
            name="isPregnant"
            checked={profileData.isPregnant}
            onChange={handleChange}
            className="complete-profile-checkbox"
          />
          
          {profileData.isPregnant && (
            <>
              <label className="complete-profile-label">
                How many weeks pregnant are you?
              </label>
              <input
                type="number"
                name="pregnancyDuration"
                placeholder="Enter weeks pregnant"
                className="complete-profile-input"
                value={profileData.pregnancyDuration}
                onChange={handleChange}
                required
              />
            </>
          )}

          <label className="complete-profile-label">Do you have any allergies?</label>
          <input
            type="text"
            name="allergies"
            placeholder="Enter any allergies you have"
            className="complete-profile-input"
            value={profileData.allergies}
            onChange={handleChange}
          />

          <label className="complete-profile-label">
            Do you have any chronic diseases?
          </label>
          <input
            type="text"
            name="chronicDiseases"
            placeholder="Enter any chronic diseases"
            className="complete-profile-input"
            value={profileData.chronicDiseases}
            onChange={handleChange}
          />

          <button type="submit" className="complete-profile-button">
            Save Profile
          </button>

          <button
            type="button"
            className="skip-button"
            onClick={handleSkip}
          >
            Skip for Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfile;
