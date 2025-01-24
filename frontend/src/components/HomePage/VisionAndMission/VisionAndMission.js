
import React from 'react';
import styles from './VisionAndMission.module.css'; // Import the CSS module

const VisionAndMission = () => {
  return (
    <section className={styles.visionMissionSection}>
        <p className={styles.introductionLine}>
          "Our Pregnancy Healthcare Platform aims to revolutionize maternal healthcare in rural, town, and Tier-3 cities by establishing a network of healthcare hubs."
        </p>

        <div className={styles.visionMissionBoxes}>
          <div className={styles.visionBox}>
            <h2>Vision</h2>
            <p>
              To revolutionize maternal and child healthcare in rural and underserved areas, ensuring every mother and newborn receives quality care, support, and education regardless of their location.
            </p>
          </div>

          <div className={styles.missionBox}>
            <h2>Mission</h2>
            <p>
              Create rural healthcare hubs offering maternal care, mental health, and nutrition services, bridging gaps with telemedicine and outreach while ensuring sustainability through collaboration.
            </p>
          </div>
        </div>
    </section>
  );
};

export default VisionAndMission;
