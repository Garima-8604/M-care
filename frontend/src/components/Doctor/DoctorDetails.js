import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DoctorDetails.module.css"; // Import the CSS Module

const DoctorDetails = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    // Pass doctor details as state if required
    navigate("/paymentpage");
  };

  return (
    <div className={styles.doctorDetails}>
      <img
        src="Teji.png"
        alt="Doctor"
        className={styles.doctorImage}
      />
      <div className={styles.doctorInfo}>
        <h2>Dr. Rashmi Swaroop</h2>
        <p>
          MBBS, DGO, Fellowship in Reproductive Medicine <br />
          Gynecologist, Infertility Specialist (25 Years Experience Overall)
        </p>
        <p className={styles.visited}>122+ people visited</p>
      </div>
      <button className={styles.paymentButton} onClick={handleBookNow}>
        Proceed
      </button>
    </div>
  );
};

export default DoctorDetails;
