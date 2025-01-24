import React, { useState } from "react";
import DoctorDetails from "../components/Doctor/DoctorDetails";
//import SlotsSection from "../components/Doctor/SlotsSection";
import Tabs from "../components/Doctor/Tabs";
import "./DoctorInfoPage.module.css";

const DoctorInfoPage = () => {
  const [activeTab, setActiveTab] = useState("overview"); // Default tab is 'overview'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="doctor-info-page">
      <h1 className="confirmation-heading">Confirmation Details</h1>
      <DoctorDetails />
      {/* <SlotsSection /> */}
      <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
      </div>
  );
};

export default DoctorInfoPage;