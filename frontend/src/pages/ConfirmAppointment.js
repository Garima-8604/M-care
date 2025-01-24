
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ConfirmAppointment.module.css';
import { useNavigate } from 'react-router-dom';

const ConfirmAppointment = () => {
  const navigate = useNavigate();

  const handleDemoMeeting = () => {
    // Pass doctor details as state if required
    navigate("/successful");
  };
  
  const [profileData, setProfileData] = useState({
    name: "",
    gender: "",
    age: "",
    weight: "",
    height: "",
    allergies: "",
    chronicCondition: "",
    prescriptionMeds: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userEmail = JSON.parse(localStorage.getItem("user")).email;
        const response = await axios.get(`http://localhost:5000/api/profile/${userEmail}`);
        setProfileData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setError("Failed to load profile data. Please try again later.");
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.thankYouMessage}>
        "Thank you very much for booking this appointment, please confirm your details below..."
      </div>

      <div className={styles.contentWrapper}>
        {/* Doctor Card */}
        <div className={styles.doctorCard}>
          <div className={styles.doctorHeader}>
            <div>
              <h2>Dr. Teji Dawane</h2>
              <h4>MBBS, MD - Obstetrics & Gynaecology</h4>
            </div>
            <img src="Teji.png" alt="Dr. Teji Dawane" className={styles.doctorPhoto} />
          </div>
          <p>
            I am Dr. Teji, and I am here to guide you through this beautiful journey with personalized care and support.
            Your well-being and your baby's health are my utmost priorities. Please feel free to share any concerns or
            questions during our session.<br /><br />
            Warm regards,<br />Dr. Teji
          </p>
          <p className={styles.tip}>
            <strong>Tip:</strong> The link to join the online appointment is attached in the Meeting Section. Please save
            the link to join the meeting at the scheduled time.
          </p>
        </div>

        {/* Right Panel */}
        <div className={styles.rightPanel}>
          {/* Patient Details */}
          <div className={styles.patientDetails}>
            <div className={styles.detailsRow}>
              <span className={styles.label}>Name:</span>
              <span className={styles.value}>{profileData.name || 'N/A'}</span>
            </div>
            <div className={styles.detailsRow}>
              <span className={styles.label}>Gender:</span>
              <span className={styles.value}>{profileData.gender || 'N/A'}</span>
            </div>
            <div className={styles.detailsRow}>
              <span className={styles.label}>Appointment Date:</span>
              <span className={styles.value}>25.01.2025</span>
            </div>
            <div className={styles.detailsRow}>
              <span className={styles.label}>Slot:</span>
              <span className={styles.value}>7:30 - 8:00 PM</span>
            </div>
            <div className={styles.detailsRow}>
              <span className={styles.label}>Fees:</span>
              <span className={styles.value}>Rs 275</span>
            </div>
            <div className={styles.detailsRow}>
              <span className={styles.label}>Registration No:</span>
              <span className={styles.value}>24457</span>
            </div>
          </div>

          {/* Meeting Details */}
          <div className={styles.meetingDetails}>
            <label htmlFor="email">Enter Email Address:</label>
            <input
              id="email"
              type="email"
              placeholder="e.g. name@example.com"
              className={styles.emailInput}
            />
            <div className={styles.buttons}>
              <button className={styles.paymentButton}>Payment</button>
              <button className={styles.scheduleButton} onClick={handleDemoMeeting}>
                <img
                  src="google_meet_icon.png"
                  alt="Google Meet Icon"
                  className={styles.googleMeetIcon}
                />
                Schedule Demo Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAppointment;
