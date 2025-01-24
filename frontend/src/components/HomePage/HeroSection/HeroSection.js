
import React, { useRef } from 'react';
import styles from './HeroSection.module.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  // References for the scroll containers
  const handleSignUp = () => {
    navigate("/signup"); // Redirect to the sign-up page
  };

  return (
    <main>
    <div className={styles.heroSection}>
      <div className={styles.leftPanel}>
        <img
          className={styles.leftImage}
          src="Maskgroup.png"
          alt="Mother Illustration"
        />
        <p className={styles.slogan}>
          "Join our mission to make maternal healthcare accessible and affordable for every mother, everywhere."
        </p>
      </div>
      <div className={styles.rightPanel} onClick={handleSignUp}>
        <h1>Care for Every Mother, Health for Every Child.</h1>
        <button className={styles.ctaButton}>Join Us Now</button>
      </div>
    </div>
  </main>



  );
};

export default HeroSection;
