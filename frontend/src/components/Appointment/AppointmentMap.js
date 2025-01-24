import React from "react";
import "./AppointmentMap.css";

const AppointmentMap = ({ location }) => {
  return (
    <div className="appointment-map">
      <iframe
        src={`https://www.google.com/maps?q=hospitals near ${location}&output=embed`}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="map"
      ></iframe>
    </div>
  );
};

export default AppointmentMap;
