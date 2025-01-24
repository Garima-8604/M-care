
import React from 'react';
import styles from './Footer.module.css'; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.logoSection}>
          <img src="Maskgroup.png" alt="M-Care Logo" />
          <h2>M-Care</h2>
        </div>
        <div className={styles.footerColumns}>
          <div className={styles.footerLeft}>
            <ul>
              <li><a href="#site">Site</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#blogs">Blogs</a></li>
              <li><a href="#tnc">Terms & Conditions</a></li>
              <li><a href="#privacyPolicy">Privacy Policy</a></li>
              <li><a href="#promotion">Promotion</a></li>
            </ul>
          </div>

          <div className={styles.footerMiddle}>
            <ul>
              <li><a href="#career">Career</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#media">Media</a></li>
              <li><a href="#corporatePartnership">Corporate Partnership</a></li>
            </ul>
          </div>

          <div className={styles.footerRight}>
            <div className={styles.contactInfo}>
              <p>M-Care Pvt. Ltd.<br />
                7th Floor, Orion Tech Park,<br />
                Plot No. 45, Outer Ring Road,<br />
                Near Whitefield Main Road Junction,<br />
                Marathahalli, Bangalore - 560037,<br />
                Karnataka, India.
              </p>
              <p>Phone: +91-80-1234-5678</p>
              <p>Email: support@mcare.org</p>
            </div>
            <div className={styles.socialMedia}>
              <h3>Follow Us</h3>
              <ul>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2025 M-CARE. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
