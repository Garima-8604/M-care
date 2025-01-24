import React, { useState, useEffect } from "react";
import styles from './Successful.module.css';
import { GOOGLE_CLIENT_ID, GOOGLE_API_KEY, SCOPES } from '../config';
const Successful = () => {
    const [gapi, setGapi] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  

  
    const handleWhatsAppShare = () => {
      const text = encodeURIComponent(
        'Your appointment is scheduled for Wednesday, January 22, 2025, 7:30 PM (IST). ' +
        'Meeting details will be shared shortly.'
      );
      window.open(`https://wa.me/?text=${text}`, '_blank');
    };
  
    return (
      <div className={styles.successfulPage}>
        <div className={styles.container}>
          <div className={styles.successIcon}>✔</div>
          <h1>Meeting Scheduled Successfully</h1>
          <p className={styles.meetingDetails}>
            Wednesday, January 22, 2025, 7:30 PM (IST)
          </p>
          <p className={styles.note}>
            The details are shared with you on your mail. Please do not share this link 
            to anyone else other than patient's.
          </p>
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.buttons}>
            <button
              id={styles.addToCalendar}
              className={`${styles.button} ${isLoading ? styles.loading : ''}`}
              
              disabled={isLoading}
            >
              {isLoading ? 'Creating...' : '📅 Add to calendar'}
            </button>
            <button
              id={styles.shareViaWhatsapp}
              className={styles.button}
              onClick={handleWhatsAppShare}
            >
              📲 Share via Whatsapp
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Successful;