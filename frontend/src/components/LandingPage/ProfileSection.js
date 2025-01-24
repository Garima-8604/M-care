import React from "react";
import Blogs from "./Blogs";
import "./ProfileSection.css";

const ProfileSection = ({ profileData }) => {
  return (
    <div className="profile-section">
      {/* Profile Header Section */}
      <div className="profile-header">
        <h2>Welcome Back, {profileData.name || "User"}!</h2>
        <p className="fun-fact">
          ❤️ Fun Fact: The fetus is fully formed and about the size of a{" "}
          <strong>plum</strong>, measuring around{" "}
          <strong>5.4 cm</strong> long from head to bottom.
        </p>
      </div>

      {/* Explore Section */}
      <div className="explore-section">
        <h3 className="explore-header">Explore</h3>
        <div className="explore-options">
          <div className="explore-card">
            <img className="explore-card-image" src="phub.png"></img>
            <a href="/locator" className="card-link"><strong>Nearest Care Hub</strong></a>
          </div>
          <div className="explore-card">
            <img className="explore-card-image" src="ambulance.png"></img>
            <strong>Ambulance / Pick-up Request</strong>
          </div>
          <div className="explore-card">
            <img className="explore-card-image" src="lab.png"></img>
            <strong>Laboratory Testing</strong>
          </div>
          <div className="explore-card">
            <img className="explore-card-image" src="community.png"></img>
            <strong>Community Guidance</strong>
          </div>
          <div className="explore-card">
          <img className="explore-card-image" src="appoint.png"></img>
          <a href="/appointment" className="card-link"><strong>Online Appointment</strong></a>
          </div>
        </div>
      </div>

      {/* My Health Data Section */}
      <div className="my-health-data">
        <h3 className="health-data-header">My Health Data</h3>
        <div className="profile-details">
          <div className="profile-card">
            <h3>About Me</h3>
            <p><strong>Age:</strong> {profileData.age || "Not available"} years</p>
            <p><strong>Weight:</strong> {profileData.weight || "Not available"} kg</p>
            <p><strong>Start Date:</strong> {profileData.startDate || "Not available"}</p>
            <p><strong>Current Week:</strong> {profileData.currentWeek || "Not available"} weeks</p>
            <p><strong>Common Issue:</strong> {profileData.commonIssue || "Not available"}</p>
            <a href="/details/about-me" className="view-details">
              View Detail Analysis
            </a>
          </div>

          <div className="profile-card">
            <h3>Symptom Pattern</h3>
            <ul>
              {profileData.symptoms && profileData.symptoms.length > 0
                ? profileData.symptoms.map((symptom, index) => (
                    <li key={index}>{symptom}</li>
                  ))
                : <li>No symptoms reported</li>}
            </ul>
            <a href="/details/symptoms" className="view-details">
              View Detail Analysis
            </a>
          </div>

          <div className="profile-card">
            <h3>Blood Pressure</h3>
            <p><strong>Sys:</strong> {profileData.bloodPressure?.sys || "Not available"} mmHg</p>
            <p><strong>Dia:</strong> {profileData.bloodPressure?.dia || "Not available"} mmHg</p>
            <p><strong>Pulse:</strong> {profileData.bloodPressure?.pulse || "Not available"} bpm</p>
            <a href="/details/blood-pressure" className="view-details">
              View Detail Analysis
            </a>
          </div>

          <div className="profile-card">
            <h3>Sleep Duration</h3>
            <p><strong>Issues:</strong> {profileData.sleep?.issues?.length > 0 ? profileData.sleep.issues.join(", ") : "Not available"}</p>
            <p><strong>Total Time:</strong> {profileData.sleep?.totalHours || "Not available"} hours</p>
            <a href="/details/sleep" className="view-details">
              View Detail Analysis
            </a>
          </div>
        </div>
        {/* Place Blogs component here, outside profile-details div */}
        {/* <Blogs /> */}
      </div>
    </div>
  );
};

export default ProfileSection;
