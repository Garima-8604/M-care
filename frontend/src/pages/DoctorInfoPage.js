import React, { useState } from "react";
import DoctorDetails from "../components/Doctor/DoctorDetails";
import Tabs from "../components/Doctor/Tabs";
import styles from "./DoctorInfoPage.module.css"; // Import the CSS Module
import SlotsSection from "../components/Doctor/SlotsSection";

const DoctorInfoPage = () => {
  const [activeTab, setActiveTab] = useState("overview"); // Default tab is 'overview'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.doctorInfoPage}>
      <h1 className={styles.confirmationHeading}>Confirmation Details</h1>
      <DoctorDetails />
      <SlotsSection/>
      <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
    </div>
  );
};

export default DoctorInfoPage;
