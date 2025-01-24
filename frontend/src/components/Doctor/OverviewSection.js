import React from 'react';
import './OverviewSection.css';

const OverviewSection = () => {
  return (
    <div className="overview-section">
      {/* Left section: Doctor's overview */}
      <div className="overview-left">
        <h3>About</h3>
        <p>
          Dr. Rashmi Swaroop is a gynecologist in Jayanagar 7th Block, Bangalore, with 20 years of experience in this field. She completed MBBS from M.S. Ramaiah Medical College, Bangalore, in 2000, DGO from J J Medical College, Davangere in 2006, and FIGE from Dr. Kamini Rao Hospital, Bangalore, in 2012. She is a member of the Bangalore Society of Obstetrics & Gynecology, Federation of Obstetrics and Gynecological Societies of India (FOGSI), and the Indian Society for Assisted Reproduction (ISAR).
        </p>
      </div>

      {/* Right section: Fees and address */}
      <div className="overview-right">
        <div className="fees-section">
          <h4>Fees</h4>
          <p>Appointment Fees: Rs 175</p>
          <p>Emergency Fees: Rs 300</p>
        </div>
        <div className="address-section">
          <h4>Address</h4>
          <p>
            11/B, 25th Cross Rd, 2nd Sector, Garden Layout, Sector 2, HSR Layout, Bengaluru, Karnataka, 
            Landmark: Near Poorva Apartments & Behind Indian Oil Petrol Bunk, Bangalore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
