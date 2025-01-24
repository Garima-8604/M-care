import React, { useState } from 'react';
import './Tabs.css';
import OverviewSection from './OverviewSection';
import FeedbackSection from './FeedbackSection';
import EnquirySection from './EnquirySection';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Overview'); // Default tab is Overview

  // Function to render the content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <OverviewSection />;
      case 'Feedback':
        return <FeedbackSection />;
      case 'Enquiry':
        return <EnquirySection />;
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
      {/* Tabs Navigation */}
      <div className="doctor-tabs">
        <div
          className={`tab ${activeTab === 'Overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('Overview')}
        >
          Overview
        </div>
        <div
          className={`tab ${activeTab === 'Feedback' ? 'active' : ''}`}
          onClick={() => setActiveTab('Feedback')}
        >
          Feedback
        </div>
        <div
          className={`tab ${activeTab === 'Enquiry' ? 'active' : ''}`}
          onClick={() => setActiveTab('Enquiry')}
        >
          Enquiry
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Tabs;
