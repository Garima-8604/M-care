import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./DoctorList.module.css"; // Import the CSS Module

const doctors = [
  {
    name: "Dr. Rashmi Swaroop",
    qualification: "MBBS, DGO, Fellowship in Reproductive Medicine Gynecologist, Infertility Specialist",
    experience: "25+ Years",
    rating: "4.4/5",
    fees: "175",
    availability: ["Online", "Offline"],
    image: "rashmi.png", // Replace with actual image paths
  },
  {
    name: "Dr. Teji Dawane",
    qualification: "MBBS, DGO Gynecologist, Obstetrician",
    experience: "12+ Years",
    rating: "4.1/5",
    fees: "275",
    availability: ["Online"],
    image: "Teji.png", // Replace with actual image paths
  },
  {
    name: "Dr. M. Gowri",
    qualification: "MBBS, DGO Gynecologist, Obstetrician",
    experience: "11+ Years",
    rating: "4.3/5",
    fees: "225",
    availability: ["Offline"],
    image: "gauri.png", // Replace with actual image paths
  },
];

const DoctorList = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleBookNow = (doctor) => {
    // Pass doctor details as state if required
    navigate("/confirm-appointment", { state: { doctor } });
  };

  return (
    <div className={styles["doctor-list"]}>
      <h2>Available Doctors</h2>
      {doctors.map((doctor, index) => (
        <div key={index} className={styles["doctor-card"]}>
          <img
            src={doctor.image}
            alt={doctor.name}
            className={styles["doctor-image"]}
          />
          <div className={styles["doctor-info"]}>
            <h3>{doctor.name}</h3>
            <p className={styles["qualification"]}>{doctor.qualification}</p>
            <p>{doctor.experience} Experience</p>
          </div>
          <div className={styles["appointment-details"]}>
            <h4>Availability</h4>
            <div className={styles["availability"]}>
              {doctor.availability.map((type, idx) => (
                <p key={idx} className={`${styles["badge"]} ${styles[type.toLowerCase()]}`}>
                  {type}
                </p>
              ))}
            </div>
          </div>
          <div className={styles["rating"]}>
            <h4>Avg. Rating</h4>
            <p>
              {doctor.rating} <span className={styles["star"]}>★</span>
            </p>
          </div>
          <div className={styles["fees"]}>
            <h4>Fees</h4>
            <p>Rs. {doctor.fees}/-</p>
          </div>
          <button
            className={styles["book-now"]}
            onClick={() => handleBookNow(doctor)}
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;
